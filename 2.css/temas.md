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

---

### 2.7 Selectores hermanos
| | |
|---|---|
|**Definición**|Trabajan entre elementos que comparten el mismo padre. <br>• **Adjacente**: `A + B` (solo el siguiente inmediato) <br>• **General**: `A ~ B` (cualquier hermano posterior).|
|**Ejemplo**|`label + input { margin-left: .5rem; }\ncode ~ code { margin-top: 1rem; }`|
|**Nota práctica**|Útiles para efectos dinámicos (p.e. abrir un acordeón). Son como acceder al “siguiente registro” en un cursor.|

---

### 2.8 Pseudo-clases
| | |
|---|---|
|**Definición**|Refieren a **estados** dinámicos o posiciones lógicas de un elemento.|
|**Sintaxis**|`selector:pseudo { … }` (una sola `:`)|
|**Ejemplos**|`a:hover { color: var(--brand); }\ninput:focus-visible { outline: 2px solid ; }\nli:nth-child(odd) { background: #f6f7f8; }`|
|**Nota práctica**|Piensa en ellas como banderas booleanas o “properties” cambiantes al estilo `isActive` en tu modelo.|

---

### 2.9 Pseudo-elementos
| | |
|---|---|
|**Definición**|Permiten estilizar **partes virtuales** de un elemento que no existen como nodos reales en el DOM.|
|**Sintaxis**|`selector::pseudo-element { … }` (doble `::` recomendado desde CSS3)|
|**Ejemplos**|`a::after { content: " ↗"; font-size: 0.8em; }\np::first-line { font-weight: 600; }`|
|**Nota práctica**|Se comportan como “sub-componentes” renderizados sobre la marcha—no los confundas con pseudo-clases: unos crean partes, los otros describen estados.|

---

### 2.10 Resumen visual de especificidad
Inline styles > ID (1-0-0) > Clase/Atributo/Pseudo-clase (0-1-0) > Tipo/Pseudo-elemento (0-0-1) > Universal *

> *Cuanto mayor la cifra a la izquierda, más difícil será sobreescribir el estilo sin escalar la guerra de `!important`s.* 


## 3. Modelo de Caja (Box Model)
- width y height
- padding
- border
- margin
- box-sizing
- outline

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