class FoodItem extends HTMLElement {
  set food(food) {
    this._food = food
    this.render()
  }

  get food() {
    return this._food
  }

  render() {
    this.innerHTML = `
      <a href="#">
        <img src="${this._food.image}" alt="${this._food.title}" class="food-image" loading="lazy" />
        <h4 class="card__title text-overflow">${this._food.title}</h4>
      </a>
    `
  }
}

customElements.define('food-item', FoodItem)
