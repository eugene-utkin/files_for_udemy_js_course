import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsFiltersView from './views/resultsFiltersView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import shoppingListView from './views/shoppingListView.js';
import shoppingListItemView from './views/shoppingListItemView.js';
import addToCalendarView from './views/addToCalendarView.js';
import calendarView from './views/calendarView.js';
import caloriesView from './views/caloriesView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept();
// }

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering recipe
    recipeView.render(model.state);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render search results section
    controlSearchSection();
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) Render NEW pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state);
};

const controlAddBookmark = function () {
  // 1) Add/remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlAddIngredients = function () {
  // 1) Add ingredient
  model.addIngredientsToShoppingList(model.state.recipe);

  // 2) Update items counter
  shoppingListItemView.shoppingListItemsCount = 0;

  // 3) Render shopping list
  shoppingListView.render(model.state.shoppingList.sort());
};

const controlFilters = function (activeFilter) {
  // 1) set filter
  model.setSearchResultsFilter(activeFilter);

  // 2) Render search results section
  controlSearchSection(1);
};

const controlSearchSection = function (page = model.state.search.page) {
  // 1) Render filter buttons
  resultsFiltersView.render(model.state.search);

  // 2) Render search results
  resultsView.render(model.getSearchResultsPage(page));

  // 3) Render pagination buttons
  paginationView.render(model.state.search);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlUpdateCalendarDay = function (day) {
  // 1) Add recipe to calendar
  model.updateCalendarDay(day);

  // 2) Update calendar in the header
  controlCalendar();
};

const controlShoppingList = function () {
  shoppingListView.render(model.state.shoppingList);
};

const controlCalendar = function () {
  const entries = Object.entries(model.state.calendar);
  const calendarIsEmpty = entries.every(entry => entry[1] === null);
  calendarView.render(calendarIsEmpty ? null : entries);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change ID in URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('💥', err);
    addRecipeView.renderError(err.message);
  }
};

const controlRemoveFromCalendar = function (day) {
  if (!day) return;
  console.log(day);
  // Remove recipe from the calendar
  model.removeFromCalendar(day);
  console.log(model.state.calendar);

  recipeView.render(model.state);
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  recipeView.addHandlerAddIngredientsToShoppingList(controlAddIngredients);
  recipeView.addHandlerUpdateCalendarDay(controlUpdateCalendarDay);
  resultsFiltersView.addHandlerClick(controlFilters);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerCheckValue();
  addRecipeView.addHandlerUpload(controlAddRecipe);
  shoppingListView.addHandlerRender(controlShoppingList);
  calendarView.addHandlerRender(controlCalendar);
  calendarView.addHandlerClick(controlRemoveFromCalendar);
  caloriesView.addHandlerRender(controlCalories);
  // addToCalendarView.addHandlerRender(controlAddToCalendar);
};
init();
