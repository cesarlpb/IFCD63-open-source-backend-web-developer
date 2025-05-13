# Temas Básicos de CSS

## 1. Introducción a CSS
- **¿Qué es CSS?**

  **CSS** (Cascading Style Sheets) es un lenguaje de hojas de estilo que define la apariencia y el formato de un documento web. 
  Es decir, HTML le da estructura a la página web, mientras que CSS le da estilo.

- **Sintaxis básica**

  ```less
  selector {
    propiedad_1: valor_1;
    propiedad_2: valor_2;
    ...
  }
  ```

  - `selector`: Elemento HTML o clase o id, etc. que se va a estilizar
  - `propiedad`: Atributo que se va a modificar
  - `valor`: Valor que se le asigna a la propiedad
  
- **Formas de incluir CSS en HTML**

  - **Estilos en línea** (en la misma etiqueta HTML usando atributo `style`):

  ```html
  <p style="color:red">Texto en rojo.</p>
  ```
  
  - Etiqueta `<style>`:

  ```html
  <style>
    p {
        color: red;
    }
  </style>
  ```

  - **Archivos externos** (`style.css`, `main.css`, etc.):

  ```html
  <link rel="stylesheet" href="style.css">
  ```

- Comentarios en CSS:

```css

/* Comentario de una línea */

/* Comentario 
*  de 
*  varias 
* líneas
*/
```

## 2. Selectores

> **Idea clave**: un selector es simplemente una expresión que le dice al navegador “ve al árbol del DOM y encuentra estos nodos”. Todo lo demás (propiedades, cascada, herencia) ocurre **después** de que un selector ha elegido sus objetivos.

---

### 2.1 Selectores de tipo (etiquetas)
| | |
|---|---|
|**Definición**|Coinciden con todos los elementos de una etiqueta HTML concreta.|
|**Sintaxis**|`etiqueta { … }`|
|**Ejemplo**|`p, h1 { line-height: 1.6; }`|
|**Nota práctica**|Son los menos específicos (0-0-1 en la jerarquía de especificidad). Úsalos para estilos base o resets. Piensa en ellos como “valores por defecto” similares a configurar variables globales en tu backend.|

```html
<style>
  p, h1 { 
    line-height: 1.6; 
  }
</style>
<h1>Título principal</h1>
<p>Texto en párrafo</p>
```

---

### 2.2 Selectores de clase
| | |
|---|---|
|**Definición**|Seleccionan cualquier elemento que incluya un atributo `class` con el valor indicado.|
|**Sintaxis**|`.nombreDeClase { … }`|
|**Ejemplo**|`.card { box-shadow: 0 2px 8px #0003; }`|
|**Nota práctica**|Muy versátiles (0-1-0). Puedes reutilizar la clase en múltiples nodos—algo equivalente a inyectar un mismo middleware en varias rutas.|

```html
<style>
  .card { 
    box-shadow: 0 2px 8px #0003; 
    /* otros estilos */
    }
</style>
<div class="card">Card 1</div>
<div class="card">Card 2</div>
<div class="card">Card 3</div>
```

---

### 2.3 Selectores de ID
| | |
|---|---|
|**Definición**|Apuntan a un único elemento con un atributo `id` concreto. Los ids **deben ser únicos** por documento `.html`.|
|**Sintaxis**|`#idUnico { … }`|
|**Ejemplo**|`#header { position: sticky; top: 0; }`|
|**Nota práctica**|Los IDs son **muy** específicos (1-0-0). Evita basar tu sistema de diseño en ellos o terminarás usando `!important` para sobreescribirlos — el equivalente CSS de un hot-fix en producción.|

```html
<style>
  #header { 
    position: sticky; 
    top: 0;
    }
</style>
<div id="header">
  <!-- contenido del header -->
</div>
```

---

### 2.4 Selectores de atributo
| | |
|---|---|
|**Definición**|Permiten filtrar por la presencia o el valor de cualquier atributo.|
|**Sintaxis**|`[atributo]`, `[atributo="valor"]`, `[atributo^="comienzo"]`, `[atributo$="fin"]`, `[atributo*="contiene"]`|
|**Ejemplo**|`input[type="password"] { letter-spacing: 0.1em; }`|
|**Nota práctica**|Útiles para estilos contextuales sin añadir clases extras (p.e. formularios). Es como consultar una base de datos con un `WHERE` más específico.|

```html
<style>
  input[type="email"] { 
    /* estilos */
    }
</style>
<form>
  <input type=text>
  <input type=email>
  <!-- más inputs -->
</form>
```

---

### 2.5 Selectores descendentes
| | |
|---|---|
|**Definición**|Coinciden con cualquier elemento que esté **en cualquier nivel** por debajo del selector raíz.|
|**Sintaxis**|`A B { … }` (espacio simple)|
|**Ejemplo**|`nav a { text-decoration: none; }`|
|**Nota práctica**|Evita encadenar muchos niveles: `article section ul li a` es tan frágil como anidar demasiadas llamadas a funciones.|

```html
<style>
  nav a { 
    /* estilos */
    }
  nav.selected {
    /* estilos para class selected */
  }
  .selected {
    /* este selecciona a TODOS los class selected */
  }
</style>
<nav>
  <a href="#" class="selected">Home</a>
  <a href="#">Enlace 2</a>
  <a href="#">Enlace 3</a>
  <!-- más enlaces -->
</nav>
<!-- No es seleccionado por nav.selected: -->
<a class="selected">Enlace externo a nav</a>
```

---

### 2.6 Selectores de hijos directos
| | |
|---|---|
|**Definición**|Solo seleccionan **hijos directos** del primer selector.|
|**Sintaxis**|`A > B { … }`|
|**Ejemplo**|`ul > li { margin-block: .25rem; }`|
|**Nota práctica**|Piensa en la flecha `>` como el `JOIN` directo entre tablas; no recorre profundidad completa.|

```html
<style>
  /* Selector parent - child: a es hijo directo del nav */
  nav > a { 
    /* estilos */
    }
   /* 
    <nav>
      <a>...</a> 
     </nav> 
    */
</style>
<nav>
  <a href="#">Home</a>
  <a href="#">Enlace 2</a>
  <a href="#">Enlace 3</a>
  <!-- más enlaces -->
</nav>
<!-- Este enlace no es child del nav, no se selecciona con nav > a -->
<a>Enlace externo a nav</a>
```
---

### 2.7 Selectores hermanos
| | |
|---|---|
|**Definición**|Trabajan entre elementos que comparten el mismo padre. <br>• **Adjacente**: `A + B` (solo el siguiente inmediato) <br>• **General**: `A ~ B` (cualquier hermano posterior).|
|**Ejemplo**|`label + input { margin-left: .5rem; } code ~ code { margin-top: 1rem; }`|
|**Nota práctica**|Útiles para efectos dinámicos (p.e. abrir un acordeón). Son como acceder al “siguiente registro” en un cursor.|

```html
<style>
  /* Selecto de elementos adyacentes (seguidos sin otros elementos en medio): */
  label + input { 
    /* estilos */
    }
   /* 
    <label>...</label> 
    <input>
    */

  /* Selectores de elementos hermanos a cualquier nivel */
  label ~ span {
    /* estilos */
  }
</style>
<form>
  <label>Introduce tu email:</label>
  <input type=email placeholder="pepe@gmail.com">
  <span>Texto de ayuda</span>
  <span>Más texto de ayuda</span>
</form>
```

---

### 2.8 Pseudo-clases
| | |
|---|---|
|**Definición**|Refieren a **estados** dinámicos o posiciones lógicas de un elemento.|
|**Sintaxis**|`selector:pseudo { … }` (una sola `:`)|
|**Ejemplos**|`a:hover { color: var(--brand); } input:focus-visible { outline: 2px solid ; } li:nth-child(odd) { background: #f6f7f8; }`|
|**Nota práctica**|Piensa en ellas como banderas booleanas o “properties” cambiantes al estilo `isActive` en tu modelo.|

```html
  <style>
    /* hover := acción de colocar el cursor encima de un elemento de la web */
    a:hover {
      cursor: pointer;
      color: black;
    }
  </style>
  <a href="#">Enlace</a>
```

---

### 2.9 Pseudo-elementos
| | |
|---|---|
|**Definición**|Permiten estilizar **partes virtuales** de un elemento que no existen como nodos reales en el DOM.|
|**Sintaxis**|`selector::pseudo-element { … }` (doble `::` recomendado desde CSS3)|
|**Ejemplos**|`a::after { content: " ↗"; font-size: 0.8em; } p::first-line { font-weight: 600; }`|
|**Nota práctica**|Se comportan como “sub-componentes” renderizados sobre la marcha—no los confundas con pseudo-clases: unos crean partes, los otros describen estados.|

```html
  <style>
    /* ::after := pseudo-elemento que aparece después del contenido de un elemento */
    #myLink::after {
      content: " 👈🏼"; 
      font-size: 1.2em;
    }
    #myLink::before {
      content: "👉🏼 "; 
      font-size: 1.2em;
    }
  </style>
  <!-- ❌ Desventaja: modificamos el texto del enlace -->
  <a href="#">👉🏼 Enlace 👈🏼</a>
  <br>
  <!-- ✅ Ventaja: no modificamos el texto del enlace y podemos añadir estilos personalizados a cada pseudo-elemento -->
  <a id="myLink" href="#">Enlace</a>
```

Otro ejemplo:

```html
<style>
  p::first-letter {
    font-size: 3em;
    color: brown;
    margin-right: 0.05em;
  }
</style>

<p>Esto es un texto de HTML.</p>
```

---

### 2.10 Resumen visual de especificidad


> Inline styles > ID (1-0-0) > Clase/sAtributo/Pseudo-clase (0-1-0) > 
Tipo/Pseudo-elemento (0-0-1) > Universal *


> *Cuanto mayor la cifra a la izquierda, más difícil será sobreescribir el estilo sin escalar la guerra de `!important`s.* Por lo general, vamos a intendar no usar important siempre que sea posible para evitar este "problema" con especificidad.

```html
<style>
  #myId {
    color: brown!important;
  }
</style>

<p id="myId" style="color: red;">Texto en rojo?</p>
```

> En este caso el estilo inline no sería necesario y podríamos/deberíamos quitarlo. Muchas veces, se usa o abusa de `!important` en CSS para aplicar un estilo y suele propiciar malas prácticas.

> **tl;dr:** Un gran poder conlleva una gran responsabilidad => usar con cuidado.

[Ejercicios de selectores](./ejercicios/selectores.md)

## 3. Modelo de Caja (Box Model)

> Todo elemento de bloque en el navegador se representa como una **caja** con 6 parámetros clave. Dominar estos valores es lo más cercano a ajustar “padding” y “margin” en tus responses JSON: un pequeño número cambia todo el layout.

---

### 3.1 `width` y `height`
| | |
|---|---|
|**Definición**|Tamaño **del contenido** de la caja (no incluye padding, border ni margin).|
|**Sintaxis**|`width: <longitud | % | auto>;` <br>`height: <longitud | % | auto>;`|
|**Ejemplo**|`.box { width: 300px; height: 180px; }`|
|**Notas dev**|`auto` deja que el navegador calcule según el contexto. `%` usa el contenedor padre como referencia. En realidad casi nunca defines ambos: fija uno y deja que el otro fluya, igual que al paginar resultados.|

---

### 3.2 `padding`
| | |
|---|---|
|**Definición**|Espacio **interno** entre el contenido y el borde.|
|**Sintaxis**|`padding: top right bottom left;` (shorthand) <br>`padding-block`, `padding-inline` para lógica RTL.|
|**Ejemplo**|`.card { padding: 1rem 1.5rem; }`|
|**Notas dev**|Suma al tamaño final salvo que uses `box-sizing: border-box`. Piensa en `padding` como la serialización “pretty-print” que añade espacios legibles.|

---

### 3.3 `border`
| | |
|---|---|
|**Definición**|Línea que rodea padding y contenido.|
|**Sintaxis**|`border: <anchura> <estilo> <color>;` <br>Sub-propiedades: `border-top`, `border-radius`, etc.|
|**Ejemplo**|`img { border: 2px solid #ccc; border-radius: 50%; }`|
|**Notas dev**|Afecta al flujo del documento (ocupa espacio). Usa `outline` si solo necesitas remarcar sin mover nada.|

---

### 3.4 `margin`
| | |
|---|---|
|**Definición**|Espacio **externo** entre la caja y elementos vecinos.|
|**Sintaxis**|`margin: top right bottom left;`|
|**Ejemplo**|`section { margin-block: 2rem; }`|
|**Notas dev**|Los márgenes verticales se “colapsan” entre elementos consecutivos (el mayor gana). Es como coalescer filas duplicadas en una consulta.|

---

### 3.5 `box-sizing`
| | |
|---|---|
|**Definición**|Define qué incluye el navegador dentro de `width` y `height`.|
|**Valores**|`content-box` (por defecto) → tamaño = solo contenido. <br>`border-box` → tamaño = contenido + padding + border.|
|**Ejemplo**|`* { box-sizing: border-box; }`|
|**Notas dev**|`border-box` evita cálculos mentales al diseñar layouts (tamaño total constante). Es el equivalente a normalizar unidades antes de hacer sumas.|

---

### 3.6 `outline`
| | |
|---|---|
|**Definición**|Borde **no** incluido en el flujo: se pinta “por encima”, no afecta medidas ni colapsa márgenes.|
|**Sintaxis**|`outline: <anchura> <estilo> <color>;` <br>`outline-offset: <longitud>;`|
|**Ejemplo**|`button:focus-visible { outline: 3px dashed var(--brand); }`|
|**Notas dev**|Ideal para *focus rings* accesibles. No lo uses como sustituto de `border` si necesitas que el layout respete el espacio.|


## 4. Colores y Fondos
- Nombres de colores
- RGB y RGBA
- HEX
- HSL y HSLA
- background-color
- background-image
- background-position
- background-size
- background-repeat
- background-attachment
- Degradados (linear-gradient, radial-gradient)

## 5. Tipografía
- font-family
- font-size
- font-weight
- font-style
- line-height
- text-align
- text-decoration
- text-transform
- letter-spacing
- word-spacing

## 6. Modelo de Visualización
- display (block, inline, inline-block, flex, grid, none)
- visibility
- overflow
- position (static, relative, absolute, fixed, sticky)
- z-index
- float y clear

## 7. Flexbox
- Conceptos básicos
- Flex container
  - flex-direction
  - flex-wrap
  - justify-content
  - align-items
  - align-content
- Flex items
  - order
  - flex-grow
  - flex-shrink
  - flex-basis
  - align-self

## 8. Grid
- Conceptos básicos
- Grid container
  - grid-template-columns
  - grid-template-rows
  - grid-template-areas
  - gap
  - justify-items
  - align-items
  - place-items
- Grid items
  - grid-column
  - grid-row
  - grid-area
  - justify-self
  - align-self
  - place-self

## 9. Transiciones y Animaciones
- transition
- @keyframes
- animation
- transform
- transform-origin
- perspective
- backface-visibility

## 10. Diseño Responsivo
- Viewport
- Media Queries
- Unidades relativas (%, vw, vh, rem, em)
- Imágenes responsivas
- Mobile-first vs Desktop-first

## 11. Variables CSS
- Definición de variables (--nombre)
- Uso de variables (var())
- Ámbito de las variables

## 12. Preprocesadores CSS (Breve introducción)
- SASS/SCSS
- LESS
- Stylus
- Variables
- Anidamiento
- Mixins
- Herencia

## 13. Metodologías CSS
- BEM (Block, Element, Modifier)
- OOCSS (Object-Oriented CSS)
- SMACSS (Scalable and Modular Architecture for CSS)
- ITCSS (Inverted Triangle CSS)

## 14. Herramientas y Recursos
- DevTools del navegador
- Validadores de CSS
- Prefijos de proveedores
- Normalize.css y Reset CSS
- Frameworks CSS populares (Bootstrap, Tailwind, etc.)

## 15. Buenas Prácticas
- Especificidad
- Herencia
- Organización del código
- Nomenclatura
- Rendimiento
- Accesibilidad

## 16. Novedades en CSS
- CSS Grid Layout
- Flexbox
- Custom Properties (Variables CSS)
- CSS Grid Subgrid
- Container Queries
- Cascade Layers
- :has() selector
- Aspect Ratio
- Scroll Snap

---

## Referencias

- W3Schools: https://www.w3schools.com/css/
- MDN Web Docs: https://developer.mozilla.org/es/docs/Web/CSS