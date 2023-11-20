import View from './View.js';

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

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(dayData => calendarItemView.render()).join('');
  }
}

export default new calendarView();
