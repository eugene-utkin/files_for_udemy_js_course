import View from './View.js';
import { capitalize } from '../helpers.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    console.log(this._data);
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
