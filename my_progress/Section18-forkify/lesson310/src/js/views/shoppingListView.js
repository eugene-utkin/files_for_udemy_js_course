import View from './View.js';

class ShoppingListView extends View {
  _parentElement = document.querySelector('.ingredients__list');
  _errorMessage = `
    <p>
      Shopping list is empty.
      <br />
      <br />
      Find a nice recipe and add ingredients to Shopping list.
    </p>
  `;
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
}

export default new ShoppingListView();
