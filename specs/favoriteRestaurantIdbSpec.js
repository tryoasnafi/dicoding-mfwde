import FavoriteRestaurantIdb from '../src/scripts/utils/favorite-restaurant-idb';
import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteRestaurantContract';

describe('Favorite Restaurant Idb Contract Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurants()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
