# Ejercicios de Colores y Fondos

1. **Formatos de color**

   * Crea un pequeño HTML con tres `<div>` de 100×100 px.
   * Asigna a cada uno un `background-color` distinto usando:

     1. Notación hexadecimal (`#3498db`),
     2. `rgb()` (`rgb(46, 204, 113)`),
     3. `hsl()` (`hsl(315, 70%, 50%)`).

2. **background-color**

   * Crea un `<section>` con texto y ponle un fondo semitransparente usando `rgba(0,0,0,0.6)` y texto en blanco.
   * Ajusta el padding para que se vea bien el recuadro oscuro.

3. **background-image**

   * Descarga o usa una imagen de tu elección y aplícala como fondo a un `<header>`.
   * Usa `background-image: url(...)` y añade `background-color: #222;` como fallback mientras carga.

4. **background-position + background-size + background-repeat**

   * Usa la misma imagen de fondo y en un `<div>` de 300×200 px prueba combinaciones:

     * `background-position: center top;`
     * `background-size: cover;`
     * `background-repeat: no-repeat;`
   * Luego cambia a `background-size: contain;` y `repeat-x`.

5. **background-attachment**

   * Crea una página con scroll largo y pon un `background-attachment: fixed;` a un `<section>` de 100 vh.
   * Observa el efecto parallax simple al desplazar.

6. **Linear-gradient**

   * En un `<button>` crea un degradado de izquierda a derecha de dos colores (`linear-gradient(to right, #ff7e5f, #feb47b)`).
   * Ajusta el ángulo usando `to bottom right`.

7. **Radial-gradient**

   * Haz un `<div>` circular (200 px) y ponle un degradado radial que vaya de un color central a otro exterior.
   * Prueba `circle at center` y luego desplaza el centro (`at top left`).

8. **Repeating-gradient**

   * Crea una barra horizontal de 100 px de alto con `background: repeating-linear-gradient(45deg, #444, #444 10px, #999 10px, #999 20px);`.
   * Ajusta el tamaño de las franjas cambiando los valores en la función.

9. **Ejemplo completo**

   * Monta una “card” de 300×400 px con:

     * Fondo con imagen + degradado semi-transparente encima (`background: linear-gradient(...), url(...);`).
     * `background-size: cover; background-position: center;`.
     * Un botón con su propio degradado y sombra suave.

10. **Checklist rápido**

    * ¿Has probado al menos dos formatos de color distintos?
    * ¿Funcionan tus degradados en móvil y escritorio?
    * ¿Tienes un fallback de color sólido para la imagen de fondo?
    * ¿El `background-attachment: fixed` se ve fluido al hacer scroll?

---

> [!TIP]
> **Tip bonus:** combina los ejercicios 6–7 y crea un degradado que mezcle lineal 
y radial en una misma regla:

```less
background:
  radial-gradient(circle at top left, rgba(255,255,255,0.3), transparent),
  linear-gradient(to right, #222, #555);
```

