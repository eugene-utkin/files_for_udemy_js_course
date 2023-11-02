import { async } from 'regenerator-runtime';
import { API_URL, RES_PER_PAGE, KEY } from './config.js';
// import { getJSON, sendJSON } from './helpers.js';
import { AJAX } from './helpers.js';
import { startsWith } from 'core-js/./es/string';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
    filters: {
      none: true,
      cookingTime: false,
      numberOfIngredients: false,
    },
  },
  bookmarks: [],
  shoppingList: [],
};

const createRecipeObject = function (data) {
  const { recipe } = data.data;
  return {
    id: recipe.id,
    title: recipe.title,
    publisher: recipe.publisher,
    sourceUrl: recipe.source_url,
    image: recipe.image_url,
    servings: recipe.servings,
    cookingTime: recipe.cooking_time,
    ingredients: recipe.ingredients,
    ...(recipe.key && { key: recipe.key }),
  };
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}${id}?key=${KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    // Temp error handling
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;

    const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        image: rec.image_url,
        ...(rec.key && { key: rec.key }),
        cookingTime: rec.cooking_time,
        numberOfIngredients: rec.ingredients?.length,
      };
    });
    state.search.page = 1;
  } catch (err) {
    console.error(`${err} 💥💥💥💥`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage; // 0;
  const end = page * state.search.resultsPerPage; // 9;

  const activeFilter = Object.keys(state.search.filters).find(
    key => state.search.filters[key] === true
  );

  // Filter functionality doesn't work, because API call
  // doesn't return needed information
  let filteredResults = state.search.results;
  if (activeFilter !== 'none') {
    filteredResults = filteredResults.sort(function (a, b) {
      return a[activeFilter] - b[activeFilter];
    });
  }

  return filteredResults.slice(start, end);
};

export const setSearchResultsFilter = function (filter) {
  Object.keys(state.search.filters).forEach(key => {
    if (key === filter) {
      state.search.filters[key] = true;
    } else {
      state.search.filters[key] = false;
    }
  });
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings // 2 * 8 / 4 = 4
  });

  state.recipe.servings = newServings;
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmarked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmarked
  if (id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
};

export const addIngredientsToShoppingList = function (recipe) {
  // Add ingredients
  recipe.ingredients.forEach(ing => {
    const humanizedDescription = ing.description
      .split(' ')
      .map(word => {
        let editedWord =
          word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
        editedWord = editedWord
          .split('/')
          .map(word => {
            return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
          })
          .join('/');
        return editedWord;
      })
      .join(' ');
    console.log(ingWords);
    if (!state.shoppingList.includes(ing.description)) {
      state.shoppingList.push(ing.description);
    }
  });
  console.log(state.shoppingList);
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

const clearBookmarks = function () {
  localStorage.clear('bookmarks');
};
// clearBookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    const ingredients = Object.entries(newRecipe)
      .filter(
        entry =>
          entry[0].startsWith('ingredient') &&
          Object.values(entry[1]).some(val => val !== '')
      )
      .map(ing => {
        if (
          (ing[1]['quantity'] !== '' || ing[1]['unit'] !== '') &&
          ing[1]['description'] === ''
        )
          throw new Error('Invalid input! Ingredient must have a description.');

        return {
          quantity: ing[1]['quantity'] ? +ing[1]['quantity'] : null,
          unit: ing[1]['unit'],
          description: ing[1]['description'],
        };
      });
    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.title,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };
    const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (err) {
    throw err;
  }
};
