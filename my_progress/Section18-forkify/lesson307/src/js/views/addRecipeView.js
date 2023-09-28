import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {}
}

export default new AddRecipeView();
