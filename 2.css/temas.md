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

- [Ejercicios de selectores](./ejercicios/selectores.md)

## 3. Modelo de Caja (Box Model)

> Todo elemento de bloque en el navegador se representa como una **caja** con 6 parámetros clave. Dominar estos valores es lo más cercano a ajustar “padding” y “margin” en tus responses JSON: un pequeño número cambia todo el layout.

---

### 3.1 `width` y `height`
| | |
|---|---|
|**Definición**|Tamaño **del contenido** de la caja (no incluye padding, border ni margin).|
|**Sintaxis**| `width: <longitud  %  auto>, height: <longitud  %  auto>`|
|**Ejemplo**|`.box { width: 300px; height: 180px; }`|
|**Notas dev**|`auto` deja que el navegador calcule según el contexto. `%` usa el contenedor padre como referencia. En realidad casi nunca defines ambos: fija uno y deja que el otro fluya, igual que al paginar resultados.|

```html
  <style>
    div > div {
      background-color: lightgray;
      border: 1px solid black;
      text-align: center;
    }
    .box1 {
      width: 300px;
    }
    .box2 {
      width: auto;
    }
    .box3 {
      width: 50%;
    }
  </style>
  <div>
    <div class="box1">Box 1 (300 px)</div>
    <div class="box2">Box 2 (auto)</div>
    <div class="box3">Box 3 (50% del parent)</div>
  </div>
```

- **Ejercicio:** Haz un ejemplo similar con `height`.

---

### 3.2 `padding`
| | |
|---|---|
|**Definición**|Espacio **interno** entre el contenido y el borde.|
|**Sintaxis**|`padding: top right bottom left;` (shorthand) <br>`padding-block`, `padding-inline` para lógica RTL.|
|**Ejemplo**|`.card { padding: 1rem 1.5rem; }`|
|**Notas dev**|Suma al tamaño final salvo que uses `box-sizing: border-box`. Piensa en `padding` como la serialización “pretty-print” que añade espacios legibles.|

```html
  <style>
    div > div {
      background-color: lightgray;
      border: 1px solid black;
      text-align: center;
      margin-bottom: 10px;
    }
    .box1 {
      width: 300px;
      padding: 10px;
      box-sizing: border-box;
    }
    .box2 {
      width: auto;
      padding: 1em;
    }
    .box3 {
      width: 50%;
      padding: 0;
    }
  </style>
  <div>
    <div class="box1">Box 1 (300 px)</div>
    <div class="box2">Box 2 (auto)</div>
    <div class="box3">Box 3 (50% del parent)</div>
  </div>
```

> El `padding` nos coloca espaciado interno en una caja entonces hace que el contenido no este pegado a sus márgenes y se pueda leer mejor.

---

### 3.3 `border`
| | |
|---|---|
|**Definición**|Línea que rodea padding y contenido.|
|**Sintaxis**|`border: <anchura> <estilo> <color>;` <br>Sub-propiedades: `border-top`, `border-radius`, etc.|
|**Ejemplo**|`img { border: 2px solid #ccc; border-radius: 50%; }`|
|**Notas dev**|Afecta al flujo del documento (ocupa espacio). Usa `outline` si solo necesitas remarcar sin mover nada.|

```css
  div {
      background-color: lightgray;
      border: 1px solid black;
      text-align: center;
      margin-bottom: 10px;
    }
```

---

### 3.4 `margin`
| | |
|---|---|
|**Definición**|Espacio **externo** entre la caja y elementos vecinos.|
|**Sintaxis**|`margin: top right bottom left;`|
|**Ejemplo**|`section { margin-block: 2rem; }`|
|**Notas dev**|Los márgenes verticales se “colapsan” entre elementos consecutivos (el mayor gana). Es como coalescer filas duplicadas en una consulta.|

```css
  div {
      background-color: lightgray;
      border: 2px solid black;
      text-align: center;
      margin-bottom: 25px;
    }
```

---

### 3.5 `box-sizing`
| | |
|---|---|
|**Definición**|Define qué incluye el navegador dentro de `width` y `height`.|
|**Valores**|`content-box` (por defecto) → tamaño = solo contenido. <br>`border-box` → tamaño = contenido + padding + border.|
|**Ejemplo**|`* { box-sizing: border-box; }`|
|**Notas dev**|`border-box` evita cálculos mentales al diseñar layouts (tamaño total constante). Es el equivalente a normalizar unidades antes de hacer sumas.|

```css
 .box1 {
      width: 300px;
      padding: 10px;
      box-sizing: border-box;
    }
```

---

### 3.6 `outline`
| | |
|---|---|
|**Definición**|Borde **no** incluido en el flujo: se pinta “por encima”, no afecta medidas ni colapsa márgenes.|
|**Sintaxis**|`outline: <anchura> <estilo> <color>;` <br>`outline-offset: <longitud>;`|
|**Ejemplo**|`button:focus-visible { outline: 3px dashed var(--brand); }`|
|**Notas dev**|Ideal para *focus rings* accesibles. No lo uses como sustituto de `border` si necesitas que el layout respete el espacio.|

```css
   .box3 {
      width: 50%;
      padding: 0;
      border:5px solid green;
      outline: 5px solid red;
    }
```

- Ejercicios de box model en [box-model.md](./ejercicios/box-model.md)

## 4. Colores y Fondos

En este tema aprendemos a usar colores y fondos (backgrounds) en CSS.

### 1. Formatos de color

| Formato              | Sintaxis                  | Ejemplo                                                            | Ventajas                                                          |
| -------------------- | ------------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| **Nombres de color** | `color: red;`             | 147 nombres estándar (`red`, `cornflowerblue`, `goldenrod`, etc.). | Rápidos de escribir, buena legibilidad.                           |
| **RGB**              | `rgb(255, 0, 0)`          | `color: rgb(255, 0, 0);`                                           | Preciso; idéntico a valores de Photoshop / Figma.                 |
| **RGBA**             | `rgba(255, 0, 0, 0.5)`    | `background: rgba(0,0,0,0.25);`                                    | Igual que RGB + **canal alfa** (`0 = transparente`, `1 = opaco`). |
| **HEX**              | `#ff0000` (3 o 6 dígitos) | `#f00` ≡ `#ff0000`                                                 | Popular, compacto, compatible con todos los navegadores.          |
| **HSL**              | `hsl(0, 100%, 50%)`       | `hsl(200,70%,50%)`                                                 | Más intuitivo para girar tonos o ajustar claridad.                |
| **HSLA**             | `hsla(0, 100%, 50%, 0.5)` | `hsla(200,70%,50%,.2)`                                             | Como HSL con transparencia.                                       |

```css
/* Ejemplo comparativo */
.box-names { color: cornflowerblue; }
.box-rgb   { color: rgb(100, 149, 237); }
.box-hex   { color: #6495ed; }
.box-hsl   { color: hsl(219,79%,66%); }   /* mismo tono */
```

[!TIP]
> En VS Code podemos cambiar de una representación de color a otra haciendo click en el menú desplegable de los colores:

![alt text](image.png)

Click en rgb... para cambiar de formato.

![alt text](image-1.png)

Si sigues haciendo click vuelve a aparecer el formato RGB.

---

### 2. background-color

Establece un color de fondo sólido.

```css
.card {
  background-color: #fafafa;        /* gris muy claro */
}
```

> **Pro Tip:** valores semitransparentes (RGBA/HSLA) permiten overlays sin poner otra capa HTML.

### 3. background-image

Admite **una o varias** imágenes, rutas locales o URLs remotas, y gradientes.

```css
.hero {
  background-image: url("/img/cover.jpg"),
                    linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.6));
}
```

La lista se pinta **de izquierda a derecha** (la primera es la capa más cercana al usuario).

### 4. background-position

Define el punto de anclaje de cada capa.

| Valor                    | Resultado                                           |
| ------------------------ | --------------------------------------------------- |
| `left top` (por defecto) | Esquina superior-izquierda                          |
| `center center`          | Centrado completo                                   |
| `50% 50%`                | Igual que *center center*                           |
| `right 30%`              | 30 % desde la parte superior, alineado a la derecha |

```css
.banner {
  background-position: center 20%;   /* útil para visibilidad de rostros */
}
```



### 5. background-size

Controla el escalado:

* `cover` → rellena el contenedor, puede recortar.
* `contain` → muestra todo el contenido, puede dejar huecos.
* `auto`, valores `px`, `%` o pares `width height`.

```css
.avatar {
  background-size: cover;
}
```

### 6. background-repeat

| Valor                   | Uso               |
| ----------------------- | ----------------- |
| `repeat` (default)      | Repite en x e y   |
| `repeat-x` / `repeat-y` | Solo eje indicado |
| `no-repeat`             | Sin repetición    |

```css
.watermark {
  background-repeat: no-repeat;
}
```

### 7. background-attachment

* `scroll` → la imagen se desplaza con la página (por defecto).
* `fixed` → “parallax” simple: el fondo queda fijo respecto a la ventana.
* `local` → se mueve dentro de un elemento con *overflow*.

```css
.parallax-hero {
  background-attachment: fixed;
}
```

### 8. Degradados

Los *gradients* son **funciones de imagen** – se colocan en `background-image`.

#### 8.1 linear-gradient

```css
/* 45° de azul a morado */
.box {
  background-image: linear-gradient(45deg, #3b82f6, #9333ea);
}
```

* Primer argumento: **ángulo** (`deg`) o palabras clave (`to right`, `to bottom left`).
* Después, **colores** (tantos como quieras).
* Puedes indicar “stops”: `linear-gradient(90deg, red 0%, orange 50%, yellow 100%)`.

### 8.2 radial-gradient

```css
.badge {
  background-image: radial-gradient(circle at center,
                    hsl(50 100% 60%) 0%, hsl(50 100% 40%) 100%);
}
```

* Forma: `circle` (default) o `ellipse`.
* Posición: `at top right`, `at 30% 70%`, etc.

#### 8.3 Gradientes repetitivos

* `repeating-linear-gradient()`
* `repeating-radial-gradient()`

Útiles para patrones (rayas, cuadriculado).

```css
.tartan {
  background-image: repeating-linear-gradient(
    45deg,
    #555 0 10px,
    #333 10px 20px
  );
}
```

- [CSS Gradient Generator](https://cssgradient.io/)

### 9. Ejemplo completo

```html
<section class="showcase">
  <h1>CSS Color & Background demo</h1>
</section>
```

```css
.showcase {
  /* Fondo compuesto */
  background-image:
    url("/img/forest.jpg"),
    linear-gradient(
      to bottom,
      rgba(0,0,0,0) 50%,
      rgba(0,0,0,0.6) 100%
    );
  background-size: cover;              /* cubre el hero */
  background-position: center top;     /* centra la foto */
  background-attachment: fixed;        /* parallax ligero */
  color: #fff;
  padding: 8rem 2rem;
  text-align: center;
}
```

### Checklist rápido del tema

* ✅ **Conocer** los 5 formatos de color y elegir el más cómodo.
* ✅ **Combinar** varias capas en `background-image` para efectos complejos.
* ✅ Ajustar posición, tamaño y repetición para evitar imágenes deformadas o mosaicos no deseados.
* ✅ Usar gradientes como “tinta” para overlays sin PNG ni extra divs.

---

- Ejercicios de colores y fondos en [colores-y-fondos.md](./ejercicios/colores-y-fondos.md)
- Ya puedes empezar los [Labs 1 y 2](./labs.md)

## 5. Tipografía

Un sistema tipográfico coherente mejora la legibilidad, refuerza la identidad 
visual y, bien gestionado, facilita la accesibilidad.

En este tema, se describen las propiedades clave, con sintaxis, valores 
habituales, buenas prácticas y ejemplos mínimos.

---

### 5.1 `font-family` — familia tipográfica

| Qué hace                                                                                                                                                                                                              | Define la pila de fuentes que el navegador intentará cargar, de izquierda a derecha.                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Sintaxis                                                                                                                                                                                                              | `font-family: "Open Sans", Roboto, Helvetica, Arial, sans-serif;`                                                          |
| Valores                                                                                                                                                                                                               | • nombres concretos (`"Fira Sans"`)<br>• genéricos (`serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`, `system-ui`) |
| Buenas prácticas                                                                                                                                                                                                      |                                                                                                                            |
| • Ordenar las fuentes por preferencia y terminar con una familia genérica.<br>• Encerrar nombres con espacios en comillas.<br>• Incluir variantes locales para i18n, p. ej. `"Noto Sans SC"` para chino simplificado. |                                                                                                                            |

> [!TIP]
> **Custom fonts** – Carga con `@font-face` o servicios como Google Fonts; sirve los archivos con `font-display: swap` para evitar FOIT (flash of invisible text).

> [!TIP]
> [Google Fonts](https://fonts.google.com/) es un sitio que te permite conseguir muchas fuentes gratuitas para usar en tu sitio web.

---

### 5.2 `font-size` — tamaño de letra

| **Campo**           | **Descripción**                                                                                                                                                |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sintaxis**        | `font-size: 1rem;`                                                                                                                                             |
| **Unidades**        | **Absolutas:** `px`, `pt`, `cm` (poco usadas en web).<br>**Relativas:** `em`, `rem` (a la raíz), `%` (al contenedor), `vw/vh`, funciones `clamp()` y `calc()`. |
| **Recomendaciones** | • Usa `rem` para un punto de escala global (`html { font-size: 100%; }`).<br>• Para tipografía fluida: `font-size: clamp(1rem, 0.9rem + 1vw, 1.4rem);`.        |


---

### 5.3 `font-weight` — grosor

| **Campo**        | **Descripción**                                                                                                                                                                                     |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sintaxis**     | `font-weight: 700;`                                                                                                                                                                                 |
| **Valores**      | Palabras clave `normal` (400) y `bold` (700) o números 100–900 en pasos de 100.                                                                                                                     |
| **Puntos clave** | • Verifica que tu archivo de fuente incluya los pesos declarados (evitar “faux bold”).<br>• Con *variable fonts* puedes animar o transicionar entre pesos (`font-variation-settings: "wght" 350;`). |

---

### 5.4 `font-style` — estilo

| **Campo**    | **Descripción**                                                                                                                        |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Sintaxis** | `font-style: italic;`                                                                                                                  |
| **Valores**  | `normal`, `italic`, `oblique` (ángulo opcional → `oblique 10deg`)                                                                      |
| **Nota**     | *Italic* usa un glifo propio; *oblique* inclina el glifo normal. Muchos navegadores sintetizan la cursiva si la fuente carece de ella. |

---

### 5.5 `line-height` — interlineado

| **Campo**            | **Descripción**                                                                                                                                                            |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sintaxis**         | `line-height: 1.5;` *← valor recomendado*                                                                                                                                  |
| **Unidades**         | • Relativa sin unidad (factor del tamaño de letra).<br>• Absoluta (`px`, `em`).                                                                                            |
| **Buenas prácticas** | • Prefiere valores sin unidad: heredan de forma predecible y escalan mejor (`1.4 – 1.6`).<br>• Ajusta según la tipografía (x-height) y el contexto (lectura larga vs. UI). |

---

### 5.6 `text-align` — alineación horizontal

| **Campo**    | **Descripción**                                                                                                                                                          |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Sintaxis** | `text-align: justify;`                                                                                                                                                   |
| **Valores**  | `left`, `right`, `center`, `justify`, `start`, `end`, `match-parent`                                                                                                     |
| **Tips**     | • Usa `text-align: center` para cards, pero deja texto largo en `left`/`start` para legibilidad.<br>• `start` y `end` respetan la dirección del documento (`dir="rtl"`). |

---

### 5.7 `text-decoration` — adornos de texto

`text-decoration` es ahora un *shorthand* de:
`text-decoration-line`, `text-decoration-style`, `text-decoration-color`, `text-decoration-thickness`.

```css
a {
  text-decoration: underline; /* valor por defecto */
  text-decoration: none; /* deshabilita todas las decoraciones del texto */
}

.marked {
  text-decoration-line: underline overline;
  text-decoration-style: wavy;
  text-decoration-color: hotpink;
}
```

| **Campo**            | **Descripción**                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Valores línea**    | `underline`, `overline`, `line-through`, `none`, combinaciones                                                     |
| **Buenas prácticas** | • Para enlaces, personaliza `text-decoration-color` en foco/hover en lugar de quitar el subrayado (accesibilidad). |

---

### 5.8 `text-transform` — cambio de capitalización

| **Campo**       | **Descripción**                                                                                                          |
|-----------------|--------------------------------------------------------------------------------------------------------------------------|
| **Sintaxis**    | `text-transform: uppercase;`                                                                                             |
| **Valores**     | `none`, `capitalize`, `uppercase`, `lowercase`, `full-width`, `full-size-kana`                                          |
| **Buenas prácticas** | • Usa `capitalize` para títulos cortos, no para párrafos extensos.<br>• Recuerda que no altera el contenido real, solo la presentación. |

---

### 5.9 `letter-spacing` — espaciado entre letras

| **Campo**    | **Descripción**                                                                                                                |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| **Sintaxis** | `letter-spacing: 0.05em;`                                                                                                      |
| **Unidades** | Relativas (`em`, `rem`) o absolutas (`px`).                                                                                    |
| **Consejos** | • Ajusta kerning en títulos grandes o cuando uses versalitas.<br>• Puede aceptar valores negativos (`-0.02em`) para condensar. |

---

### 5.10 `word-spacing` — espacio entre palabras

| **Campo**    | **Descripción**                                                                |
| ------------ | ------------------------------------------------------------------------------ |
| **Sintaxis** | `word-spacing: 0.2em;`                                                         |
| **Uso**      | Menos común; se usa para textos justificados o diseños con tipografía display. |

---

### Ejemplo completo

```html
<section class="hero">
  <h1>La tipografía importa</h1>
  <p>Configurar bien fuente, tamaño, peso y espacio hace tu web más legible y accesible.</p>
</section>

<style>
:root {
  --font-main: "Inter", Helvetica, Arial, sans-serif;
}

.hero {
  font-family: var(--font-main);
  font-size: clamp(1rem, 0.9rem + 1vw, 1.3rem);
  line-height: 1.6;
  text-align: center;
  margin: 2rem auto;
  max-width: 60ch;
}

.hero h1 {
  font-weight: 700;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  margin-bottom: 0.5em;
}

.hero p {
  font-weight: 400;
  text-decoration: underline hotpink;
}
</style>
```

---

### Accesibilidad y buenas prácticas generales

1. **Escalabilidad:** Usa unidades relativas (`rem`, `em`, sin unidad) para respetar el zoom del navegador.
2. **Contraste:** El subrayado o cualquier decoración debe mantener un contraste mínimo (WCAG 2.2 §1.4.3).
3. **Responsive type:** Combina `clamp()` o media queries para tipografía fluida.
4. **Espaciado de texto (WCAG 1.4.12):** Garantiza que tu UI soporte aumentos de `letter-spacing` 0.12 em, `word-spacing` 0.16 em y `line-height` 1.5 sin romperse.
5. **Rendimiento:** Sirve las fuentes en `woff2`, activa `font-display: swap` y agrupa las peticiones en un solo `@font-face` cuando uses variable fonts.

- Ejercicios de colores y fondos en [tipografia.md](./ejercicios/tipografia.md)

## 6. Modelo de Visualización

Un buen control del flujo y la disposición de elementos es esencial para construir interfaces robustas y responsivas. A continuación tienes las propiedades clave:

### 6.1 `display` — tipo de caja y modelo de renderizado

| **Valor**      | **Descripción & Uso**                                                                                  |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| `block`        | Ocupa todo el ancho disponible, comienza nueva línea. Ideal para contenedores (`<div>`, `<section>`).  |
| `inline`       | Solo ocupa el espacio de su contenido, no rompe línea. No admite ancho/alto. Útil en `<span>`, `<a>`.  |
| `inline-block` | Híbrido: comport. inline (no rompe línea) pero admite ancho/alto.                                      |
| `flex`         | Activa Flexbox en el contenedor: organiza hijos en fila o columna con alineación y reparto de espacio. |
| `grid`         | Activa CSS Grid: layout bidimensional con filas/columnas; ideal para rejillas complejas.               |
| `none`         | El elemento no se renderiza (ni ocupa espacio). Útil para esconder sin afectar `visibility`.           |

```css
/* Ejemplo rápido */
.container { display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; }
.item-inline { display: inline-block; width: 120px; height: 120px; }
```

> [!NOTE]
> Cada etiqueta de HTML tiene un valor de `display` predeterminado. Por ejemplo, `<p>` es un `block` y `<div>` es un `inline` pero `<a>` es `inline` por defecto.
> Es decir, los párrafos con `<p>` siempre se separan verticalmente pero los enlaces con `<a>` siempre se muestran en una línea si no cambiamos su valor de `display`.
> <strong>El valor del display puede alterar el alineamiento de los elementos.</strong>

---

### 6.2 `visibility` — visibilidad del elemento

| **Valor**  | **Descripción**                                                                        |
| ---------- | -------------------------------------------------------------------------------------- |
| `visible`  | Por defecto; el elemento y su contenido se muestran.                                   |
| `hidden`   | El elemento no se ve, pero sigue ocupando su espacio en el flujo.                      |
| `collapse` | En tablas colapsa filas/columnas como si no existieran (no soportado en todos los UA). |

> [!NOTE]
> **Diferencia con `display: none`**:
>
> * `visibility: hidden` mantiene el hueco y permite animar la entrada/salida.
> * `display: none` retira completamente del flujo y de la accesibilidad.

**Ejemplo de comparativa con `display: none` y `visibility: hidden`**
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Comparativa</title>
  <style>
    a {
      display: inline;
      margin: 10px;
    }
    div {
      border: 1px solid black;
      margin-top: 1em;
      margin-bottom: 1em;
      padding: 1em;
    }
    .none {
      display: none;
    }
    .hidden {
      visibility: hidden;
    }
  </style>
</head>
<body>
  <h2>display</h2>
  <a href="#">Enlace 1</a>
  <a href="#">Enlace 2</a>
  <a href="#">Enlace 3</a>
  <h2>display y visibility</h2>
  <div>
    <p class="hidden">Texto oculto con visiibility hidden</p>
  </div>
  <div>
    <p class="none">Texto con display none</p>
  </div>
</body>
</html>
```
---

### 6.3 `overflow` — gestión del contenido desbordado

| **Propiedad**  | **Valores comunes**                                 |
| -------------- | --------------------------------------------------- |
| `overflow`     | `visible` (por defecto), `hidden`, `scroll`, `auto` |
| `overflow-x/y` | Mismo conjunto, controla eje X o Y por separado.    |

```css
.box {
  width: 200px; height: 100px;
  overflow: auto; /* scroll si el contenido supera el tamaño */
}
```

* **`visible`**: deja que el contenido sobresalga.
* **`hidden`**: recorta el exceso (útil para máscaras o contenedores fijos).
* **`scroll`**: siempre muestra barras de scroll.
* **`auto`**: muestra barras solo cuando sea necesario.

---

### 6.4 `position` — modelo de posicionamiento

| **Valor**  | **Descripción**                                                                                                |          |       |                            |
| ---------- | -------------------------------------------------------------------------------------------------------------- | -------- | ----- | -------------------------- |
| `static`   | Por defecto; elemento en flujo normal, ignora `top/right/...`.                                                 |          |       |                            |
| `relative` | Como `static` pero permite desplazar con `top/right/bottom/left` sin salir del flujo (espacio original queda). |          |       |                            |
| `absolute` | Se posiciona respecto al ancestro posicionado (\`relative                                                      | absolute | fixed | sticky\`); sale del flujo. |
| `fixed`    | Similar a `absolute` pero respecto a la ventana (viewport); perfecto para barras fijas.                        |          |       |                            |
| `sticky`   | Híbrido `relative`↔`fixed`: actúa como relativo hasta cruzar un umbral del viewport, luego se “pega”.          |          |       |                            |

```css
/* Sticky header */
header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 100;
}
```

---

### 6.5 `z-index` — orden en el eje Z

* Solo funciona en elementos posicionados (`position` distinto de `static`).
* Acepta enteros (positivos, negativos, 0).
* Elementos con mayor `z-index` aparecen por encima.

```css
.modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 1000; }
.backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 900; }
```

> [!TIP]
>
> Crear variables en el nivel raíz para gestionar capas:
>
> ```css
> :root {
>   --z-backdrop: 100;
>   --z-modal: 200;
>   --z-tooltip: 300;
> }
> ```

---

### 6.6 `float` & `clear` — diseño “clásico”

| **Propiedad** | **Valores**                     | **Uso**                                                                                               |
| ------------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `float`       | `left`, `right`, `none`         | Saca el elemento del flujo y lo coloca a izquierda/derecha, permitiendo que el texto fluya a su lado. |
| `clear`       | `left`, `right`, `both`, `none` | Limpia floats: el elemento siguiente “rompe” el envoltorio de floats a ese lado.                      |

```html
<img class="float-right" src="..." alt="...">
<p>Texto que fluye alrededor de la imagen...</p>
<div style="clear: both;"></div>
```

> [!TIP]
> **Buenas prácticas**
>  -  Usa floats solo para textos alrededor de imágenes o elementos muy sencillos.
>  - Para layouts complejos, prefiere **Flexbox** o **Grid** y deja `float` para casos puntuales.

- Ejercicios de colores y fondos en [visualizacion.md](./ejercicios/visualizacion.md)

## 7. Flexbox

Flexbox es un modelo de diseño unidimensional, ideal para organizar elementos en
fila o columna con control preciso del alineamiento, el reparto de espacio y la 
distribución de órdenes. 

Se compone de **contenedor flex** (padre) y **items flex** (hijos).

> [!TIP]
> Flexbox es una elección adecuada cuando el diseño se puede organizar en filas
> y columnas.

### 7.1 Conceptos básicos

* **Eje principal (main axis)**
  La dirección en la que fluyen los flex items. Por defecto es horizontal (`row`).
* **Eje cruzado (cross axis)**
  Perpendicular al main axis (vertical si `row`, horizontal si `column`).
* **Flex container**
  Cualquier elemento con `display: flex` o `display: inline-flex`.
* **Flex items**
  Hijos directos del contenedor flex.
* **Espacio sobrante**
  El contenedor reparte espacio extra (o lo ajusta) según las reglas de “grow”, “shrink” y “basis”.

### 7.2 Propiedades del Flex Container

| Propiedad           | Sintaxis / Valores                                                                            | Descripción                                                                          |
| ------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **display**         | `display: flex;`<br>`display: inline-flex;`                                                   | Activa el contexto Flexbox.                                                          |
| **flex-direction**  | `row` (por defecto)<br>`row-reverse`<br>`column`<br>`column-reverse`                          | Define el main axis y el orden de los items.                                         |
| **flex-wrap**       | `nowrap` (por defecto)<br>`wrap`<br>`wrap-reverse`                                            | Permite que los items salten a una nueva línea (o columna).                          |
| **justify-content** | `flex-start`<br>`flex-end`<br>`center`<br>`space-between`<br>`space-around`<br>`space-evenly` | Alinea items a lo largo del main axis (distribución de espacio entre/antes/después). |
| **align-items**     | `stretch` (por defecto)<br>`flex-start`<br>`flex-end`<br>`center`<br>`baseline`               | Alinea items a lo largo del cross axis (ajusta la caja de cada item).                |
| **align-content**   | `stretch`<br>`flex-start`<br>`flex-end`<br>`center`<br>`space-between`<br>`space-around`      | Alinea líneas de items cuando hay varias filas/columnas (solo si hay wrap).          |

> [!NOTE]
> **Buen uso**
>
> * Para layouts de una sola dimensión, flex es más sencillo que grid.
> * Combina `justify-content` con `align-items` para centrar items en dos ejes.
> * Usa `wrap` si los elementos deben fluir en varias líneas en pantallas pequeñas.

### 7.3 Propiedades de los Flex Items

| Propiedad       | Sintaxis / Valores                        | Descripción                                                            |                                                                                      |          |        |             |                                                  |
| --------------- | ----------------------------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------- | ------ | ----------- | ------------------------------------------------ |
| **order**       | `order: <número entero>;` (por defecto 0) | Controla el orden visual de los items sin cambiar el HTML.             |                                                                                      |          |        |             |                                                  |
| **flex-grow**   | `flex-grow: <número>;` (por defecto 0)    | Define cuánto espacio extra toma el item respecto al total disponible. |                                                                                      |          |        |             |                                                  |
| **flex-shrink** | `flex-shrink: <número>;` (por defecto 1)  | Indica cuánto se reduce el item cuando el espacio es insuficiente.     |                                                                                      |          |        |             |                                                  |
| **flex-basis**  | \`flex-basis: <longitud>                  | auto;`(por defecto`auto\`)                                             | Tamaño inicial del item antes de repartir espacio. Puede usar `%`, `px`, `rem`, etc. |          |        |             |                                                  |
| **align-self**  | \`align-self: auto                        | stretch                                                                | flex-start                                                                           | flex-end | center | baseline;\` | Sobrescribe `align-items` para un item concreto. |

#### Ejemplos rápidos

```css
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: start;
}

/* Reordenar visualmente */
.item--primero { order: 2; }
.item--segundo { order: 1; }

/* Crecer y encoger */
.item--crece {
  flex-grow: 2;    /* tomará el doble de espacio sobrante */
  flex-shrink: 0;  /* no se encogerá si falta espacio */
  flex-basis: 150px;
}

/* Ajuste individual de alineamiento */
.item--alineado {
  align-self: flex-end;
}
```

> [!TIP]
>
> **Tips**
>
> * Usa la shorthand `flex: grow shrink basis;` (por ejemplo `flex: 1 0 200px;`).
> * Valores altos de `order` colocan el item al final; valores negativos al principio.
> * Para centrar un solo item en el contenedor:
>
>   ```css
>   .container {
>     display: flex;
>     justify-content: center;
>     align-items: center;
>   }
>   ```

- Ejercicios de colores y fondos en [flexbox.md](./ejercicios/flexbox.md)
- Puedes practicar con este [juego para aprender Flexbox](https://flexboxfroggy.com/)

## 8. Grid

CSS Grid es un sistema bidimensional que permite construir rejillas complejas 
definiendo filas y columnas. Se compone de un **contenedor grid** y **grid items** 
(hijos directos).

### 8.1 Conceptos básicos

* **Grid container**: elemento padre con `display: grid` o `display: inline-grid`. Define la rejilla.
* **Grid tracks**: filas y columnas que forman la estructura.
* **Grid cells**: intersección de una fila y una columna.
* **Grid areas**: áreas nombradas formadas por varias celdas.
* **Gap**: espacio entre tracks (reemplaza a `grid-row-gap` y `grid-column-gap`).

### 8.2 Propiedades del Grid Container

| Propiedad               | Sintaxis / Valores                                                                               | Descripción                                                                 |
| ----------------------- | ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| `grid-template-columns` | `grid-template-columns: 200px 1fr 2fr;`<br>`repeat(3, minmax(100px, 1fr))`                       | Define el ancho de cada columna. Canales fijos, fluidos o repeat.           |
| `grid-template-rows`    | `grid-template-rows: 100px auto 50px;`                                                           | Define la altura de cada fila.                                              |
| `grid-template-areas`   | `css<br>grid-template-areas:<br>  "header header"<br>  "sidebar main"<br>  "footer footer";<br>` | Nombra áreas en una “plantilla” de texto. Hace sencillo el posicionamiento. |
| `gap`                   | `gap: 1rem 2rem;`  (fila / columna)                                                              | Espacio entre filas y columnas.                                             |
| `justify-items`         | `start` / `end` / `center` / `stretch`                                                           | Alinea el contenido de cada celda en el eje inline (horizontal).            |
| `align-items`           | `start` / `end` / `center` / `stretch`                                                           | Alinea el contenido de cada celda en el eje block (vertical).               |
| `place-items`           | Shorthand de `align-items` + `justify-items`:<br>`place-items: center stretch;`                  | Atajo para alinear en ambos ejes simultáneamente.                           |

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 1rem 2rem;
  justify-items: stretch;
  align-items: start;
}
```

### 8.3 Propiedades de los Grid Items

| Propiedad      | Sintaxis / Valores                                                          | Descripción                                                                           |
| -------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `grid-column`  | `grid-column: 1 / 3;`<br>`span 2`                                           | Indica inicio y fin de columna (líneas de rejilla) o cuántas columnas ocupa (`span`). |
| `grid-row`     | `grid-row: 2 / span 3;`                                                     | Igual para filas: línea de inicio y fin, o `span` para ocupar varias.                 |
| `grid-area`    | `grid-area: header;`                                                        | Ubica el ítem en un área nombrada definida en `grid-template-areas`.                  |
| `justify-self` | `start` / `end` / `center` / `stretch`                                      | Alinea el item dentro de su celda en el eje inline (horizontal).                      |
| `align-self`   | `start` / `end` / `center` / `stretch`                                      | Alinea el item dentro de su celda en el eje block (vertical).                         |
| `place-self`   | Shorthand de `align-self` + `justify-self`:<br>`place-self: center center;` | Atajo para alinear un item en ambos ejes.                                             |

```css
.header {
  grid-area: header;
}
.sidebar {
  grid-column: 1 / 2;
  grid-row: 2;
}
.main {
  grid-column: 2 / 3;
  grid-row: 2;
}
.footer {
  grid-area: footer;
  justify-self: center;
  align-self: end;
}
```

### 8.4 Ejemplo completo

```html
<div class="grid-container">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main content</main>
  <footer class="footer">Footer</footer>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 1rem;
  place-items: stretch center;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; place-self: end center; }
```

- Ejercicios de colores y fondos en [grid.md](./ejercicios/grid.md) 
- Puedes practicar con este [juego para aprender Grid](https://cssgridgarden.com/) 
- Ya puedes empezar los [Labs 3 y 4](./labs.md)

---

## 9. Transiciones y Animaciones

* **transition**

  * Shorthand para animar cambios de propiedades CSS (p. ej. `transition: background‐color 0.3s ease-in-out 0s;`).
  * Componentes: propiedad(s), duración, función de tiempo (timing‐function), retardo.
* **@keyframes**

  * Define fotogramas intermedios de una animación CSS.
  * Sintaxis:

    ```css
    @keyframes miAnim {
      0%   { opacity: 0; transform: translateY(-10px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    ```
* **animation**

  * Shorthand para aplicar un `@keyframes`: nombre, duración, timing‐function, delays, iteraciones, dirección, modo de relleno, estado.
* **transform**

  * Transformaciones 2D y 3D: `translate()`, `rotate()`, `scale()`, `skew()`.
  * Se encadenan: `transform: translateX(10px) scale(1.2);`.
* **transform-origin**

  * Punto de origen de la transformación (p. ej. `transform-origin: top left;`).
* **perspective**

  * Añade profundidad a transformaciones 3D (se define en el contenedor padre o en la propiedad shorthand).
* **backface-visibility**

  * Controla si se muestra la “cara trasera” de un elemento cuando rota en 3D (`visible`/`hidden`).

---

## 10. Diseño Responsivo

* **Viewport**

  * Meta tag esencial: `<meta name="viewport" content="width=device-width, initial-scale=1">`.
* **Media Queries**

  * Condiciones CSS basadas en características del dispositivo (`@media (min-width: 768px) { … }`).
* **Unidades relativas**

  * `%` (contenedor), `vw`/`vh` (viewport), `rem` (raíz), `em` (elemento).
* **Imágenes responsivas**

  * Atributos `srcset`/`sizes`, `picture`, `object-fit`.
* **Mobile-first vs Desktop-first**

  * Escribir reglas para móvil primero (`min-width`), o para escritorio primero (`max-width`). Mobile-first suele facilitar la optimización y el rendimiento.

---

## 11. Variables CSS

* **Definición**

  * Se declaran con `--nombre: valor;` (más habitual en `:root`).
* **Uso**

  * `color: var(--color-principal, blue);` (segundo parámetro = valor de reserva).
* **Ámbito**

  * Respetan la cascada e heredan a todos los descendientes del elemento donde se declaran.

---

## 12. Preprocesadores CSS (Breve introducción)

* **SASS/SCSS, LESS, Stylus**

  * Sintaxis extendida que compila a CSS puro.
* **Variables**

  * `$color-base: #3498db;`
* **Anidamiento**

  * Selector padre `&`, anidación lógica de reglas.
* **Mixins**

  * Bloques reutilizables con parámetros (`@mixin centrado { display: flex; justify-content: center; }`).
* **Herencia / Extends**

  * Compartir reglas entre selectores (`@extend .botón-base;`).

---

## 13. Metodologías CSS

* **BEM** (Block-Element-Modifier)

  * `block__element--modifier` → máxima claridad y bajo acoplamiento.
* **OOCSS** (Object-Oriented CSS)

  * Separar “estructura” (contenedor) de “skin” (estilo visual).
* **SMACSS** (Scalable and Modular Architecture for CSS)

  * Categorías: Base, Layout, Module, State, Theme.
* **ITCSS** (Inverted Triangle CSS)

  * Capas en orden: Settings → Tools → Generic → Elements → Objects → Components → Utilities.

---

## 14. Herramientas y Recursos

* **DevTools**

  * Inspección, perfiles de rendimiento, edición en vivo.
* **Validadores**

  * W3C CSS Validator, stylelint.
* **Prefijos de proveedores**

  * Autoprefixer / PostCSS para compatibilidad cross-browser.
* **Normalize.css / Reset CSS**

  * Base consistente: resetear o normalizar estilos por defecto.
* **Frameworks populares**

  * Bootstrap, Tailwind CSS, Foundation…

---

## 15. Buenas Prácticas

* **Especificidad**

  * Mantenerla baja y predecible; evitar selectores muy anidados.
* **Herencia**

  * Aprovechar valores por defecto y variables para no repetir.
* **Organización de código**

  * Modularizar en varios archivos, usar Imports.
* **Nomenclatura**

  * Convenciones claras (BEM, spaghetti-free).
* **Rendimiento**

  * Minificar, critical CSS, carga diferida de fuentes.
* **Accesibilidad**

  * Contraste de color, foco visible, `prefers-reduced-motion`.

---

## 16. Novedades en CSS

* **CSS Grid Layout** y **Flexbox** (ya estándar).
* **Custom Properties** (Variables CSS nativas).
* **Subgrid** (Grid dentro de grid).
* **Container Queries** (consultas basadas en contenedor en lugar de viewport).
* **Cascade Layers** (`@layer` para organización y control de prioridades).
* **Selector `:has()`** (parent selector).
* **Aspect Ratio** (`aspect-ratio: 16/9;`).
* **Scroll Snap** (`scroll-snap-type`, `scroll-snap-align`).


- [Ejercicios de temas del 09 al 16](./ejercicios/mas-ejercicios.md)

---

- [Ejercicios de CSS](./ejercicios/css.md)

---

## Referencias

- W3Schools: https://www.w3schools.com/css/
- MDN Web Docs: https://developer.mozilla.org/es/docs/Web/CSS