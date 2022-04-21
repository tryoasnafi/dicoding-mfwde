import RestaurantResource from '../../data/resaurant-resource';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <section id="restaurant" class="container px-1">
      </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantResource.getRestaurantDetail(url.id);
    const restaurantContainer = document.getElementById('restaurant');
    restaurantContainer.innerHTML += createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
