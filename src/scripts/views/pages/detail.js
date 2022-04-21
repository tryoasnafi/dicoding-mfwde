import RestaurantResource from '../../data/restaurant-resource';
import UrlParser from '../../routes/url-parser';
import AddReviewHelper from '../../utils/add-review-helper';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import { createFailedLoadTemplate, createLoaderTemplate, createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
      <div id="loader"></div>
      <section id="restaurant" class="container">
        <div id="favoriteButtonContainer"></div>
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

      FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.getElementById('favoriteButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city,
        },
      });

      const addNewReviewForm = document.getElementById('formAddNewReview');
      addNewReviewForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        await AddReviewHelper.send();
      });
    } catch (error) {
      restaurantContainer.innerHTML = createFailedLoadTemplate();
    }

    loader.style.display = 'none';
  },
};

export default Detail;
