import View from './View.js';

class ShoppingListItemView extends View {
  _parentElement = '';

  _generateMarkup() {
    return `
      <li>

      </li>
    `;
  }
}

export default new ShoppingListItemView();
