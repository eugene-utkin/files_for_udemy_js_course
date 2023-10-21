import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _message = 'Recipe was successfully uploaded :)';

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _btnAdd = document.querySelector('.add-ingredient__btn');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this._addHandlerAddIngredient();
    this.extraIngredients = 0;
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

  _addHandlerAddIngredient() {
    this._btnAdd.addEventListener('click', this.addIngredient.bind(this));
  }

  addIngredient(e) {
    e.preventDefault();
    console.log(e.target);

    this.extraIngredients += 1;
    this._window.style.cssText += `
      top: ${500 + this.extraIngredients * 25}px;
      transition-duration: 0s;
    `;
    // this._window.style.top = '10px';
    const ingredientMarkup = this.generateIngredientMarkup();

    this._btnAdd.insertAdjacentHTML('beforebegin', ingredientMarkup);
  }

  generateIngredientMarkup() {
    const ingredientNumber = 6 + this.extraIngredients;
    return `
      <label>Ingredient ${ingredientNumber}</label>
      <div class="ingredient-section">
        <input
          type="text"
          name="ingredient-${ingredientNumber}"
          placeholder="Format: 'Quantity,Unit,Description'"
        />
      </div>
    `;
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      console.log(e.target);
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
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
