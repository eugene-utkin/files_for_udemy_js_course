import View from './View.js';
import { capitalize } from '../helpers.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
      <li class="nav-calendar-day">
        <span class="calendar-day">${capitalize(this._data[0])}</span>
      </li>
    `;
  }
}

export default new CalendarItemView();
