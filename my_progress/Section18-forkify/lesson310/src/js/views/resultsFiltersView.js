import View from './View.js';

class ResultsFiltersView extends View {
  _parentElement = document.querySelector('.filters');

  _generateMarkup() {
    const curFilter = Object.keys(this._data.filters).find(
      key => this._data.filters[key] === true
    );

    if (this._data.results.length > 1) {
      let markup = `
        <p>Filters:</p> 
        <div class="filter-buttons"> 
      `;
      markup = Object.keys(this._data.filters).reduce(
        (acc, filter) =>
          (acc += this.generateMarkupButton(filter, filter === curFilter)),
        markup
      );
      markup += `
        </div>
      `;
    }
    return '';
  }

  generateMarkupButton(filter, active) {
    console.log(filter);
    return `
      <button data-filter="${filter}" class="btn--inline">
        <span>${filter}</span>
      </button>
    `;
  }
}

export default new ResultsFiltersView();
