# Ejercicios de CSS

## 1. Reglas básicas y selectores

1. Crea tres estilos distintos usando selector de etiqueta (`h2`), selector de clase (`.mi-clase`) y selector de ID (`#mi-id`).  

2. Usa un selector de atributo para aplicar un borde rojo a todos los `<input type="email">`.  

3. Aplica un estilo `:hover` en un enlace (`a:hover`) y un `::first-letter` en un párrafo (`p::first-letter`).

## 2. Modelo de caja (Box Model)

4. Define en `.tarjeta` un `padding: 20px`, `border: 2px solid #333` y `margin: 16px`; comprueba visualmente el espacio.  

5. Aplica `box-sizing: border-box` globalmente (`* { box-sizing: border-box; }`) y compara con el comportamiento por defecto al asignar `width: 200px` a un elemento con padding y border.

## 3. Colores y fondos

6. Crea tres `<div class="color-box">` y asígnales `background-color` en formatos hexadecimal, `rgb()` y `hsl()`.  

7. Añade un `background-image: url(...)` con un color de fondo de respaldo (`background-color`) y ajusta `background-size: cover`.

## 4. Tipografía

8. En el `body`, define `font-family: "Inter", sans-serif; font-size: 1rem; line-height: 1.5;`.  

9. Aplica a los enlaces `text-decoration: underline wavy #e91e63;` y transforma un `<h1>` a mayúsculas con `text-transform: uppercase;`.

## 5. Modelo de visualización y posicionamiento

10. Crea un `<div class="oculto">` y ocúltalo una vez con `visibility: hidden` y otra con `display: none`; observa la diferencia en el flujo.  

11. Diseña un contenedor de 200×100 px con `overflow: auto` y contenido sobrante para que aparezcan barras de scroll.  

12. Dentro de un `.contenedor { position: relative; }`, coloca un `.item { position: absolute; top: 10px; right: 10px; z-index: 10; }` y verifica que queda por encima de otros elementos.

## 6. Flexbox

13. Centra un `<div class="box">` de 100 px dentro de un `.flex-container` de 300×300 px usando `justify-content` y `align-items`.  

14. Crea un menú horizontal con `display: flex; justify-content: space-around;` y cuatro enlaces.  

15. Monta una galería de imágenes con `flex-wrap: wrap; gap: 1rem;` de modo que en pantallas angostas hagan “wrap”.

## 7. CSS Grid

16. Crea un contenedor `.grid` con `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;`.  

17. Usa `grid-template-areas` para ubicar un `<header>`, `<main>` y `<footer>` en una sola columna o dos columnas según tu diseño.

## 8. Transiciones y animaciones

18. Añade `transition: background-color 0.3s ease;` a un botón para que su fondo cambie suavemente al `:hover`.  

19. Define `@keyframes fadeIn` que anime `opacity` de 0 a 1 y aplícalo a un `.modal` con `animation: fadeIn 0.5s forwards;`.  

20. Crea una “flip card” usando `transform: rotateY(180deg)` en `:hover` y `backface-visibility: hidden` en ambas caras.

## 9. Diseño responsivo

21. Con media queries `@media (min-width: 768px)` cambia `.layout { flex-direction: column; }` a `row`.  

22. Usa `font-size: clamp(1rem, 1rem + 1vw, 1.5rem);` en un párrafo y verifica cómo escala al cambiar el ancho de la ventana.

## 10. Variables CSS

23. Declara en `:root` `--color-principal: #007bff; --espacio: 1rem;` y úsalos en varios selectores con `var()`.

## 11. Preprocesadores (SASS)

24. En un archivo `.scss`, crea variables `$primary-color` y un `@mixin flex-center` (flex + justify + align), y aplícalo a dos contenedores distintos.

## 12. Metodologías (BEM)

25. Maqueta una tarjeta `.card`, sus elementos `.card__title`, `.card__body` y un modificador `.card--destacado`, siguiendo la convención BEM, y dale estilo.