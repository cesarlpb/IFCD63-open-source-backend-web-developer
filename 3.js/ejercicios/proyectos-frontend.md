# Proyectos de JavaScript para Web / Front-End

1. **Contador de clics**

   * Un botón “Haz clic” y un `<span>` que muestre el número de veces que se ha pulsado.
   * Requisitos:

     * Listener `click` en el botón.
     * Actualizar el texto del `<span>`.
     * Botón “Reset” que ponga el contador a cero.

2. **Filtro de lista**

   * Un `<input>` de búsqueda y una lista `<ul>` de 10 ítems.
   * Requisitos:

     * Listener `input` para cada tecla.
     * Ocultar (`style.display = 'none'`) los `<li>` que no contengan el texto buscado.
     * Mostrar todos si el campo está vacío.

3. **Acordeón FAQ**

   * Varias preguntas (`<h3>`) seguidas de respuestas (`<div>`).
   * Requisitos:

     * Listener `click` en cada `<h3>`.
     * Alternar la visibilidad de su `<div>` adyacente (`classList.toggle('open')`).
     * Solo una respuesta abierta a la vez (cerrar la anterior).

4. **Pestañas (Tabs)**

   * Un conjunto de botones `<button>` arriba y varios `<section>` de contenido.
   * Requisitos:

     * Listener `click` en cada botón.
     * Mostrar la sección asociada, ocultar las demás.
     * Marcar la pestaña activa con una clase.

5. **Light/Dark Mode Switch**

   * Un toggle (`checkbox` o botón) que cambie tema entre claro y oscuro.
   * Requisitos:

     * Listener `change` o `click`.
     * Aplicar clase `dark` en `<body>` o en `:root`.
     * Guardar preferencia en `localStorage` y restaurarla al recargar.

6. **Modal emergente**

   * Un botón “Abrir modal” que muestre un overlay y un cuadro centrado.
   * Requisitos:

     * Crear (o ocultar/mostrar) elementos del modal con DOM.
     * Listener en botón “Cerrar” y en overlay para ocultar modal.
     * Evitar scroll del fondo (`document.body.style.overflow = 'hidden'`).

7. **Galería con Lightbox simplificado**

   * Varias miniaturas `<img>`; al hacer click abre la imagen grande sobre un fondo oscuro.
   * Requisitos:

     * Delegación de eventos en el contenedor.
     * Crear dinámicamente el lightbox (imagen + botón cerrar).
     * Listener en fondo/`Esc` para destruir el lightbox.

8. **Validación en tiempo real de formulario**

   * Form con nombre, email y contraseña.
   * Requisitos:

     * Listener `input` en cada campo.
     * Mostrar mensaje de error si el email no cumple regex o contraseña < 8 caracteres.
     * Habilitar/deshabilitar botón “Enviar” solo si todo es válido.

9. **Mini-calculadora**

   * Botones `0–9`, `+−×÷`, `=` y `C`, y un display `<input readonly>`.
   * Requisitos:

     * Listener `click` en todos los botones.
     * Construir la expresión en el display.
     * Al `=` usar `eval()` (o parsing manual) y mostrar resultado.
     * `C` limpia el display.

10. **Temporizador de cuenta regresiva**

    * Un `<input type="number">` para segundos y botones “Start”/“Stop”.
    * Requisitos:

      * Listener `click` en Start para arrancar `setInterval` que actualice un `<span>`.
      * Stop detiene el timer.
      * Al llegar a 0, parar y mostrar alerta o mensaje “¡Tiempo cumplido!”.


Happy coding!