import RestaurantResource from '../../data/resaurant-resource';
import UrlParser from '../../routes/url-parser';
import { createFailedLoadTemplate, createLoaderTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="loader"></div>
      <section id="restaurant" class="container px-1">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.getElementById('restaurant');
    const loader = document.getElementById('loader');

    loader.innerHTML = createLoaderTemplate();

    try {
      const restaurant = await RestaurantResource.getRestaurantDetail(url.id);
      restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
    } catch (error) {
      restaurantContainer.innerHTML = createFailedLoadTemplate();
    }

    loader.style.display = 'none';
  },
};

export default Detail;
