# Temario HTML para Web / Front-End

## 1. ¿Qué es HTML?

**HTML** (HyperText Markup Language) es el lenguaje de marcado estándar para crear páginas web. No es un lenguaje de programación, sino un conjunto de **etiquetas** que el navegador interpreta para estructurar contenido (texto, imágenes, enlaces, etc.) y dotarlo de semántica.

* **Características principales**

  * **Markup**: usa “tags” (etiquetas) encerradas entre `<` y `>` para delimitar elementos.
  * **Hipertexto**: permite enlazar documentos mediante `<a href="…">`.
  * **Estructural y semántico**: cada etiqueta aporta significado (p. ej. `<header>`, `<article>`, `<footer>`).

### Ejemplo mínimo

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi primera página</title>
  </head>
  <body>
    <h1>¡Hola, mundo!</h1>
    <p>Este es mi primer documento HTML.</p>
  </body>
</html>
```

* `<h1>` define un encabezado de nivel 1.
* `<p>` define un párrafo de texto.

## 2. Estructura básica de un documento

Todo fichero HTML sigue esta plantilla mínima:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Título de la página</title>
    <!-- Aquí van estilos, iconos, fuentes… -->
  </head>
  <body>
    <!-- Aquí va el contenido visible: texto, imágenes, enlaces… -->
  </body>
</html>
```

1. `<!DOCTYPE html>`
   Indica la versión de HTML (HTML5), garantiza el modo estándar en todos los navegadores.
2. `<html lang="es">`
   Elemento raíz; el atributo `lang` mejora accesibilidad y SEO (detectores de idioma).
3. `<head>`
   Contiene **metadatos** y recursos que no se muestran directamente:

   * `<meta charset="utf-8">`: codificación de caracteres.
   * `<meta name="viewport" content="width=device-width, initial-scale=1">`: controla el viewport en móviles.
   * `<title>`: título que aparece en la pestaña del navegador.
4. `<body>`
   Todo lo que se renderiza en la página va dentro del `<body>`.

## 3. Metadatos y recursos

En la sección `<head>` enlazamos estilos, iconos y otros recursos externos.

### Hojas de estilo CSS

```html
<link rel="stylesheet" href="css/style.css">
```

* `rel="stylesheet"`: relación con el documento.
* `href`: ruta al archivo CSS.

### Favicon

```html
<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
```

* Icono que aparece en la pestaña del navegador.
* Se suele ofrecer en varios tamaños y formatos (`.ico`, `.png`).

### Imágenes de logo y favicons

Aunque las imágenes van en el `<body>`, es común precargarlas o definir variantes:

```html
<!-- Preload para mejorar rendimiento -->
<link rel="preload" href="images/logo.svg" as="image">

<!-- Icono de Apple Touch -->
<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
```

* **`rel="preload"`**: carga anticipada de recursos críticos.
* **`apple-touch-icon`**: icono específico para iOS cuando el usuario guarda la web en la pantalla de inicio.

## 4. Etiquetas de texto y contenedor genérico

### 4.1 Encabezados: `<h1>`–`<h6>`

* Definen la jerarquía de títulos en la página.
* **Regla:** solo un `<h1>` por página (título principal), el resto de niveles (`<h2>`–`<h6>`) organizan secciones y subsecciones.
* **SEO y accesibilidad:** los lectores de pantalla y los motores de búsqueda usan la estructura de encabezados para comprender el documento.

```html
<h1>Mi Blog de Viajes</h1>
<h2>Europa</h2>
<h3>España</h3>
<h4>Madrid</h4>
```

### 4.2 Párrafos: `<p>`

* Agrupan bloques de texto corrido.
* Nunca anidar `<p>` dentro de otro `<p>`.
* El navegador añade un margen por defecto (que conviene normalizar o ajustar via CSS).

```html
<p>Este es un párrafo de ejemplo en el que explicamos la importancia de la semántica en HTML.</p>
```

### 4.3 Contenedores genéricos: `<div>` y `<span>`

* **`<div>`**

  * Caja de nivel bloque, sin significado semántico.
  * Útil para agrupar secciones o aplicar estilos/layout.
* **`<span>`**

  * Caja de nivel inline, sin significado semántico.
  * Perfecta para estilizar o marcar porciones de texto dentro de un párrafo.

```html
<div class="card">
  <h3>Título de tarjeta</h3>
  <p>Contenido <span class="highlight">destacado</span> dentro del texto.</p>
</div>
```

## 5. Enlaces y navegación

### 5.1 Etiqueta de enlace: `<a href="">`

* **`href`**: URL de destino (puede ser absoluta o relativa).
* **`target="_blank"`**: abre en nueva pestaña/ventana.
* **Seguridad:** si usas `target="_blank"`, añade `rel="noopener noreferrer"` para evitar vulnerabilidades de seguridad y rendimiento.

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Visita nuestro sitio
</a>
```

### 5.2 Listas de navegación

* Agrupar enlaces en una lista semántica mejora la accesibilidad y el estilo:

```html
<nav>
  <ul class="menu">
    <li><a href="#home">Inicio</a></li>
    <li><a href="#about">Nosotros</a></li>
    <li><a href="#contact">Contacto</a></li>
  </ul>
</nav>
```

* `<nav>`: elemento de nivel bloque que indica un bloque de navegación principal.
* `<ul>` / `<li>`: lista desordenada de ítems de navegación.

## 6. Imágenes y multimedia

### 6.1 Imagen básica: `<img>`

* Atributos esenciales:

  * **`src`**: ruta de la imagen.
  * **`alt`**: texto alternativo obligatorio para accesibilidad y SEO.
  * **`width`** / **`height`** (opcional): dimensiones en píxeles (ayudan al navegador a reservar espacio).

```html
<img src="images/logo.png" alt="Logotipo de Mi Empresa" width="200" height="80">
```

### 6.2 Buenas prácticas de accesibilidad

1. **`alt` descriptivo**

   * Si la imagen aporta contenido: describir su función o significado.
   * Si es puramente decorativa: usar `alt=""` (vacío) para que los lectores de pantalla lo omitan.
2. **Evitar imágenes de texto**

   * El texto informativo debe ir en HTML, no en la imagen.
3. **Lazy loading**

   * Para mejorar rendimiento:

     ```html
     <img src="foto.jpg" alt="Descripción" loading="lazy">
     ```
4. **Formas alternativas de multimedia**

   * Vídeos con subtítulos:

     ```html
     <video controls>
       <source src="video.mp4" type="video/mp4">
       Tu navegador no soporta video.
     </video>
     ```
   * Audio con transcripción cuando sea relevante.

## 7. Listas y estructuras de repetición

### 7.1 Listas no ordenadas: `<ul>` / `<li>`

* Se usan para agrupar elementos sin un orden implícito.
* Cada ítem va dentro de un `<li>`.
* Ideal para menús, colecciones de enlaces o cualquier agrupación de items.

```html
<ul>
  <li>Manzana</li>
  <li>Pera</li>
  <li>Plátano</li>
</ul>
```

### 7.2 Listas ordenadas (complemento): `<ol>` / `<li>`

* `<ol>` numera automáticamente cada ítem.
* Útil para pasos de un proceso, instrucciones o clasificaciones.

```html
<ol>
  <li>Precalentar el horno a 180 °C.</li>
  <li>Mezclar ingredientes secos.</li>
  <li>Hornear 25 minutos.</li>
</ol>
```

## 8. Semántica en HTML5

### 8.1 Estructura de secciones

* `<header>`: encabezado de la página o de una sección.
* `<main>`: contenido principal único.
* `<section>`: agrupación temática de contenido.
* `<article>`: contenido autónomo (post, noticia,…).
* `<aside>`: contenido complementario (barra lateral, enlaces relacionados).
* `<footer>`: pie de página o de sección.

```html
<body>
  <header>…logo y nav…</header>
  <main>
    <article>…post de blog…</article>
    <aside>…enlaces relacionados…</aside>
  </main>
  <footer>…copyright…</footer>
</body>
```

### 8.2 Agrupar multimedia: `<figure>` + `<figcaption>`

* `<figure>` envuelve imágenes, videos o diagramas.
* `<figcaption>` añade la leyenda o pie de figura.

```html
<figure>
  <img src="paisaje.jpg" alt="Montañas al atardecer">
  <figcaption>Montañas en otoño, fotografía de Juan Pérez.</figcaption>
</figure>
```

### 8.3 Detalles desplegables: `<details>` + `<summary>`

* `<summary>` define el título visible; al hacer click expande el contenido.

```html
<details>
  <summary>¿Cómo funciona?</summary>
  <p>Al hacer clic, este texto se mostrará u ocultará.</p>
</details>
```

### 8.4 Elementos de marcado

* `<mark>` para resaltar texto relevante.
* `<time>` para fechas y horas (con atributo `datetime` para valor semántico).

```html
<p>Próximo evento: <time datetime="2025-06-01">1 de junio de 2025</time></p>
<p><mark>Nota importante:</mark> revisa las condiciones.</p>
```

## 9. Formularios básicos y flujo de interacción

### 9.1 Estructura de un formulario

* `<form>` agrupa controles de usuario.
* `<input>` para texto, email, número, checkbox, etc.
* `<button>` o `<input type="submit">` para enviar.

```html
<form action="/enviar" method="POST">
  <label>
    Nombre:
    <input type="text" name="nombre" required>
  </label>
  <label>
    Email:
    <input type="email" name="email" required>
  </label>
  <button type="submit">Enviar</button>
</form>
```

### 9.2 Atributos esenciales

* `required`: obliga a rellenar el campo.
* `type`: define tipo de datos (`text`, `email`, `number`, `password`, etc.).
* `name`: clave bajo la que se enviará el valor al servidor.

## 10. Buenas prácticas y accesibilidad

1. **Texto alternativo (`alt`) en imágenes**

   * Descriptivo si aporta información; vacío (`alt=""`) si es decorativa.
2. **Estructura semántica**

   * Usa etiquetas adecuadas (`<nav>`, `<main>`, `<header>`, etc.) para facilitar la navegación por lectores de pantalla.
3. **Validación**

   * Pasa tu HTML por el [Validador W3C](https://validator.w3.org/) para corregir errores de marcado.
4. **Contraste y legibilidad**

   * Asegura relación de contraste adecuada y estructura clara de encabezados.

## 11. Organización de proyecto y deploy

1. **Nombres de archivos**

   * Sin espacios ni caracteres especiales; usa kebab-case (`mi-pagina.html`).
2. **Estructura de carpetas**

   ```
   project/
   ├─ index.html
   ├─ css/
   │  └─ style.css
   ├─ js/
   │  └─ app.js
   └─ images/
      └─ logo.png
   ```
3. **Subida a GitHub Pages**

   * Crear repositorio, habilitar GitHub Pages en la rama `main` o carpeta `/docs`.
   * Acceder vía `https://usuario.github.io/repositorio`.

## 12. Ejercicios y entregables

1. **Plantilla base**

   * Crea `plantilla.html` con la estructura mínima y enlaces a `style.css`.
2. **Portafolio semántico**

   * Realiza `portafolio.html` usando secciones, artículos y figuras para tus proyectos.
3. **Entregable 1**

   * Completa un breve cuestionario donde expliques:

     * La función de cada etiqueta semántica.
     * Por qué es importante el `alt`.
     * Cómo validar tu HTML con W3C.

---

## Ejercicios

- [Ejercicios de HTML](./ejercicios/html.md)

---

## Referencias

- [HTML5 Documentación](https://developer.mozilla.org/es/docs/Web/HTML)
- [HTML5 Tutorial](https://developer.mozilla.org/es/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [HTML5 Cheatsheet](https://htmlcheatsheet.com/)
- [W3Schools: HTML](https://www.w3schools.com/html/)
