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

## 🛠️ Lab 3 — Tarjeta de artículo con Tipografía avanzada y Control de Desbordes

| Tema         | Módulos                                                                                                                  | Habilidades clave                                                                                                      |
| ------------ | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| **CSS #5-6** | Tipografía (font-family, line-height, text-transform) <br> Modelo de visualización (`display`, `visibility`, `overflow`) | ✔ Gestionar tipografía jerárquica <br> ✔ Justificar y decorar texto <br> ✔ Controlar overflow multilinea y visibilidad |

### 1 · Objetivo

Diseñar y codificar una **card de artículo** cuya tipografía sea clara, coherente y accesible, y cuyo texto largo se recorte tras 3 líneas, mostrando un enlace “Leer más” al hacer hover.

### 2 · Requisitos funcionales

1. **Estructura mínima**

   ```html
   <article class="post-card">
     <h2>Título del Artículo</h2>
     <p class="meta">Autor · 14 May 2025</p>
     <p class="excerpt">
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse...
     </p>
     <a href="#" class="read-more">Leer más</a>
   </article>
   ```

2. **Tipografía**

   * Define en `:root` una variable `--font-base` con familia genérica y en `.post-card` aplica `font-family: var(--font-base);` y `font-size: 1rem;`.
   * Ajusta `line-height: 1.6` para `<h2>`, `.meta` y `.excerpt`.
   * Usa `letter-spacing: 0.02em` en `<h2>` y `word-spacing: 0.05em` en `.excerpt`.
   * Transforma `<h2>` a mayúsculas con `text-transform: uppercase;`.

3. **Alineación y decoración**

   * Justifica la clase `.excerpt` con `text-align: justify;`.
   * Quita el subrayado por defecto de `.read-more` y, en hover/focus, añade `text-decoration: underline wavy;`.

4. **Control de desbordes**

   * Limita `.excerpt` a **3 líneas** usando:

     ```css
     .excerpt {
       display: -webkit-box;
       -webkit-line-clamp: 3;
       -webkit-box-orient: vertical;
       overflow: hidden;
     }
     ```
   * Asegúrate de que el recorte funciona en navegadores modernos.

5. **Visibilidad del enlace**

   * Inicialmente `.read-more { visibility: hidden; }`.
   * Al hacer hover sobre `.post-card:hover .read-more`, cambia a `visibility: visible;` y aplica una ligera transición.

6. **Accesibilidad**

   * El enlace debe recibir focus por teclado y mostrar un contorno visible con `outline: 2px solid var(--color-accent);`.
   * Contraste de texto mínimo 4.5:1 frente al fondo.

### 3 · Entrega

* Carpeta `/lab-typography-visual/` con:

  * `index.html`
  * `style.css`
* Capturas de pantalla de la card en estado normal y hover.

---

## 🛠️ Lab 4 — Panel “Dashboard” con Flexbox + Grid

| Tema         | Módulos                                            | Habilidades clave                                                                                     |
| ------------ | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **CSS #7-8** | Flex Container & Items <br> Grid Container & Items | ✔ Diseñar layout bidimensional <br> ✔ Centrar y distribuir con Flexbox <br> ✔ Crear rejilla adaptable |

### 1 · Objetivo

Construir un **dashboard** básico con header, sidebar, contenido y footer. El contenedor principal usará **Grid**, el header y sidebar usarán **Flexbox**, y el área de contenido interna será una **Grid de widgets**.

### 2 · Requisitos funcionales

1. **HTML base**

   ```html
   <div class="dashboard">
     <header class="header">
       <div class="logo">MiApp</div>
       <nav class="nav">
         <a href="#">Inicio</a>
         <a href="#">Alertas</a>
         <a href="#">Perfil</a>
       </nav>
     </header>
     <aside class="sidebar">
       <ul>
         <li>Panel</li>
         <li>Estadísticas</li>
         <li>Configuración</li>
       </ul>
     </aside>
     <main class="content">
       <div class="widget">Widget 1</div>
       <div class="widget">Widget 2</div>
       <div class="widget">Widget 3</div>
       <div class="widget">Widget 4</div>
     </main>
     <footer class="footer">© 2025 MiApp</footer>
   </div>
   ```

2. **Grid en el contenedor principal**

   ```css
   .dashboard {
     display: grid;
     grid-template-areas:
       "header header"
       "sidebar content"
       "footer footer";
     grid-template-columns: 240px 1fr;
     grid-template-rows: auto 1fr auto;
     gap: 1rem;
     min-height: 100vh;
   }
   .header  { grid-area: header; }
   .sidebar { grid-area: sidebar; }
   .content { grid-area: content; }
   .footer  { grid-area: footer; }
   ```

3. **Flex en Header y Sidebar**

   ```css
   .header {
     display: flex;
     justify-content: space-between;
     align-items: center;
     padding: 0.5rem 1rem;
     background: #fff;
   }
   .sidebar ul {
     display: flex;
     flex-direction: column;
     gap: 0.5rem;
     padding: 1rem;
   }
   ```

4. **Grid en el Main Content**

   ```css
   .content {
     display: grid;
     gap: 1rem;
     grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   }
   .widget {
     padding: 1rem;
     background: #f5f5f5;
     border-radius: 4px;
   }
   ```

5. **Media Queries**

   * `< 768 px`:

     ```css
     .dashboard {
       grid-template-areas:
         "header"
         "content"
         "footer";
       grid-template-columns: 1fr;
     }
     .sidebar { display: none; }
     ```
   * `≥ 1024 px`:

     ```css
     .dashboard {
       max-width: 1200px;
       margin-inline: auto;
     }
     ```

### 3 · Entrega

* Carpeta `/lab-dashboard-flex-grid/` con:

  * `index.html`
  * `style.css`
* GIF o vídeo corto mostrando:

  * Cambio de layout en 360 px, 768 px y 1280 px
  * Sidebar oculto y visible
  * Grid de widgets reflow

---

### Criterios de evaluación comunes

| Peso | Criterio                                                               |
| ---- | ---------------------------------------------------------------------- |
| 40 % | **Correctitud técnica** (cumple todos los puntos del enunciado)        |
| 30 % | **Responsividad real** (sin desbordes ni scroll horizontal)            |
| 20 % | **Código limpio** (nombres de clases claros, comentarios mínimos)      |
| 10 % | **Detalles de UX/UI** (transiciones suaves, foco accesible, contraste) |

---

Happy coding!
