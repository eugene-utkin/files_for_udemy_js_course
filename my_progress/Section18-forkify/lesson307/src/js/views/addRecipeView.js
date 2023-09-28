import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {}

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
