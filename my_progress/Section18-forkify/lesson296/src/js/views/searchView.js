class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    return this.#parentEl;
  }
}

export default new SearchView();
