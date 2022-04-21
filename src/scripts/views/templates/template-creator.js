import API_ENDPOINT from '../../global/api-endpoint';
import CONFIG from '../../global/config';

const _createRestaurantIdentityTemplate = (restaurant) => `
  <section class="flex flex-wrap">
    <p class="flex mr-1">
      <img class="restaurant__rating-icon" src="./images/rating-star.svg" alt="rating icon" loading="lazy" />
      <span class="label">${(restaurant.rating).toFixed(1)}</span>
    </p>
    <p class="flex">
      <img class="restaurant__map-icon" src="./images/map-pin.svg" width="16px" alt="location icon" loading="lazy" /> 
      <span class="label">${restaurant.address}, ${restaurant.city}.</span>
    </p>
  </section>
`;

const _createRestaurantDescriptionTemplate = (description) => `
  <section class="restaurant__description">
    <h3>Description</h3>
    <p>${description}</p>
  </section>
`;

const _createRestaurantCategoryTemplate = (categories) => `
  <section class="restaurant__category">
    <h3>Categories</h3>
    <div class="restaurant__category-wrapper">
      ${categories.map((category) => `<p class="restaurant__category-item">${category.name}</p>`).join('')}
    </div>
  </section>
`;

const _createRestaurantMenuTemplate = (menus) => `
  <section class="restaurant__menu">
    <h3>Menu</h3>
    <div class="restaurant__menu-wrapper">
      <section class="restaurant__food-menu" tabindex="0">
        <h4 class="block">Foods</h4>
        ${menus.foods.map((food) => `<p class="restaurant__food-item">${food.name}</p>`).join('')}  
      </section>
      <section class="restaurant__drink-menu" tabindex="0">
        <h4 class="block">Drinks</h4>
        ${menus.drinks.map((drink) => `<p class="restaurant__drink-item">${drink.name}</p>`).join('')}  
      </section>
    </div>
  </section>
`;

const _createRestaurantReviewTemplate = ({ name, customerReviews }) => `
  <section class="restaurant__review">
    <h3 tabindex="0">${name}'s Review</h3>
    ${customerReviews.map((review) => `
      <div class="restaurant__review-item" tabindex="0">
        <h4 class="restaurant__review-name">${review.name}</h4>
        <p class="restaurant__review-date">${review.date}</p>
        <p class="restaurant__review-message">${review.review}</p>
      </div>
    `).join('')}
  </section>
`;

const _createRestaurantFormReviewTemplate = (id) => `
  <section class="restaurant__form-review">
    <div class="sticky">
      <h3>Let's share your experience here!</h3>
      <form action="${CONFIG.BASE_URL}/review" method="POST">
        <input hidden type="text" name="id" value="${id}">
        <div class="form-group">
          <label for="name">Name</label>
          <input class="form-control" id="name" name="name" placeholder="Input your name" required></input>
        </div>
        <div class="form-group">
          <label for="review">Review</label>
          <textarea class="form-control" id="review" name="review" rows="3" placeholder="Give us some feedback" required></textarea>
        </div>
        <button type="submit" title="submit new review"  id="btnAddNewReview">Submit</button>
      </form>
    </div>
  </section>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__main-detail">
    <div class="restaurant-image">
      <img class="restaurant__picture" src="${API_ENDPOINT.IMAGE_MEDIUM(restaurant.pictureId)}" alt="${restaurant.name}" loading="lazy" />
    </div>
    <section class="restaurant__info" tabindex="0">  
      <h2 class="restaurant__name">${restaurant.name}</h2>
      ${_createRestaurantIdentityTemplate(restaurant)}
      ${_createRestaurantDescriptionTemplate(restaurant.description)}
      ${_createRestaurantCategoryTemplate(restaurant.categories)}
    </section>
  </div>
  ${_createRestaurantMenuTemplate(restaurant.menus)}
  <div class="restaurant__review-container">
    ${_createRestaurantReviewTemplate(restaurant)}
    ${_createRestaurantFormReviewTemplate(restaurant.id)}
  </div>
`;

const createLoaderTemplate = () => `
  <div class="loader-wrapper">
    <img src='../images/loading.svg'>
  </div>
`;

const createFailedLoadTemplate = () => `
  <div class="load__container">
    <p class="failed-load">Unable to load data</p>
    <p>Check your internet connection and please, try again!</p>
  </div>
`;

const createFavoriteButtonTemplate = () => `
  <button aria-label="add to favorite restaurant" title="add to favorite restaurant" id="favoriteButton" class="favorite">
     <img src="../images/heart.svg">
  </button>
`;

const createFavoritedButtonTemplate = () => `
  <button aria-label="unfavorite this restaurant" title="unfavorite this restaurant" id="favoriteButton" class="favorite">
    <img src="../images/heart-fill.svg">
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createLoaderTemplate,
  createFailedLoadTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
};
