let carts = document.querySelectorAll('.add-cart');
console.log("console test")

let products = [
  {
    name: 'Rood Geprint T-Shirt',
    tag: 't-shirt',
    price: 25,
    inCart: 0
  },
  {
    name: 'Zwarte loopschoenen',
    tag: 'schoen',
    price: 45,
    inCart: 0
  },
  {
    name: 'Grijze trainer',
    tag: 'trainer',
    price: 30,
    inCart: 0
  },
  {
    name: 'Blauwe Polo',
    tag: 'polo',
    price: 25,
    inCart: 0
  },
  {
    name: 'Grijze schoenen',
    tag: 'schoen',
    price: 25,
    inCart: 0
  },
  {
    name: 'Zwart T-shirt',
    tag: 't-shirt',
    price: 45,
    inCart: 0
  },
  {
    name: 'Zwart-Grijze sokken',
    tag: 'sokken',
    price: 30,
    inCart: 0
  },
  {
    name: 'Horloge zwart-wit',
    tag: 'horloge',
    price: 25,
    inCart: 0
  },
  {
    name: 'Horloge zwart-geel',
    tag: 'polo',
    price: 25,
    inCart: 0
  },
  {
    name: 'Zwarte loopschoenen',
    tag: 'schoen',
    price: 45,
    inCart: 0
  },
  {
    name: 'Grijze sneakers',
    tag: 'schoen',
    price: 30,
    inCart: 0
  },
  {
    name: 'Zwarte trainer',
    tag: 'trainer',
    price: 25,
    inCart: 0
  }

];

// grab all products
for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCost(products[i])
  })
}

// function to load existing localStorage cart items
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if(productNumbers) {
    document.querySelector('.cartspan span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);

  // first time u add cartNumer = 0, so false. after 1 its true.
  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers+1);
    document.querySelector('.cartspan span').textContent = productNumbers+1;
  } else {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.cartspan span').textContent = 1;
  }
  setItems(product)
}

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  if(cartItems != null) {
    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(grabbedProduct) {
    // console.log("The product costs", product.price);
    let cartCost = localStorage.getItem("totalCost");
    console.log("My cart cost is", cartCost);
    console.log(typeof cartCost);

    if (cartCost != null) {
      cartCost = parseInt(cartCost);
      localStorage.setItem("totalCost", cartCost + grabbedProduct.price);
    } else {
      localStorage.setItem("totalCost", grabbedProduct.price);
    }
}

/* winnkelwagen js*/

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItem);
  let productContainer = document.querySelector(".products-container");


  if(cartItems && productContainer ) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <ion-icon name="close-circle"></ion-icon>
        <img src="./images/${item.tag}.jpg">
        <span>${item.name}</span>
        </div>
      `

    })
  }
}

















onLoadCartNumbers();
