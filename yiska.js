import {cart, addToCart} from '../data/cart.js';
import {products} from '../data/products.js';

let productHtml = '';
products.forEach((product) => {
  productHtml +=`
  <div class="content">
      <div class="product-image">
        <img src="${product.image}" alt="">
      </div>
      <div class="product-name">
        ${product.name}
      </div>
      <div class="price">$
        ${(product.pricePeswass / 100).toFixed(2)}
      </div>
      <div class="amount">
        
        <select class="js-quantity-selector-${product.id} id="mselect ">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <optzion value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="buy-button">
        <button class="add-to-cart js-add-to-cart"
        data-product-id="${product.id}">
        Add To Cart
        </button> 
      </div>
    </div>
  `
});

document.querySelector('.js-products-container').innerHTML = productHtml;

updatecartquantity();

function updatecartquantity(){
  let cartquantity = 0;
  
    cart.forEach((item) => {
      cartquantity += item.quantity;
    });
    document.querySelector('.js-cart-number').innerHTML = cartquantity;
}


document.querySelectorAll('.js-add-to-cart').forEach((button) =>{
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
const quantitySelector =  Number(document.querySelector(`.js-quantity-selector-${productId}`).value);

    addToCart(productId,quantitySelector)
    updatecartquantity();
  });
});

    
  