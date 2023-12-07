import View from './View.js';

class AddToCalendarView extends View {
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return Object.entries(this._data)
      .map(day => addToCalendarItemView.render(day, false))
      .join('');
  }
}

export default new AddToCalendarView();
