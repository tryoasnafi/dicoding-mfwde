const ActiveLinkInitiator = {
  init({ menuList }) {
    this._menuList = [...menuList];
    this._addEventListenerForEachLink();
  },

  _addEventListenerForEachLink() {
    this._menuList.forEach((menu) => menu.addEventListener('click', () => this._onClick(menu)));
  },

  _onClick(menu) {
    this._removeActiveLink(this._getActiveLink());
    this._addActiveLink(menu);
  },

  _addActiveLink(menu) {
    menu.classList.add('active');
  },

  _removeActiveLink(menu) {
    menu.classList.remove('active');
  },

  _getActiveLink() {
    return this._menuList.filter((menu) => menu.classList.contains('active'))[0];
  },
};

export default ActiveLinkInitiator;
