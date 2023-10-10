import View from './View.js';

class ResultsFiltersView extends View {
  _parentElement = document.querySelector('.filters');

  _generateMarkup() {
    const curFilter = Object.keys(this._data.filters).find(
      key => this._data.filters[key] === true
    );

    if (this._data.results.length > 1) {
      return Object.keys(this._data.filters).reduce(
        (filter, acc) => (acc += this.generateMarkupButton()),
        ''
      );
    }
    return '';
  }

  generateMarkupButton(filter) {
    return `
      <button data-filter="${filter}" class="btn--inline">
        <span>${filter}</span>
      </button>
    `;
  }
}

export default new ResultsFiltersView();
