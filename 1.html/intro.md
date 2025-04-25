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

Los enlaces (links)  son elementos que se pueden colocar en cualquier lugar de un documento HTML. Se crean con la etiqueta `<a>` (anchor).

````html
<a href="https://www.google.com/">Abrir Google</a>
````

### Imágenes: img

```html
<img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
```

### listas: ul y ol

### Semántica
