import View from './View.js';

class calendarView extends View {
  _parentElement = document.querySelector('.nav-calendar__list');

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new calendarView();
