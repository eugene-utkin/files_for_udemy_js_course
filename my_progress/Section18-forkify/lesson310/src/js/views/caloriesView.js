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
    this._addHandlerShowWindow();
  }

  _addHandlerShowWindow() {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.calories-btn');
      if (!btn) return;

      caloriesView.toggleWindow();
      handler();
    });
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
}

export default new CaloriesView();
