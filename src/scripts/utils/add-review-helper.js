import RestaurantResource from '../data/restaurant-resource';
import { createRestaurantReviewTemplate } from '../views/templates/template-creator';

const AddReviewHelper = {
  async send() {
    const data = this._getData();
    try {
      const response = await RestaurantResource.addNewReview(data);
      this._sendHandler(response);
    } catch (error) {
      console.log(error);
    }
  },

  _sendHandler(response) {
    if (response.status === 201) {
      this._reloadReviews();
    } else {
      throw new Error('Failed to add new review');
    }
  },

  _getData() {
    this._form = document.getElementById('formAddNewReview');
    return {
      id: this._form.elements.id.value,
      name: this._form.elements.name.value,
      review: this._form.elements.review.value,
    };
  },

  _reloadReviews() {
    this._renderReviews();
    this._form.reset();
  },

  async _renderReviews() {
    const reviewsContainer = document.getElementById('restaurantReviews');

    try {
      const response = await RestaurantResource.getRestaurantDetail(this._getData().id);
      reviewsContainer.innerHTML = createRestaurantReviewTemplate(response);
    } catch (error) {
      reviewsContainer.innerHTML = `<p>${error.message}</p>`;
    }
  },
};

export default AddReviewHelper;
