import View from './View.js';

class CaloriesView extends View {
  _parentElement = document.querySelector('.recipe');
  _errorMessage = 'Something went wrong. Please, try again.';
  _message = '';

  _window = document.querySelector('.calories-window');
  _overlay = document.querySelector('.overlay');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.calories-btn');
      handler();
    });
  }
}

export default new CaloriesView();
