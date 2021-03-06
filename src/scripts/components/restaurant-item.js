import API_ENDPOINT from '../global/api-endpoint';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  get restaurant() {
    return this._restaurant;
  }

  render() {
    this.innerHTML = `
      <a href="/#/detail/${this._restaurant.id}">
        <section>
          <img data-src="${API_ENDPOINT.IMAGE_SMALL(this._restaurant.pictureId)}" src="/icons/placeholder.png" alt="${this._restaurant.name} Restaurant" class="restaurant-image lazyload" />
          <h4 class="card__title text-overflow">${this._restaurant.name}</h4>
          <p class="card__description text-overflow">${this._restaurant.description}</p>
          <section class="flex align-center">
            <p class="flex"> <img src="./icons/rating-star.svg" width="20px" height="24px" alt="rating icon" loading="lazy" /> <span class="label">${this._restaurant.rating.toFixed(1)}</span></p>
            <p class="flex px-1"><img src="./icons/map-pin.svg" width="16px" height="24px" alt="location icon" loading="lazy" /> <span class="label">${this._restaurant.city}</span></p>
          </section>
        </section>
      </a>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
