const toggleMenu = document.querySelector('.nav__toggler')
const menu = document.querySelector('.nav__list')
const menuLinks = [...document.getElementsByClassName('nav__list-item')]

const removeActiveClass = () => menuLinks.forEach((el) => el.classList.remove('active'))

// Handle show and hide collapse menu
toggleMenu.addEventListener('click', () => {
  menu.classList.toggle('show')
})

document.addEventListener('click', (event) => {
  if (menu.classList.contains('show') && !event.target.isEqualNode(toggleMenu) && !event.target.isEqualNode(menu) && !menu.contains(event.target)) {
    menu.classList.remove('show');
  }
})

// Handle remove and add active class in navigation links item
menuLinks.forEach((link, key) => {
  link.addEventListener('click', () => {
    removeActiveClass()
    menuLinks[key].classList.add('active')
  })
})