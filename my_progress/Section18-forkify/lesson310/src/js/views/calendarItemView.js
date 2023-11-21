import View from './View.js';
import { capitalize } from '../helpers.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    const id = window.location.hash.slice(1);
    return `
      <li class="nav-calendar-day">
        <span class="calendar-day">${capitalize(
          this._data[0]
        )}</span>: <a class="preview__link ${
      this._data[1].id === id ? 'preview__link--active' : ''
    }" href="#${this._data[1].id}">
      </li>
    `;
  }
}

export default new CalendarItemView();
