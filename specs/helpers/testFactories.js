import FavoriteButtonRestaurant from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/utils/favorite-restaurant-idb';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonRestaurant.init({
    favoriteButtonContainer: document.getElementById('favoriteButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantIdb,
    restaurant,
  });
};

export {
  // eslint-disable-next-line import/prefer-default-export
  createFavoriteButtonPresenterWithRestaurant,
};
