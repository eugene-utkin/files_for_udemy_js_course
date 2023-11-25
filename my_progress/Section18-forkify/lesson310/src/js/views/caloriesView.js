import View from './View.js';

class CaloriesView extends View {
  _parentElement = document.querySelector('.calories-window');
  _errorMessage = 'Something went wrong. Please, try again.';
  _message = '';

  _window = document.querySelector('.calories-window');
}

export default new CaloriesView();
