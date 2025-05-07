# Entregable 1: 07-05

## Parte 1

Responde en pocas líneas, es suficiente una breve explicación. Usa este mismo documento para contestar a las siguientes preguntas:

1. **¿Qué metaetiqueta garantiza que la página se vea bien en dispositivos móviles y qué atributo se usa para ello?**

- La metaetiqueta `<meta name="viewport" content="width=device-width, initial-scale=1.0">` garantiza que la página se vea bien en dispositivos móviles. El atributo `content` se usa para definir el ancho de la ventana de visualización y el nivel de zoom inicial.

2. **Indica qué elemento semántico utilizas para agrupar enlaces de navegación.**

- El elemento semántico `<nav>` se utiliza para agrupar enlaces de navegación.

3. **¿Para qué sirve el atributo `target="_blank"` en los enlaces de los proyectos?**

- El atributo `target="_blank"` se utiliza para abrir el enlace en una nueva pestaña o ventana del navegador, lo que permite al usuario mantener la página original abierta mientras explora el enlace.

4. **Explica brevemente la diferencia entre `<section>` y `<article>` según la plantilla.**

- `<section>` se utiliza para agrupar contenido relacionado dentro de una sección de la página, mientras que `<article>` se utiliza para representar un contenido independiente y autocontenido, como un artículo de blog o una entrada de noticias.

5. **¿Qué etiqueta emplea la plantilla para describir brevemente el sitio en la cabecera y por qué es semántica?**

- La etiqueta `<meta>` se utiliza para describir brevemente el sitio en la cabecera. Es semántica porque proporciona información sobre el contenido de la página, como su descripción, palabras clave y autor, lo que ayuda a los motores de búsqueda y a los navegadores a entender mejor el contenido.

6. **Cita dos formas en las que la plantilla mejora la accesibilidad.**

- La plantilla mejora la accesibilidad al utilizar etiquetas semánticas como `<header>`, `<footer>`, `<nav>` y `<article>`, que ayudan a los lectores de pantalla a comprender la estructura del contenido. Además, el uso de atributos `alt` en las imágenes proporciona descripciones alternativas para los usuarios con discapacidades visuales.

7. **¿Dónde y para qué se usa el atributo `alt`?**

- El atributo `alt` se utiliza en la etiqueta `<img>` para proporcionar una descripción alternativa de la imagen. Se usa para mejorar la accesibilidad, ya que permite a los usuarios con discapacidades visuales entender el contenido de la imagen a través de lectores de pantalla.

8. **¿Qué significa `rel="shortcut icon"` y por qué es útil?**

- `rel="shortcut icon"` se utiliza en la etiqueta `<link>` para especificar el icono que se mostrará en la pestaña del navegador o en los marcadores. Es útil porque ayuda a los usuarios a identificar rápidamente el sitio web entre varias pestañas abiertas y mejora la experiencia de navegación.

9. **Menciona dos lugares donde aparezca contenido de tipo “lista” y qué etiqueta se emplea.**

- En la plantilla, el contenido de tipo "lista" aparece en el pie de página (footer) y en la sección de proyectos destacados. Se emplea la etiqueta `<ul>` (lista desordenada) para agrupar los elementos de la lista.

10. **¿Cómo marcarías un nuevo proyecto como “destacado” utilizando solo HTML semántico?**

- Para marcar un nuevo proyecto como "destacado", se puede utilizar la etiqueta `<article>` con una clase específica, como `<article class="proyecto-destacado">`, para indicar que se trata de un proyecto destacado. Dentro de este artículo, se pueden incluir elementos como el título del proyecto, una breve descripción y enlaces a su código y demo en vivo.

---

## 5 ejercicios prácticos (solo HTML)

Crea un documento `.html` para cada uno de los siguientes ejercicios:

> **Instrucciones**
>
> 1. Copia cada fragmento en un archivo `.html` vacío.
> 2. Reemplaza los `TODO` o completa los huecos indicados.
> 3. Abre el archivo en tu navegador y observa el resultado.

### Resultado del primer ejercicio

link: [ejercicio1.html](https://cdryampi.github.io/proyectos_memes/)

- HTML del ejercicio1.html

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Memes Nihilistas</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body
    class="bg-black text-gray-400 font-mono flex flex-col justify-center items-center min-h-screen p-4"
  >
    <h1 class="text-2xl md:text-3xl text-gray-500 mb-8 text-center">
      Todo es absurdo. Escoge un proyecto.
    </h1>
    <ul class="space-y-3">
      <li>
        <a
          href="proyectos_memes/proyecto_nihilista/"
          class="hover:text-white transition"
          >Proyecto Nihilista</a
        >
      </li>
      <li>
        <a
          href="proyectos_memes/articulo_nihilista/"
          class="hover:text-white transition"
          >Artículo Nihilista</a
        >
      </li>
      <li>
        <a
          href="proyectos_memes/cv_nihilista/"
          class="hover:text-white transition"
          >CV Nihilista</a
        >
      </li>
      <li>
        <a
          href="proyectos_memes/footer_nihilista/"
          class="hover:text-white transition"
          >Footer Nihilista</a
        >
      </li>
      <li>
        <a
          href="proyectos_memes/nihilismo_banner/"
          class="hover:text-white transition"
          >Banner Nihilista</a
        >
      </li>
      <li>
        <a
          href="proyectos_memes/presentacion_nihilista/"
          class="hover:text-white transition"
          >Presentación Nihilista</a
        >
      </li>
      <li>
        <a
          href="proyectos_memes/semantica_nihilista/"
          class="hover:text-white transition"
          >Semántica Nihilista</a
        >
      </li>
      <li>
        <a
          href="proyectos_memes/mi_yo_nihilista/"
          class="hover:text-white transition"
          >Mi yo nihilista</a
        >
      </li>
    </ul>
    <footer class="mt-12 text-sm text-gray-600 text-center">
      Nada importa, pero igual lo hicimos.
    </footer>
  </body>
</html>
```

---

### 1. Hero Banner

> **¿Qué es?**
> El _Hero Banner_ es la sección “heroica” o principal que, en la primera pantalla, resume la propuesta de valor de la página (título impactante + llamada a la acción).

```html
<!-- HERO BANNER -->
<section class="hero">
  <header>
    <h1><!-- TODO: Escribe un título atrayente --></h1>
    <p><!-- TODO: Escribe un subtítulo descriptivo --></p>
  </header>

  <!-- Llamada a la acción -->
  <a href="#contacto">¡Contáctame!</a>
</section>
```

#### Resultado del Hero Banner:

link: [Hero nihilista](https://cdryampi.github.io/proyectos_memes/proyectos_memes/nihilismo_banner/)

---

### 2. Pie de página (Footer) minimalista

```html
<!-- FOOTER -->
<footer>
  <p>
    &copy; 2025
    <!-- TODO: Tu nombre o marca -->
  </p>

  <nav aria-label="Redes sociales">
    <ul>
      <li><a href="https://github.com/usuario" target="_blank">GitHub</a></li>
      <li>
        <a href="https://linkedin.com/in/usuario" target="_blank">LinkedIn</a>
      </li>
      <!-- TODO: Agrega otra red si lo deseas -->
    </ul>
  </nav>
</footer>
```

#### Resultado del Footer minimalista:

link: [Footer nihilista](https://cdryampi.github.io/proyectos_memes/proyectos_memes/footer_nihilista/)

---

### 3. Artículo de blog

```html
<!-- ARTÍCULO DE BLOG -->
<article>
  <header>
    <h2><!-- TODO: Título del artículo --></h2>
    <p>
      <time datetime="2025-05-05">5 may 2025</time> · Autor:
      <!-- TODO: tu nombre -->
    </p>
  </header>

  <p><!-- TODO: Primer párrafo introductorio --></p>
  <p><!-- TODO: Segundo párrafo con más detalles --></p>

  <footer>
    <p>
      Tags: <a href="#html">HTML</a>,
      <a href="#frontend">Frontend</a>
      <!-- TODO: más etiquetas -->
    </p>
  </footer>
</article>
```

#### Resultado del Artículo de blog:

## link: [Artículo nihilista](https://cdryampi.github.io/proyectos_memes/proyectos_memes/articulo_nihilista/)

### 4. Tarjeta de proyecto destacada

**Nota:** puedes cambiar los enlaces a algunos propios.

```html
<!-- PROYECTO DESTACADO -->
<article class="proyecto-destacado">
  <h3><!-- TODO: Nombre del proyecto --></h3>
  <p><!-- TODO: Descripción breve --></p>
  <a href="https://github.com/usuario/proyecto" target="_blank">Ver código</a>
  <a href="https://demo.com/proyecto" target="_blank">Demo en vivo</a>
</article>
```

#### Resultado del Proyecto destacado:

link: [Proyecto nihilista](https://cdryampi.github.io/proyectos_memes/proyectos_memes/proyecto_nihilista/)
gitgub: [Proyecto nihilista](https://github.com/cdryampi/proyectos_memes/tree/main/proyectos_memes/proyecto_nihilista)

---

### 5. Sección “Sobre mí” enriquecida

```html
<!-- SOBRE MÍ -->
<section id="sobre-mi">
  <header>
    <h2>Sobre mí</h2>
  </header>

  <figure>
    <img src="perfil.jpg" alt="Foto de <!-- TODO: Tu nombre -->" width="160" />
    <figcaption><!-- TODO: Pie de foto opcional --></figcaption>
  </figure>

  <p><!-- TODO: Breve bio (3-4 líneas) --></p>

  <blockquote>
    “<!-- TODO: Tu cita favorita relacionada con la programación -->”
  </blockquote>
</section>
```

#### Resultado de la sección “Sobre mí” enriquecida:

## link: [Sobre mí nihilista](https://cdryampi.github.io/proyectos_memes/proyectos_memes/mi_yo_nihilista/)

### Siguiente paso

Antes de entregar:

0. Revisa que el nombre de los documentos no tenga espacios ni caracteres especiales.
1. **Valida tu HTML** en [validator.w3.org](https://validator.w3.org/) para asegurarte de que no haya errores.
2. Visualiza en navegador los documentos para comprobar que son correctos.
3. Envía el formulario de entrega con los contenidos.

¡Happy Coding!

## Nota:

- Los proyectos estan en la carpeta de `proyectos_memes` en la rama `main` del repositorio [github](https://github.com/cdryampi/proyectos_memes/tree/main).
- El backend para el proyecto de `proyecto_nihilista` esta apagado porque necesita un tunel para que funcione el frontend correctamente. Si se quiere ver el proyecto funcionando, me avisas para encender el backend y que funcione el frontend.
- cv_nihilista: [cv_nihilista](https://cdryampi.github.io/proyectos_memes/proyectos_memes/cv_nihilista/)
