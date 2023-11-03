import View from './View.js';

class ShoppingListView extends View {
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new ShoppingListView();
