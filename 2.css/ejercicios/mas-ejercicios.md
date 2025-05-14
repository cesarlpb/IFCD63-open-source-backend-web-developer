# Ejercicios de los temas del 09 al 16

1. **Hover con transición**
   Crea un botón que cambie su `background-color` en 0.3 s al pasar el ratón (`transition` + `background-color`).

2. **Animación de entrada**
   Define un `@keyframes` que haga un elemento aparecer con `opacity` y `transform: translateY(20px)` en 0→100 %.

3. **Rotación 3D**
   Con `transform: rotateY(180deg)` y `backface-visibility: hidden`, haz un “flip card” que muestre su reverso.

4. **Meta viewport + media queries**
   Añade la etiqueta `viewport` y crea 2 breakpoints (`min-width: 640px`, `min-width: 1024px`) que cambien el color de fondo del `<body>`.

5. **Tipografía fluida**
   Usa `font-size: clamp(1rem, 2vw, 1.5rem)` en un párrafo y prueba cómo escala al redimensionar la ventana.

6. **Imágenes responsivas**
   Implementa un `<img>` con `srcset`/`sizes` para servir 400 px, 800 px y 1200 px según el ancho de pantalla.

7. **Variables CSS**
   Declara en `:root` `--color-principal` y úsala en 3 selectores con `var(--color-principal)`; prueba un valor distinto en un `section`.

8. **SCSS anidado y mixin**
   En un archivo `.scss`, crea un mixin `centrar-flex` (flex+justify+align) y aplícalo a 2 contenedores distintos.

9. **BEM vs OOCSS**
   Diseña un “card” simple usando la convención BEM (`.card__title`, `.card--featured`) y después refactorízala con OOCSS (separa estructura/“skin”).

10. **Container Query**
    Crea un `<div class="box">` que cambie de `flex-direction: column → row` cuando su ancho supere 300 px usando `@container`.

11. **Aspect Ratio y Scroll Snap**
    Monta una galería horizontal con `aspect-ratio: 16/9` en cada imagen y activa `scroll-snap-type: x mandatory;` y `scroll-snap-align: center`.

12. **Lint y Autoprefixer**
    Instala stylelint en un proyecto pequeño y añade Autoprefixer para generar prefijos en `display: grid` y `flex`.

Happy coding!
