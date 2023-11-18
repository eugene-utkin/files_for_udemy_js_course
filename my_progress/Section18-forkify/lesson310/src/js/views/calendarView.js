import View from './View.js';

class calendarView extends View {
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new calendarView();
