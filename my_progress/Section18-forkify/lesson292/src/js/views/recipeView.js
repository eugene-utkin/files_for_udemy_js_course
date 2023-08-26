class RecipeView {
  #parentElement = document.querySelector('.recipe');

  render(data) {
    this.#data = data;
  }
}

export default new RecipeView();
