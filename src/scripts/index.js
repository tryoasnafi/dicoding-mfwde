import 'regenerator-runtime';
import '../styles/main.scss';
import './components/restaurant-list';
import './components/food-list';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.getElementById('hamburgerButton'),
  drawer: document.getElementById('navigationDrawer'),
  content: document.getElementById('mainContent'),
  menuList: document.getElementsByClassName('nav__list-item'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
  swRegister();
});
