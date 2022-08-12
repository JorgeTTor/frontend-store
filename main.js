const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHambIcon = document.querySelector('.menu-hamb')
const mobileMenu = document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  console.log('click')
}


function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}