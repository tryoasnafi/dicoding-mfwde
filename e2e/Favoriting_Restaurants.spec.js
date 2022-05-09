const assert = require('assert');

const favoritingOneRestaurant = async ({ I }) => {
  I.see('You have no favorite restaurant yet', '.favorite__heading');

  I.amOnPage('/');
  I.waitForElement('restaurant-list restaurant-item');

  const firstRestaurant = locate('restaurant-item').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant.find('.card__title'));

  I.click(firstRestaurant.find('a'));

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('restaurant-item .card__title');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
};

Feature('Favoriting Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited movies', ({ I }) => {
  I.see('You have no favorite restaurant yet', '.favorite__heading');
});

Scenario('favoriting one restaurant', async ({ I }) => {
  await favoritingOneRestaurant({ I });
});

Scenario('unfavoriting one restaurant', async ({ I }) => {
  await favoritingOneRestaurant({ I });

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  I.click('restaurant-item a');

  I.waitForElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorite');
  I.see('You have no favorite restaurant yet', '.favorite__heading');
});
