import View from './View.js';

class CaloriesView extends View {
  _parentElement = document.querySelector('.recipe');
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

  _addHandlerShowWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
  }
}

export default new CaloriesView();
