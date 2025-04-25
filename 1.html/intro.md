# HTML

## ¿Qué es HTML?

> HyperText Markup Language

**HTML** es un lenguaje de marcado de páginas web. En un contexto más general, HTML sirve para crear las interfaces que el usuario ve (mayormente en web pero también en otros entornos como aplicaciones móviles, desktop, etc.).

```html
<h1>¡Hola, mundo!</h1>
<p>Esta es mi primera página web.</p>
```

## Etiquetas básicas

## DOCTYPE y html

```html
<!-- Versión HTML5 -->
<!DOCTYPE html>
<!-- Todo el documento: -->
<html>
  <!-- Cabeceras: -->
  <head>
    <!-- Título, metadatos (previsualizar, SEO, etc.): -->
  </head>
  <!-- Contenido: -->
  <body>
    <!-- Contenido de la página: -->
  </body>
</html>
```

Plantilla de VS Code para HTML5:

```html
<!DOCTYPE html>
<html lang="es">
  <!-- Cabecera (metadatos, importaciones, etc.) -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Título</title>
  </head>
  <!-- Cuerpo (contenido principal) -->
  <body>
    <!-- Contenido -->
  </body>
</html>
```

### h1 ... h6

Los encabezados (headings) de HTML tienen 6 niveles. Se usan para colocar títulos de secciones de la página.

```html
<h1>Encabezado 1</h1>
<h2>Encabezado 2</h2>
<h3>Encabezado 3</h3>
<h4>Encabezado 4</h4>
<h5>Encabezado 5</h5>
<h6>Encabezado 6</h6>
```

### Párrafo: p

Los párrafos (paragraph) son los bloques de texto más básicos de HTML. Alinean texto para que sea legible.

```html
<p>Esta es mi primera página web.</p>
```

### Enlaces: a

Los enlaces (links) son elementos que se pueden colocar en cualquier lugar de un documento HTML. Se crean con la etiqueta `<a>` (anchor).

```html
<a href="https://www.google.com/">Abrir Google</a>
```

Por defecto, los enlaces se abren en la misma pestaña, si queremos usar otra pestaña hay que añadir el atributo `target` con el valor `_blank`:

```html
<a href="https://www.google.com/" target="_blank"
  >Abrir Google en otra pestaña</a
>
```

### Imágenes: img

Las imágenes se colocan en la etiqueta `img` y se debe colocar la fuente de la imagen en el atributo `src` que puede ser un enlace de internet. Atributos habituales:

- **src (necesario):** la ubicación de la imagen, puede ser local o remoto
- **alt (recomendado):** texto alternativo, describe la imagen
- **width / height (opcionales):** sirven para indicar el ancho / alto de la imagen respectivamente

```html
<img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
```

### listas: ul y ol

Las listas nos permiten agrupar elementos con jerarquía y orden. Se pueden intercambiar y se pueden anidar entre sí. Cada elemento de una lista se coloca en un `li` (list item).

```html
<!-- Lista no ordenada (unordered) -->
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <ul>
    <li>Elemento 2.1</li>
    <li>Elemento 2.1</li>
  </ul>
  <li>Elemento 3</li>
</ul>
```

```html
<!-- Lista ordenada (ordered) -->
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <ol>
    <li>Elemento 2.1</li>
    <li>Elemento 2.2</li>
  </ol>
  <li>Elemento 3</li>
</ol>
```

### Semántica

Tenemos una explicación de la semántica de HTML en la [página de W3schools](https://www.w3schools.com/html/html5_semantic_elements.asp).

![Esquema de la estructura de una página web](image.png)

- **header:** etiqueta que va en la parte superior y es la cabecera del documento o sección de la página
- **nav:** agrupa los enlaces/botones de navegación 

- **section:** es una sección de la página, debe tener su propia estructura y normalmente debe contener todo lo que necesita para funcionar. 

Ejemplos:

  - About me / Acerca de
  - Contacto (formulario)
  - Carrusel (fotos que van cambiando)

- **article:** elemento que se puede repetir y es independiente en un section.

Ejemplos:

  - En los últimos posts de un blog, cada tarjeta de post puede ser un article
  - Si tenemos artículos de tienda, cada tarjeta presentando la foto, el título, descripción, precio, etc. puede ser un article

- **aside:** suele ser un panel lateral que tiene diversos usos: navegación, listas de contenidos / enlaces, etc. 
- **footer:** el pie de página suele estar como la última sección de una página y suele tener datos del proyecto / empresa y enlaces de navegación

---

**Ejercicio:** completar el contenido del archivo [semantica.html](./semantica.html)


---

- **details:**
- **figcaption:**
- **figure:**
- **main:**
- **mark:**


- **summary:**
- **time:**

