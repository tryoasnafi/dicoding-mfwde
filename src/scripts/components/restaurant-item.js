class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  get restaurant() {
    return this._restaurant
  }

  render() {
    this.innerHTML = `
      <a href="#">
        <img src="${this._restaurant.pictureId}" alt="${this._restaurant.name} Restaurant" class="restaurant-image" loading="lazy"  />
        <h4 class="card__title text-overflow">${this._restaurant.name}</h4>
        <p class="card__description text-overflow">${this._restaurant.description}</p>
        <section class="flex align-center">
          <p class="flex"> <img src="./images/rating-star.svg" alt="rating icon" loading="lazy" /> <span class="label">${this._restaurant.rating.toFixed(1)}</span></p>
          <p class="flex px-1"><img src="./images/map-pin.svg" alt="location icon" loading="lazy" /> <span class="label">${this._restaurant.city}</span></p>
        </section>
      </a>
    `
  }
}

customElements.define('restaurant-item', RestaurantItem)
