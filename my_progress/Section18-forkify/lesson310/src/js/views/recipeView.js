import View from './View.js';
import { capitalize } from '../helpers.js';

// import icons from '../img/icons.svg'; // Parcel 1
import icons from 'url:../../img/icons.svg'; // Parcel 2
import { Fraction } from 'fractional';

class RecipeView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'We could not find that recipe. Please try another one!';
  _message = '';

  addHandlerRender(handler) {
    ['hashchange', 'load'].forEach(ev => window.addEventListener(ev, handler));
  }

  addHandlerUpdateServings(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--update-servings');
      if (!btn) return;
      const { updateTo } = btn.dataset;
      if (+updateTo > 0) handler(+updateTo);
    });
  }

  addHandlerAddBookmark(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--bookmark');
      if (!btn) return;
      handler();
    });
  }

  addHandlerAddIngredientsToShoppingList(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--add-to-shopping-list');
      if (!btn) return;
      handler();
    });
  }

  addHandlerAddToCalendar(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--add-to-calendar');
      if (!btn) return;
      btn.classList.toggle('calendar-btn-active');
      const { day } = btn.dataset;
      handler(day);
    });
  }

  addHandler;

  _generateMarkup() {
    return `
      <figure class="recipe__fig">
        <img src="${this._data.recipe.image}" alt="${
      this._data.recipe.title
    }" class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.recipe.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            this._data.recipe.cookingTime
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${icons}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.recipe.servings
          }</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.recipe.servings - 1
            }">
              <svg>
                <use href="${icons}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${
              this._data.recipe.servings + 1
            }">
              <svg>
                <use href="${icons}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${
          this._data.recipe.key ? '' : 'hidden'
        }">
          <svg>
            <use href="${icons}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${icons}#icon-bookmark${
      this._data.recipe.bookmarked ? '-fill' : ''
    }"></use>
          </svg>
        </button>
        <button class="btn--round btn--add-to-shopping-list">
          <svg class="">
            <use href="${icons}#icon-plus-circle"></use>
          </svg>
        </button>
        <div class="add-to-calendar">
          <button class="btn--round btn--add-to-calendar">
            <svg class="">
              <use href="${icons}#icon-check"></use>
            </svg>
          </button>
          <div class="add-to-calendar-dropdown">
            ${Object.entries(this._data.calendar)
              .map(this._generateMarkupCalendarButton)
              .join('')}
          </div>
        </div>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.recipe.ingredients
            .map(this._generateMarkupIngredient)
            .join('')}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${
            this._data.recipe.publisher
          }</span>. Please check out
          directions at their website.
        </p>
        <a
          class="btn--small recipe__btn"
          href="${this._data.recipe.sourceUrl}"
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;
  }

  _generateMarkupIngredient(ing) {
    return `
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${
          ing.quantity ? new Fraction(ing.quantity).toString() : ''
        }</div>
        <div class="recipe__description">
          <span class="recipe__unit">${ing.unit}</span>
          ${ing.description}
        </div>
      </li>
    `;
  }

  _generateMarkupCalendarButton(day) {
    const id = window.location.hash.slice(1);
    const active = day[1] && day[1]['id'] === id;
    return `
      <div class="calendar-segment">
        <div>
        </div>
        <span class="calendar-day">${capitalize(day[0])}:</span>
        <button data-day="${day[0]}" class="btn--inline btn--add-to-calendar ${
      active ? 'calendar-btn-active' : ''
    }">
          <span class="calendar-add">${
            day[1] ? 'Replace' : 'Add'
          }</span><span class="calendar-remove">Remove</span>
        </button>
      </div>
    `;
  }
}

export default new RecipeView();
