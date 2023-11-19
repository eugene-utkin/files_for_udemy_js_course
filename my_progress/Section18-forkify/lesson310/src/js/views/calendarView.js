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
    console.log(Object.entries(this._data));
    return this._data.map();
  }
}

export default new calendarView();
