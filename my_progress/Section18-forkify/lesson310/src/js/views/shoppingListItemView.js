import View from './View.js';

class ShoppingListItemView extends View {
  _parentElement = '';

  constructor() {
    super();
    this.shoppingListItemsCount = 0;
  }

  _generateMarkup() {
    return `
      <li class="shopping-list-ingredient">
        ${++this.shoppingListItemsCount}. ${this._data}
      </li>
    `;
  }
}

export default new ShoppingListItemView();
