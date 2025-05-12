# Temas Básicos de CSS

## 1. Introducción a CSS
- **¿Qué es CSS?**

  CSS (Cascading Style Sheets) es un lenguaje de hojas de estilo que define la apariencia y el formato de un documento web. 
  Es decir, HTML le da estructura a la página web, mientras que CSS le da estilo.

- **Sintaxis básica**

  ```css
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
- Selectores de tipo (etiquetas)
- Selectores de clase
- Selectores de ID
- Selectores de atributo
- Selectores descendentes
- Selectores de hijos directos
- Selectores hermanos
- Pseudo-clases
- Pseudo-elementos

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

Este documento sirve como índice de referencia para los conceptos fundamentales de CSS. Cada sección puede expandirse con ejemplos y explicaciones más detalladas según sea necesario.
