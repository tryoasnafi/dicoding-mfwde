import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import ActiveLinkInitiator from '../utils/active-link-initiator';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    button,
    drawer,
    content,
    menuList,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._menuList = menuList;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });

    ActiveLinkInitiator.init({
      menuList: this._menuList,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || routes['/'];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
