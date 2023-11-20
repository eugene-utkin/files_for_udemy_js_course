import View from './View.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
      <li class="nav-calendar-day">
        ${capitalize(this._data[0])}
      </li>
    `;
  }
}

export default new CalendarItemView();
