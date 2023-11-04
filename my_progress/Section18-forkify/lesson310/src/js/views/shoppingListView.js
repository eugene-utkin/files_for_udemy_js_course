import View from './View.js';
import shoppingListItemView from './shoppingListItemView.js';

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

  _generateMarkup() {
    console.log(this._data);
    return this._data
      .map(ingredient => shoppingListItemView.render(ingredient, false))
      .join('');
  }
}

export default new ShoppingListView();
