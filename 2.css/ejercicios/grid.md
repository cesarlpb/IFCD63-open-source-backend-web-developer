# Ejercicios de CSS Grid

## Ejercicio 1: Centrar un cuadro

### Enunciado

Dado un contenedor de 300×300 px, centra un `<div class="box">` de 100×100 px perfectamente en vertical y horizontal.

### HTML base

```html
<div class="container">
  <div class="box">1</div>
</div>
```

### Objetivo

* `.container` debe ser un flex container.
* Usar `justify-content` y `align-items`.

---

## Ejercicio 2: Menú horizontal con espacios iguales

### Enunciado

Crea un menú de navegación con 4 enlaces que ocupe todo el ancho del contenedor, con espacios iguales entre cada uno.

### HTML base

```html
<nav class="menu">
  <a href="#">Inicio</a>
  <a href="#">Servicios</a>
  <a href="#">Portfolio</a>
  <a href="#">Contacto</a>
</nav>
```

### Objetivo

* `.menu { display: flex; }`
* Usar `justify-content: space-between`.

---

## Ejercicio 3: Tarjetas flexibles (stretch)

### Enunciado

Dentro de un contenedor que muestra varias `.card`, haz que todas tengan la misma altura independientemente de su contenido.

### HTML base

```html
<div class="cards">
  <div class="card"><h3>Título 1</h3><p>Texto breve.</p></div>
  <div class="card"><h3>Título 2</h3><p>Texto algo más largo que el anterior para probar.</p></div>
  <div class="card"><h3>Título 3</h3><p>Texto muy muy muy largo para ver la diferencia.</p></div>
</div>
```

### Objetivo

* `.cards { display: flex; }`
* Usar `align-items: stretch`.

---

## Ejercicio 4: Ordenar visualmente

### Enunciado

Tienes tres elementos marcados con clases `.a`, `.b` y `.c`. Quiere que en el DOM tengan orden A–B–C, pero se muestren visualmente como B–C–A.

### HTML base

```html
<div class="seq">
  <div class="a">A</div>
  <div class="b">B</div>
  <div class="c">C</div>
</div>
```

### Objetivo

* `.seq { display: flex; }`
* Asignar valores de `order` distintos a `.a`, `.b` y `.c`.

---

## Ejercicio 5: Galería responsiva con wrap

### Enunciado

Crea una galería de imágenes que muestre 4 ítems por fila en escritorio, 2 por fila en tabletas y 1 por fila en móvil. Usa solo Flexbox y media queries.

### HTML base

```html
<div class="gallery">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
  <div class="item">7</div>
  <div class="item">8</div>
</div>
```

### Objetivo

* `.gallery { display: flex; flex-wrap: wrap; }`
* Con media queries ajustar `flex: 1 1 calc(25% - gap)` → `50%` → `100%`.

