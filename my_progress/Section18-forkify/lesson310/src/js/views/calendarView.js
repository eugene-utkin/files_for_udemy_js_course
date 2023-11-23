import View from './View.js';
import calendarItemView from './calendarItemView.js';

class calendarView extends View {
  _parentElement = document.querySelector('.nav-calendar__list');
  _errorMessage = `
    <p>
      Calendar is empty.
      <br />
      <br />
      Find a nice recipe and add it to the Calendar.
    </p>
  `;
  _message = '';

  addHandlerClick() {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--calendar-remove-recipe');
      if (!btn) return;

      const { day } = btn.dataset;
    });
  }

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(dayData => calendarItemView.render(dayData, false))
      .join('');
  }
}

export default new calendarView();
