const productsData = [
  {
    id: 1,
    name: "Smartphone",
    price: 15000,
    image: "https://via.placeholder.com/200x150?text=Smartphone"
  },
  {
    id: 2,
    name: "Headphones",
    price: 2500,
    image: "https://via.placeholder.com/200x150?text=Headphones"
  },
  {
    id: 3,
    name: "Laptop",
    price: 45000,
    image: "https://via.placeholder.com/200x150?text=Laptop"
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 5000,
    image: "https://via.placeholder.com/200x150?text=Smartwatch"
  }
];

let cart = [];

function loadProducts() {
  const productsContainer = document.getElementById('products');
  productsData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product';
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);
  cart.push(product);
  updateCartUI();
}

function updateCartUI() {
  document.getElementById('cart-count').textContent = cart.length;
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  document.getElementById('total-price').textContent = total;
}

loadProducts();
