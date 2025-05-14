## 🛠️ Lab 1 — Maqueta una **“Card” responsive**

| Tema         | Módulos                                                                   | Habilidades clave                                                                                                                     |
| ------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **CSS #4-6** | Positioning (relative / absolute / fixed) <br> Flexbox <br> Media Queries | ✔ Maquetar con cajas flex <br> ✔ Dominar *relative / absolute* para iconos, badges, etc. <br> ✔ Adaptar la tarjeta a distintos anchos |

### 1 · Objetivo

Diseñar y codificar una **tarjeta de producto** que se vea impecable desde 320 px hasta 1440 px. Debe incluir imagen, nombre del artículo, precio, descripción corta y un botón de acción.

### 2 · Requisitos funcionales

1. **Estructura mínima**

   ```html
   <article class="card">
     <img … />
     <div class="card-body">
       <h2>Nombre</h2>
       <p class="price">$ 49,99</p>
       <p class="desc">Descripción breve…</p>
       <button>Comprar</button>
     </div>
   </article>
   ```
2. **Posicionamiento**

   * El precio debe ir **absoluto** sobre la esquina superior-derecha de la imagen.
   * Usa `position: relative` en `.card` para crear el contexto.
3. **Flexbox**

   * A partir de **768 px** la tarjeta se parte en dos columnas: imagen a la izquierda, texto a la derecha.
   * Usa `display:flex` y `flex:1` para que la imagen conserve proporción.
4. **Media queries**

   * `< 768 px`: diseño **stacked** (imagen arriba, texto abajo).
   * `≥ 768 px`: diseño **lado a lado**.
   * `≥ 1200 px`: límite máximo de ancho: 600 px.
5. **Accesibilidad**

   * Texto suficientemente contrastado.
   * Atributo `alt` descriptivo en la imagen.
6. **Hover**

   * Al pasar el ratón sobre la tarjeta, eleva con `transform: translateY(-4px)` + sombra suave.

### 3 · Entrega

* Carpeta `/lab-card-responsive/` con `index.html`, `style.css` y una imagen libre de derechos.
* Adjunta una captura a 375 px, 768 px y 1280 px.

---

## 🛠️ Lab 2 — **Navbar fijo** + **Grid de tarjetas** adaptable

| Tema         | Módulos                                                                  | Habilidades clave                                                                           |
| ------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| **CSS #4-6** | Positioning fixed <br> Flexbox para alineación <br> Media Queries + Grid | ✔ Barra fija con sombra / blur <br> ✔ Grid auto-fill de tarjetas <br> ✔ Breakpoints fluidos |

### 1 · Objetivo

Construir una página demo con un **navbar pegado arriba** y un **conjunto de tarjetas** que se redistribuye automáticamente según el ancho de pantalla.

### 2 · Requisitos funcionales

1. **Navbar**

   * Posicionado con `position: fixed; top:0; left:0; right:0;`.
   * Altura: 64 px; fondo blanco semitransparente + `backdrop-filter: blur(10px);`.
   * Contenido a la izquierda: logo (texto). <br> A la derecha: 4 links.
   * Sombra inferior `box-shadow: 0 2px 4px rgba(0,0,0,.05);`.
2. **Espaciado del *body***

   * Añade `padding-top` igual a la altura del navbar para que el contenido no quede oculto.
3. **Grid de tarjetas**

   * Contenedor con `display:grid; gap:1.5rem;`
   * Regla canonical:

     ```css
     grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
     ```

     (sin media queries adicionales se adapta solo)
   * Cada tarjeta puede ser la del **Lab 1** o un placeholder simple.
4. **Media queries (solo dos)**

   * `< 640 px`: oculta los textos de los links y deja solo un ícono (puede ser emoji).
   * `≥ 1024 px`: navbar recibe `max-width: 1200px; margin-inline:auto;` para centrar contenido.
5. **Scroll demo**

   * Genera al menos **12 tarjetas** para comprobar que el navbar se mantiene fijo al hacer scroll.

### 3 · Entrega

* Carpeta `/lab-navbar-grid/` con `index.html`, `style.css` y assets.
* GIF o vídeo corto mostrando el scroll y el cambio de columnas entre 360 px, 768 px y 1280 px.

---

### Criterios de evaluación comunes

| Peso | Criterio                                                               |
| ---- | ---------------------------------------------------------------------- |
| 40 % | **Correctitud técnica** (cumple todos los puntos del enunciado)        |
| 30 % | **Responsividad real** (sin desbordes ni scroll horizontal)            |
| 20 % | **Código limpio** (nombres de clases claros, comentarios mínimos)      |
| 10 % | **Detalles de UX/UI** (transiciones suaves, foco accesible, contraste) |

Happy coding!
