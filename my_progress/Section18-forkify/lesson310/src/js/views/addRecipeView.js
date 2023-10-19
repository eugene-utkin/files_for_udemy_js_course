import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  toggleWindow() {
    this._overlay.classList.toggle('hidden');
    this._window.classList.toggle('hidden');
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  addHandlerCheckValue(handler) {
    this._parentElement.addEventListener('change', function (e) {
      const ingredient = e.target.closest('.ingredient');
      if (!ingredient) return;

      const tooltip = e.target
        .closest('.ingredient-section')
        .querySelector('.ingredient-tooltip');
      if (tooltip) tooltip.remove();
      console.log(tooltip);

      console.log(ingredient.value);
      const ingArr = ingredient.value.split(',').map(el => el.trim());
      if (ingArr.length !== 3) {
        const markup = `
          <div class="ingredient-tooltip">
            Invalid ingredient format!
          </div>
        `;
        ingredient.insertAdjacentHTML('beforebegin', markup);
      }
    });
    this._parentElement.addEventListener('focus', function (e) {});
  }

  checkIngredientValue() {}

  generateMarkupTooltip() {
    return;
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
