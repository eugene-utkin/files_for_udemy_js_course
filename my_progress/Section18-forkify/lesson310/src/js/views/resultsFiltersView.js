import View from './View.js';
import { FILTERS } from '../config.js';

class ResultsFiltersView extends View {
  _parentElement = document.querySelector('.filters');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const filter = btn.dataset.filter;
      handler(filter);
    });
  }

  _generateMarkup() {
    const curFilter = Object.keys(this._data.filters).find(
      key => this._data.filters[key] === true
    );

    if (this._data.results.length > 1) {
      let markup = `
        <p class="filters-header">Filters:</p> 
        <div class="filter-buttons"> 
      `;
      markup = Object.keys(this._data.filters).reduce(
        (acc, filter) =>
          (acc += this.generateMarkupButton(filter, filter === curFilter)),
        markup
      );
      return (
        markup +
        `
        </div>
      `
      );
    }
    return '';
  }

  generateMarkupButton(filter, active) {
    console.log(filter);
    return `
      <button data-filter="${filter}" class="btn--inline ${
      active ? 'filter-btn-active' : ''
    }" ${active ? 'disabled' : ''}>
        <span>${FILTERS[filter]}</span>
      </button>
    `;
  }
}

export default new ResultsFiltersView();
