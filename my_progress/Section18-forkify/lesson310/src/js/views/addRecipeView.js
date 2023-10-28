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
          required
          name="quantity-${ingredientNumber}"
          placeholder="Quantity"
          class="quantity"
        />
        <input
          type="text"
          required
          name="unit-${ingredientNumber}"
          placeholder="Unit"
          class="unit"
        />
        <input
          type="text"
          required
          name="description-${ingredientNumber}"
          placeholder="Description"
          class="description"
        />
      </div>
    `;
  }

  addHandlerUpload(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();

      const dataArr = [...new FormData(this)];
      const ingredients = {};
      const data = {};
      dataArr.map(input => {
        if (
          input[0].startsWith('quantity') ||
          input[0].startsWith('unit') ||
          input[0].startsWith('description')
        ) {
          const type = input[0].split('-')[0];
          const number = input[0].split('-')[1];
          if (!(`ingredient-${number}` in data)) {
            data[`ingredient-${number}`] = {};
          }
          data[`ingredient-${number}`][type] = input[1];
        } else {
          data[input[0]] = input[1];
        }
      });
      handler(data);
    });
  }

  addHandlerCheckValue(handler) {
    this._parentElement.addEventListener('change', function (e) {
      const ingredientSection = e.target.closest('.ingredient-section');
      if (!ingredientSection) return;

      const quantityInput = ingredientSection.querySelector('.quantity');
      const unitInput = ingredientSection.querySelector('.unit');
      const descriptionInput = ingredientSection.querySelector('.description');

      const tooltip = ingredientSection.querySelector('.ingredient-tooltip');
      if (tooltip) tooltip.remove();

      if (
        (quantityInput.value !== '' || unitInput.value !== '') &&
        !descriptionInput.value
      ) {
        const markup = `
          <div class="ingredient-tooltip">
            Invalid input! Ingredient must have a description.
          </div>
        `;
        descriptionInput.insertAdjacentHTML('beforebegin', markup);
      }
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
