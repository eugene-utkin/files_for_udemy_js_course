import View from './View.js';

class ResultsFiltersView extends View {
  _parentElement = document.querySelector('.filters');

  _generateMarkup() {
    const curFilter = Object.keys(this._data.filters).find(
      key => this._data.filters[key] === true
    );

    if (this._data.results.length > 1) {
      return this.generateMarkupButton();
    }
    return '';
  }

  generateMarkupButton() {
    return `

    `;
  }
}

export default new ResultsFiltersView();
