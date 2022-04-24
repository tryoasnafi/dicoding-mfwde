import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.API_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_URL}/detail/${id}`,
  SEARCH: (query) => `${CONFIG.API_URL}/search?q=${query}`,
  ADD_NEW_REVIEW: `${CONFIG.API_URL}/review`,
  IMAGE_SMALL: (pictureId) => `${CONFIG.API_URL}/images/small/${pictureId}`,
  IMAGE_MEDIUM: (pictureId) => `${CONFIG.API_URL}/images/medium/${pictureId}`,
  IMAGE_LARGE: (pictureId) => `${CONFIG.API_URL}/images/large/${pictureId}`,
};

export default API_ENDPOINT;
