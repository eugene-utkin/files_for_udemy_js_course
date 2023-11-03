import View from './View.js';

class ShoppingListView extends View {
  _parentElement = document.querySelector('.ingredients__list');
  _errorMessage = 'Shopping list is empty.';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new ShoppingListView();
