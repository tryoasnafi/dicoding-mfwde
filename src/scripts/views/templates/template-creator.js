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

const _createRestaurantReviewTemplate = (restaurant) => `
  <section class="restaurant__review">
    <h3 tabindex="0">${restaurant.name}'s Review</h3>
    ${restaurant.customerReviews.map((review) => `
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
        <button type="submit" id="btnAddNewReview">Submit</button>
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
    <p class="failed-load">Failed to load data</p>
  </div>
`;

const createMovieItemTemplate = (movie) => `
  <div class="movie-item">
    <div class="movie-item__header">
      <img class="movie-item__header__poster" alt="${movie.title}" src="${movie.backdrop_path ? CONFIG.IMAGE_BASE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}">
      <div class="movie-item__header__rating">
        <p>⭐️<span class="movie-item__header__rating__score">${movie.vote_average}</span></p>
      </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="/#/detail/${movie.id}">${movie.title}</a></h3>
        <p>${movie.overview}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createMovieItemTemplate,
  createRestaurantDetailTemplate,
  createLoaderTemplate,
  createFailedLoadTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
