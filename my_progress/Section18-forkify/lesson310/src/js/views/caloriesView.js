import View from './View.js';

class CaloriesView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'Something went wrong. Please, try again.';
  _message = '';

  _window = document.querySelector('.calories-window');
  _overlay = document.querySelector('.calories-overlay');

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }
}

export default new CaloriesView();
