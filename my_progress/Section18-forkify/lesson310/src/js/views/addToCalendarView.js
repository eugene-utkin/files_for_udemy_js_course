import View from './View.js';
import addToCalendarItemView from './addToCalendarItemView.js';

class AddToCalendarView extends View {
  _parentElement = document.querySelector('.add-to-calendar-dropdown');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    console.log(Object.entries(this._data));
    return Object.entries(this._data)
      .map(day => addToCalendarItemView.render(day, false))
      .join('');
  }
}

export default new AddToCalendarView();
