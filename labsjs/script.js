const product = {
  id: 1,
  name: "Auriculares inalámbricos",
  price: 59.99,
  tags: ["audio", "gadget", "oferta"],
  inStock: true
};

const { name, price, inStock } = product;

const productInfo= document.getElementById('product-info');

const title = document.createElement('h2');

title.textContent = name;

const priceInfo= document.createElement('p');

priceInfo.textContent = `$${price}`;

const stockInfo = document.createElement('p');

stockInfo.textContent = inStock? "En stock": "Agotado";
const stock = inStock? "En stock": "Agotado";


/*if (inStock) {
  stockInfo.textContent = "En stock";
} else {
  stockInfo.textContent = "Agotado";
}*/


//productInfo.appendChild(title);
//productInfo.appendChild(priceInfo);
//productInfo.appendChild(stockInfo);


//FUNCTIONS

function applyDiscount(price, rate) {
    return price * (1 - rate);
}

function formatCurrency(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(amount);
}


const discounted = applyDiscount(price,0.15);

//agrego € a los precios

const original = formatCurrency(price);
const descuento = formatCurrency(discounted);

productInfo.innerHTML =
`
<h2>${name}</h2>
<p>Precio original: ${original} </p>
<p>Precio con descuento: ${descuento} </p>
<p> ${stock} </p>
`
;


/*______________________________________________________________________________________*/

//DECLARO TODO LO QUE ES FAVORITOS Y VOY A NECESITAR DEBAJO DE FORMA GLOBAL.

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let diez = []; // lo hacemos global para usarlo más abajo


//FUNCION PARA GUARDAR EN LOCALSTORAGE LO QUE FAVORITEE
function saveFavorites() {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}


//FUNCION CREAR BOTO FAVORITO Y ASIGNARLE EL EVENTO A ESE BOTON
function crearBotonFavorito(boton, postId) {
  // Estilo inicial
  if (favorites.includes(postId)) {
    boton.style.backgroundColor = 'gold';
  }

  boton.addEventListener('click', () => {

    const id = Number(boton.dataset.id);

    if (favorites.includes(id)) {
      favorites = favorites.filter(favId => favId !== id);
      boton.style.backgroundColor = '';
    } else {
      favorites.push(id);
      boton.style.backgroundColor = 'gold';
    }

    saveFavorites();
    
  });
}




//PRIMER FETCH

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(respuesta=>{
    if(!respuesta.ok){
        throw new Error('error')
        } 
        return respuesta.json();
    })
    .then(data=>{ //promise
        
        const contenedor= document.getElementById('posts-container');

        diez = data.slice(0,10); //toma los primeros diez items- podria haber cinvertido la data en array y recorrer los primeros diez con for-let y luego push esa data diez.push(data[i]) y diez ahora tiene data1 data 2 data 3...etc
    
        diez.forEach(post=>{ //a cada elemento de los diez post le asigno un foreach donde creo los elementos les digo que tienen  y luego los inyecto al html

            const articulo = document.createElement('article');
            articulo.classList.add('post');

            const titulo = document.createElement('h4');
            titulo.textContent= post.title;

            const cuerpo = document.createElement('p');
            cuerpo.textContent= post.body;

            const boton =  document.createElement('button');
            boton.textContent= 'Favorito';
            boton.dataset.id=post.id;

            crearBotonFavorito(boton, post.id);


            articulo.appendChild(titulo);
            articulo.appendChild(cuerpo);
            articulo.appendChild(boton);
            contenedor.appendChild(articulo);
        });
    })
    .catch(error=>{
        console.error(error); //y sino error
    })



// SUBMITEAR POST EN EL FORM


const form = document.getElementById('new-post-form');
const container = document.getElementById('posts-container');

form.addEventListener('submit', (e)=> {
  e.preventDefault(); // evita que recargue la página

  const title = form.title.value;
  const body = form.body.value;

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, body })
  })

    .then(res => res.json())
    .then(post => {
      // Crear el nuevo <article>
      const articulo = document.createElement('article');
      articulo.classList.add('post');

      const titulo = document.createElement('h4');
      titulo.textContent = post.title;

      const cuerpo = document.createElement('p');
      cuerpo.textContent = post.body;

      const boton = document.createElement('button');
      boton.textContent = 'Favorito';
      boton.dataset.id=post.id;

      crearBotonFavorito(boton, post.id);
      

      articulo.appendChild(titulo);
      articulo.appendChild(cuerpo);
      articulo.appendChild(boton);

      // Insertar el nuevo post como reciente y no como ultimo (appenchild)
      container.prepend(articulo);

      // Limpiar el formulario
      form.reset();
    })
    .catch(error => console.error('Error al crear post:', error));
});


//VER MIS FAVORITOS


const showFavsBtn = document.getElementById('show-favs');
//const container = document.getElementById('posts-container');

showFavsBtn.addEventListener('click', (e)=>{
    
    container.innerHTML = '';
    
    const favPosts = diez.filter(post=> favorites.includes(post.id)); //Lo que estamos haciendo es filtrar los posts en diez, y solo mantener aquellos cuyo id esté presente en el array favoritos


    favPosts.forEach(post => {
        // Crear el artículo para cada post
        const articulo = document.createElement('article');
        articulo.classList.add('post');

        const titulo = document.createElement('h4');
        titulo.textContent = post.title;

        const cuerpo = document.createElement('p');
        cuerpo.textContent = post.body;

        const boton = document.createElement('button');
        boton.textContent = 'Favorito';
        boton.dataset.id=post.id;//asigno el id al boton

        crearBotonFavorito(boton, post.id);
  

        articulo.appendChild(titulo);
        articulo.appendChild(cuerpo);
        articulo.appendChild(boton);

        container.appendChild(articulo);
        });

});