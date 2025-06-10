// Ejercicio 1: Objeto de Producto
const product = {
  id: 1,
  name: "Auriculares inalámbricos",
  price: 59.99,
  tags: ["audio", "gadget", "oferta"],
  inStock: true
};

const { name, price, inStock } = product;
const productInfo = document.getElementById('product-info');

const applyDiscount = (price, rate) => price * (1 - rate);
const formatCurrency = amount => new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR'
}).format(amount);

const discountedPrice = applyDiscount(price, 0.15);

productInfo.innerHTML = `
  <h2>${name}</h2>
  <p>Precio original: ${formatCurrency(price)}</p>
  <p>Precio con descuento: ${formatCurrency(discountedPrice)}</p>
  <p>${inStock ? "En stock" : "Agotado"}</p>
`;

// Ejercicio 3: Cargar Posts
const postsContainer = document.getElementById('posts-container');
let allPosts = [];

function renderPost(post) {
  const article = document.createElement('article');
  article.classList.add('post');
  article.innerHTML = `
    <h4>${post.title}</h4>
    <p>${post.body}</p>
    <button class="fav-btn" data-id="${post.id}">★ Favorito</button>
  `;
  postsContainer.appendChild(article);
}

function updateFavButtons() {
  const buttons = document.querySelectorAll('.fav-btn');
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];

  buttons.forEach(btn => {
    const id = +btn.dataset.id;
    btn.classList.toggle('favorited', favs.includes(id));
    btn.onclick = () => {
      const currentFavs = JSON.parse(localStorage.getItem('favorites')) || [];
      const index = currentFavs.indexOf(id);
      if (index >= 0) {
        currentFavs.splice(index, 1);
      } else {
        currentFavs.push(id);
      }
      localStorage.setItem('favorites', JSON.stringify(currentFavs));
      updateFavButtons();
    };
  });
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => {
    allPosts = data.slice(0, 10);
    allPosts.forEach(renderPost);
    updateFavButtons();
  });

// Ejercicio 4: Crear nuevo post
const form = document.getElementById('new-post-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  const title = form.title.value;
  const body = form.body.value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body })
  })
    .then(res => res.json())
    .then(post => {
      post.id = Date.now(); // Generar ID falso
      allPosts.unshift(post);
      postsContainer.innerHTML = '';
      allPosts.forEach(renderPost);
      updateFavButtons();
      form.reset();
    });
});

// Ejercicio 5: Ver Favoritos
const showFavsBtn = document.getElementById('show-favs');
showFavsBtn.addEventListener('click', () => {
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];
  postsContainer.innerHTML = '';

  const favPosts = allPosts.filter(p => favs.includes(p.id));
  if (favPosts.length === 0) {
    postsContainer.innerHTML = '<p>No hay favoritos aún.</p>';
  } else {
    favPosts.forEach(renderPost);
  }
  updateFavButtons();
});
