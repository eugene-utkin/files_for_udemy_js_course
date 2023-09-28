import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');

  _window = document.querySelector('.add-recipe-window');

  _generateMarkup() {}
}

export default new AddRecipeView();
