import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this.render();
  }

  get restaurants() {
    return this._restaurants;
  }

  render() {
    this._restaurants.forEach((restaurant) => {
      const restaurantItemEl = document.createElement('restaurant-item');
      restaurantItemEl.classList.add('card');
      restaurantItemEl.restaurant = restaurant;
      this.appendChild(restaurantItemEl);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
