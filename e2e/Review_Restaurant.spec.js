const assert = require('assert');

Feature('Reviewing Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('reviewing one restaurant', async ({ I }) => {
  I.waitForElement('restaurant-list restaurant-item');
  I.click(locate('restaurant-item').first());
  I.waitForElement('#formAddNewReview');

  const name = 'Tryo Asnafi';
  const review = 'This is a great restaurant!';

  I.seeElement('[name=name]');
  I.fillField('[name=name]', name);
  I.seeElement('[name=review]');
  I.fillField('[name=review]', review);

  I.seeElement('#btnAddNewReview');
  I.click('#btnAddNewReview');

  I.refreshPage();

  I.waitForElement('#restaurantReviews');

  const lastReview = locate('.restaurant__review-item').last();
  const reviewerName = await I.grabTextFrom(lastReview.find('.restaurant__review-name'));
  const reviewerMessage = await I.grabTextFrom(lastReview.find('.restaurant__review-message'));

  assert.strictEqual(name, reviewerName);
  assert.strictEqual(review, reviewerMessage);
});

