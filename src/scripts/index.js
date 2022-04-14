import 'regenerator-runtime';
import '../styles/main.scss';
import './components/restaurant-list'
import './components/food-list'
import './utils/toggleMenu'
import dataFood from './data/data-food.json'
import dataRestaurant from './data/data-restaurant.json'

const restaurantListEl = document.querySelector('restaurant-list')
restaurantListEl.restaurants = dataRestaurant.restaurants

const foodListEl = document.querySelector('food-list')
foodListEl.foods = dataFood.results