import View from './View.js';

class CaloriesView extends View {
  _parentElement = document.querySelector('.calories-window');
  _errorMessage = 'Something went wrong. Please, try again.';
  _message = '';
}

export default new CaloriesView();
