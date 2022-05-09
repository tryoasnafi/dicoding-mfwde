import RestaurantResource from '../../data/restaurant-resource';
import dataFood from '../../data/data-food.json';
import {
  createFailedLoadTemplate,
  createLoaderTemplate,
  createSkeletonFoodsTemplate,
  createSkeletonRestaurantsTemplate,
} from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div id="loader"></div>
      <div class="jumbotron" tabindex="0">
        <h2 class="greeting">Welcome to Resfi</h2>
        <p class="tagline">How hungry are you today?</p>
      </div>
      <section id="content" class="container px-1">
        <h3 tabindex="0">Explore Restaurant</h3>
        <hr />
        <restaurant-list>
          ${createSkeletonRestaurantsTemplate(20)}
        </restaurant-list>
        <h3 tabindex="0">Recommended Food</h3>
        <hr />
        <food-list>
          ${createSkeletonFoodsTemplate(10)}
        </food-list>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('restaurant-list');
    const foodListEl = document.querySelector('food-list');
    const loader = document.getElementById('loader');

    loader.innerHTML = createLoaderTemplate();

    try {
      const restaurants = await RestaurantResource.getRestaurantList();
      restaurantsContainer.innerHTML = '';
      restaurantsContainer.restaurants = restaurants;
    } catch (error) {
      restaurantsContainer.innerHTML = createFailedLoadTemplate();
    }

    try {
      foodListEl.innerHTML = '';
      foodListEl.foods = dataFood.results;
    } catch (error) {
      foodListEl.innerHTML = createFailedLoadTemplate();
    }

    loader.style.display = 'none';
  },
};

export default Home;
