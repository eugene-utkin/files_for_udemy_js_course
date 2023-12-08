import View from './View.js';
import { capitalize } from '../helpers.js';
import icons from 'url:../../img/icons.svg';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    let markup = `
      <li class="nav-calendar-day">
      <span class="calendar-day">${capitalize(
        this._data[0]
      )}:</span><span class="calendar-recipe">
    `;
    if (this._data[1]) {
      markup += `
        <a href="#${this._data[1].id}">${this._data[1].title}</a>
        <button class="btn--tiny btn--calendar-remove-recipe" data-day="${this._data[0]}">
          <svg>
            <use href="${icons}#icon-minus-circle"></use>
          </svg>
        </button>
      `;
    } else {
      markup += 'No recipe.';
    }
    markup += `
        </span>
      </li>
    `;
    return markup;
  }
}

export default new CalendarItemView();