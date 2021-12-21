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
    cartNumbers();
  })
}

// function to load existing localStorage cart items
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.cartspan span').textContent = productNumbers;
  }
}

function cartNumbers() {
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
}

onLoadCartNumbers();
