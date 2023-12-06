import View from './View.js';

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
    console.log(this._data);
    return `
      <div class="calories-info">
        <p>${this._data.name}</p>
      </div>
    `;
  }
}

export default new CaloriesView();
