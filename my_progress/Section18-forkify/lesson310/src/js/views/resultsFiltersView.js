import View from './View.js';

class ResultsFiltersView extends View {
  _parentElement = document.querySelector('.filters');

  _generateMarkup() {
    const curFilter = this._data.filters;

    if (this._data.results.length > 1) {
    }
    return '';
  }
}

export default new ResultsFiltersView();
