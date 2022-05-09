import FavoriteRestaurantIdb from '../src/scripts/utils/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unfavoriting A Restaurant', () => {
  const addFavoriteButtonContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show the unfavorite button when the restaurant has been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the favorite button when the restaurant has been favorited before', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove favorite restaurant from the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    document.getElementById('favoriteButton').click();
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unfavorited movie is not in the list', async () => {
    await TestFactories.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.getElementById('favoriteButton').click();

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
