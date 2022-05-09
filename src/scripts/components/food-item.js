class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food;
    this.render();
  }

  get food() {
    return this._food;
  }

  render() {
    this.innerHTML = `
      <a href="#">
        <section>
          <img data-src="${this._food.image}" src="/icons/placeholder.png" alt="${this._food.title}" class="food-image lazyload"/>
          <h4 class="card__title text-overflow">${this._food.title}</h4>
        </section>
      </a>
    `;
  }
}

customElements.define('food-item', FoodItem);
