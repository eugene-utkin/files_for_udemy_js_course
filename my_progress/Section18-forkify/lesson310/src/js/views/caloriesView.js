import View from './View.js';

class CaloriesView extends View {
  _parentElement = document.querySelector('.calories-window');
  _errorMessage = 'Something went wrong. Please, try again.';
}

export default new CaloriesView();
