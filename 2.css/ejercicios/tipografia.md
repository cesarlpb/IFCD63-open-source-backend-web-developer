# Ejercicios de tipografía

1. **Pila de fuentes y tamaño base**

   * Crea una página HTML con un `<h1>` y un `<p>`.
   * Aplica a todo el documento:

     ```css
     body {
       font-family: "Nunito", Arial, sans-serif;
       font-size: 1rem;
     }
     ```
   * En el `<h1>`, comprueba que, si “Nunito” no carga, use la siguiente fuente de la pila.

2. **Tipografía fluida con `clamp()`**

   * Añade otro párrafo y dale la clase `.intro`.
   * Haz que su tamaño varíe entre 1 rem y 1.5 rem según el ancho de la ventana:

     ```css
     .intro {
       font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
     }
     ```

3. **Peso y estilo**

   * En tu documento incluye:

     ```html
     <h2>Subtítulo normal</h2>
     <h2 class="fancy">Subtítulo cursiva</h2>
     <p class="heavy">Párrafo en negrita</p>
     ```
   * En CSS:

     ```css
     .fancy {
       font-style: italic;
     }
     .heavy {
       font-weight: 700;
     }
     ```

4. **Interlineado y alineación**

   * Crea un bloque `<div class="quote">…</div>` con texto largo.
   * Estílalo para que tenga `line-height: 1.6;` y `text-align: justify;`.

5. **Decoraciones y transformaciones de texto**

   * Añade un enlace `<a href="#">Visita mi blog</a>`.
   * Dale:

     ```css
     a {
       text-decoration: underline wavy crimson;
       text-transform: uppercase;
     }
     a:hover {
       text-decoration-color: royalblue;
     }
     ```

6. **Espaciados (letras y palabras)**

   * Crea un `<h3>` con texto de varias palabras.
   * Aplica:

     ```css
     h3 {
       letter-spacing: 0.1em;
       word-spacing: 0.3em;
     }
     ```
   * Observa cómo cambia la densidad del texto y prueba valores negativos en `letter-spacing`.

---

**Bonus:**

– Combina todos los ejercicios en una mini–“tarjeta” (`.card`) donde veas aplicar a la vez `font-family`, tamaño, peso, estilo, interlineado, alineación, decoración, transformaciones y espaciados. Así integran el conjunto de propiedades en un mismo componente.
