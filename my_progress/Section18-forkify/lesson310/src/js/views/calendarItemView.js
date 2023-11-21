import View from './View.js';
import { capitalize } from '../helpers.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    console.log(this._data);
    let markup = `
      <li class="nav-calendar-day">
      <span class="calendar-day">${capitalize(this._data[0])}: 
    `;
    if (this._data[1]) {
      markup += `
        <a href="#${this._data[1].id}">${this._data[1].title}</a>
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
