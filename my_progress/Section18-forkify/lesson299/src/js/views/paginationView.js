import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = this._data.results / this._data.resultsPerPage;
    console.log(numPages);

    // Page 1, and there are other pages
    // Page 1, and there are NO other pages
    // Last page
    // Other page
  }
}

export default new PaginationView();
