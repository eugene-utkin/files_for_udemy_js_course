import View from './View.js';
import { capitalize } from '../helpers.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    console.log(this._data);
    let markup = `
      <li class="nav-calendar-day">
      <span class="calendar-day">${capitalize(this._data[0])}</span>: 
    `;
    if (this._data[1]) {
      markup += `
        <a href="#${this._data[1].id}">${this._data[1].title}</a>
      `;
    } else {
      markup += 'No recipe.';
    }
    markup += `
      </li>
    `;
    return `
      <li class="nav-calendar-day">
        <span class="calendar-day">${capitalize(
          this._data[0]
        )}</span>: <a class="preview__link ${
      this._data[1] && this._data[1].id === id ? 'preview__link--active' : ''
    }" href="#${this._data[1].id}">${this._data[1].title}</a>
      </li>
    `;
  }
}

export default new CalendarItemView();
