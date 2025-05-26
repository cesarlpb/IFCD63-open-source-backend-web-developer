## 🛠️ Lab Entregables — Interactividad, DOM y APIs (Cliente JS)

| Tema         | Módulos                                                           | Habilidades clave                                                                                     |
| ------------ | ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **JS #2-3**  | DOM & Eventos <br> Fetch API & Async/Await <br> Objetos & LocalStorage | ✔ Crear y usar objetos JS <br> ✔ Definir funciones utilitarias <br> ✔ Manipular el DOM dinámicamente <br> ✔ Consumir APIs con `fetch` <br> ✔ Persistencia con LocalStorage |

### 1 · Objetivo

Practicar interactividad avanzada en el cliente usando JavaScript:  
- Definir y usar objetos y funciones utilitarias.  
- Actualizar dinámicamente el DOM según eventos.  
- Consumir APIs externas (GET y POST) con `fetch`.  
- Almacenar datos en LocalStorage para persistencia.

---

### 2 · Ejercicios

#### Ejercicio 1: Objeto de Producto  
- Declara en `script.js` el objeto:
  ```js
  const product = {
    id: 1,
    name: "Auriculares inalámbricos",
    price: 59.99,
    tags: ["audio", "gadget", "oferta"],
    inStock: true
  };
  ```

* Extrae con destructuring `name`, `price` e `inStock`.
* En tu `index.html` crea `<div id="product-info"></div>` y, desde JS, inserta:

  * Un `<h2>` con `name`.
  * Un `<p>` con `price`.
  * Un `<p>` que muestre “En stock” o “Agotado” según `inStock`.

#### Ejercicio 2: Funciones Utilitarias

* Implementa en `script.js`:

  ```js
  function applyDiscount(price, rate) {
    return price * (1 - rate);
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(amount);
  }
  ```
* Calcula el precio con un 15 % de descuento y muéstralo, junto al precio original, dentro de `#product-info`, usando `formatCurrency`.

#### Ejercicio 3: Carga y muestra Posts

* En `index.html` añade:

  ```html
  <section id="posts">
    <h3>Posts</h3>
    <div id="posts-container"></div>
  </section>
  ```
* En `script.js`, al cargar la página:

  1. Llama a `fetch('https://jsonplaceholder.typicode.com/posts')`.
  2. Parsea la respuesta con `.json()`.
  3. Toma los primeros 10 posts y por cada uno crea:

     ```html
     <article class="post">
       <h4>{título}</h4>
       <p>{cuerpo}</p>
       <button class="fav-btn" data-id="{id}">★ Favorito</button>
     </article>
     ```

     e insértalos en `#posts-container`.

#### Ejercicio 4: Crear nuevo Post

* Añade antes de `#posts-container`:

  ```html
  <form id="new-post-form">
    <input name="title" placeholder="Título" required>
    <textarea name="body" placeholder="Contenido" required></textarea>
    <button type="submit">Crear Post</button>
  </form>
  ```
* Captura el `submit`, usa `preventDefault()`.
* Envía los datos a
  `POST https://jsonplaceholder.typicode.com/posts`
  con:

  ```js
  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body })
  })
  ```
* Al recibir la respuesta, añade el nuevo `<article>` al inicio de `#posts-container`.

#### Ejercicio 5: Favoritos con LocalStorage

* Para cada botón `.fav-btn`:

  * Al hacer clic, lee su `data-id` y guarda/quita ese ID en un array `favorites` en LocalStorage (`JSON.stringify`/`parse`).
  * Cambia el estilo del botón (por ejemplo, color amarillo si está en favoritos).
* Añade un botón global `<button id="show-favs">Ver Favoritos</button>`:

  * Al hacer clic, vacía `#posts-container` y vuelve a renderizar solo los posts cuyos IDs estén en `favorites`.
  * Si no hay favoritos, muestra `<p>No hay favoritos aún.</p>`.

---

### 3 · Entrega

* Carpeta `/lab-client-js/` con:

  * `index.html`
  * `style.css`
  * `script.js`
* Capturas de pantalla o vídeo corto mostrando:

  1. Información del producto y descuento aplicado.
  2. Listado inicial de posts.
  3. Creación de un nuevo post.
  4. Marcado/desmarcado de favoritos.
  5. Visualización de favoritos.

---

### Criterios de evaluación comunes

| Peso | Criterio                                                                                            |
| ---- | --------------------------------------------------------------------------------------------------- |
| 40 % | **Correctitud técnica** (cada ejercicio cumple sus requisitos)                                      |
| 30 % | **Interactividad y UX** (feedback claro, animaciones/transiciones suaves, validaciones mínimas)     |
| 20 % | **Código limpio** (nombres de variables descriptivos, funciones reutilizables, comentarios mínimos) |
| 10 % | **Persistencia y consumo de APIs** (uso correcto de LocalStorage y manejo de respuestas de `fetch`) |

---

Happy coding!

