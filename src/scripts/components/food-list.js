import './food-item';

class FoodList extends HTMLElement {
  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  get foods() {
    return this._foods;
  }

  render() {
    this._foods.forEach((food) => {
      const foodItemEl = document.createElement('food-item');
      foodItemEl.classList.add('card');
      foodItemEl.food = food;
      this.appendChild(foodItemEl);
    });
  }
}

customElements.define('food-list', FoodList);
