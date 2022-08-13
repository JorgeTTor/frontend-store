const menuEmail = document.querySelector('.navbar-email')
const menuCartIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHambIcon = document.querySelector('.menu-hamb')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
  console.log('click')
}


function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
  
  if(!isAsideClosed) {
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

  // aside.classList.toggle('inactive')
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }

  aside.classList.add('inactive');

}