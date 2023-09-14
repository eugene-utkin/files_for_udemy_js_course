import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      console.log(btn);

      const goToPage = btn.dataset.goto;

      handler();
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this.generateMarkupButton('next', curPage + 1);
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return this.generateMarkupButton('prev', curPage - 1);
    }
    // Other page
    if (curPage < numPages) {
      return (
        this.generateMarkupButton('prev', curPage - 1) +
        this.generateMarkupButton('next', curPage + 1)
      );
    }

    // Page 1, and there are NO other pages
    return '';
  }

  generateMarkupButton(direction, pageNumber) {
    return `
      <button data-goto="${pageNumber}" class="btn--inline pagination__btn--${direction}">
        <span>Page ${pageNumber}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-${
      direction === 'next' ? 'right' : 'left'
    }"></use>
        </svg>
      </button>
    `;
  }
}

export default new PaginationView();
