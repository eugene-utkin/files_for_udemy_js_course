import View from './View.js';

class ShoppingListItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    console.log(this._data);
    return `
      <li>
        ${this._data}
      </li>
    `;
  }
}

export default new ShoppingListItemView();
