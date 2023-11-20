import View from './View.js';

class CalendarItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
      <li>
      </li>
    `;
  }
}

export default new CalendarItemView();
