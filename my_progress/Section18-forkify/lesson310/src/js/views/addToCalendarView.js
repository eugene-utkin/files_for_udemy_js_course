import View from './View.js';

class AddToCalendarView extends View {
  _parentElement = document.querySelector('.add-to-calendar-dropdown');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    this._data;
  }
}

export default new AddToCalendarView();
