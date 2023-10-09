import View from './View.js';

class ResultsFiltersView extends View {
  _parentElement = document.querySelector('.filters');

  _generateMarkup() {
    if (this._data.results.length > 1) {
    }
  }
}

export default new ResultsFiltersView();
