import View from './View.js';
import addToCalendarItemView from './addToCalendarItemView.js';

class AddToCalendarView extends View {
  _parentElement = document.querySelector('.add-to-calendar-dropdown');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data.map(day => addToCalendarItemView.render(day, false));
  }
}

export default new AddToCalendarView();
