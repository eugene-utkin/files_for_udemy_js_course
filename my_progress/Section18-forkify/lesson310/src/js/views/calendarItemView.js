import View from './View.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
      <li class="nav-calendar-day">
      </li>
    `;
  }
}

export default new CalendarItemView();
