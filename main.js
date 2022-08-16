const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHambIcon = document.querySelector('.menu-hamb')
const mobileMenu = document.querySelector('.mobile-menu')
const cartIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambIcon.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');
    
  if(!isAsideClosed) {
      aside.classList.add('inactive');
    }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if(!isAsideClosed) {
    aside.classList.add('inactive');
  }
  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
  //aside.classList.toggle('inactive');
  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive');
  }
  aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
  name : 'Plant Pot',
  price: 135,
  image: "./assets/products/1graypot_purpleplate.jpg"
});
productList.push({
  name : 'White Ceramic Plant Pot',
  price: 145,
  image: "./assets/products/2whiteJar.jpg"
});
productList.push({
  name : 'Thre Ceramic Plant Pots',
  price: 235,
  image: "./assets/products/3whiteJarandplates.jpg"
});

// <div class="product-card">
// <img src="./assets/products/1graypot_purpleplate.jpg" alt="gray pot" class="product-img">
// <div class="product-info">
//   <div>
//     <p>$135,00</p>
//     <p>Plant Pot</p>
//   </div>
//   <figure>
//     <img src="/assets/YardSale_Icons/bt_add_to_cart.svg" alt="logo cart" class>
//   </figure>
// </div>
// </div>

function renderProducts(arr){
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    //product = { name. price, image } => product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
  
    const productName = document.createElement('p');
    productName.innerText =  product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', "/assets/YardSale_Icons/bt_add_to_cart.svg");
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }

}


renderProducts(productList);