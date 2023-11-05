import View from './View.js';

class ShoppingListItemView extends View {
  _parentElement = '';

  constructor() {}

  _generateMarkup() {
    return `
      <li class="shopping-list-ingredient">
        ${this._data}
      </li>
    `;
  }
}

export default new ShoppingListItemView();
