import View from './View.js';
import { capitalize } from '../helpers.js';

class CaloriesView extends View {
  _parentElement = document.querySelector('.calories-result');
  _errorMessage = 'Something went wrong. Please, try again.';
  _message = '';

  _window = document.querySelector('.calories-window');
  _overlay = document.querySelector('.calories-overlay');
  _btnClose = document.querySelector('.btn--close-calories-modal');

  constructor() {
    super();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  _generateMarkup() {
    return `
      <div class="calories-info">
        <p>${capitalize(this._data.name)} - 1${this._data.ingredientUnit} - ${
      this._data.calories
    }${this._data.caloriesUnit}</p>
      </div>
    `;
  }
}

export default new CaloriesView();
