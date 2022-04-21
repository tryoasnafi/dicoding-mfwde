import FavoriteRestaurantIdb from '../../utils/favorite-restaurant-idb';
import { createFailedLoadTemplate, createLoaderTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div id="loader"></div>
      <section id="content" class="container">
        <h2 class="favorite__heading">Your Favorite Restaurant</h2>
        <restaurant-list></restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('restaurant-list');
    const contentHeading = document.querySelector('.favorite__heading');
    const loader = document.getElementById('loader');

    loader.innerHTML = createLoaderTemplate();

    try {
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
      if (restaurants.length <= 0) {
        contentHeading.innerHTML = 'You have no favorite restaurant yet';
      }
      restaurantsContainer.restaurants = restaurants;
    } catch (error) {
      contentHeading.innerHTML = createFailedLoadTemplate();
    }

    loader.style.display = 'none';
  },
};

export default Favorite;
