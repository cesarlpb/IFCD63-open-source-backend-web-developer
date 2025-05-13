## Ejercicios de Selectores

### 1️⃣ Enlaces externos con icono ↗

```html
<p>
  Visita <a href="https://developer.mozilla.org">MDN</a> o nuestra
  <a href="/guia-interna">guía interna</a>.
</p>
```

**Objetivo**

1. Pinta de azul los enlaces cuyo `href` comience por `http`.
2. Añade un pseudo-elemento `::after` que muestre “↗” en negrita.

*Tip*: Usa `[href^="http"]` y la combinación `color` + `content`.

---

### 2️⃣ Zebra striping en una tabla

```html
<table>
  <tr><th>#</th><th>Nombre</th></tr>
  <tr><td>1</td><td>Ada</td></tr>
  <tr><td>2</td><td>Brendan</td></tr>
  <tr><td>3</td><td>Linus</td></tr>
</table>
```

**Objetivo**
Alterna el fondo (`background:#f5f5f5`) solo en las filas de datos **pares**.

*Tip*: selector `tr:nth-child(even)`.

---

### 3️⃣ Inputs obligatorios con borde rojo

```html
<form>
  <input type="text" placeholder="Nombre" required>
  <input type="email" placeholder="Email" required>
  <input type="text" placeholder="Empresa">
</form>
```

**Objetivo**
Marca cualquier `<input>` que esté `:invalid` con `border:2px solid crimson;`.

*Tip*: combina `input:invalid` (pseudo-clase de estado) y hereda el resto.

---

### 4️⃣ Primera tarjeta destacada

```html
<ul class="cards">
  <li><article>Destacado</article></li>
  <li><article>Normal 1</article></li>
  <li><article>Normal 2</article></li>
</ul>
```

**Objetivo**
Haz que **solo** el `<article>` dentro del primer `<li>` tenga `font-size:1.4rem;` y `font-weight:600;`.

*Tip*: `ul.cards > li:first-child > article { … }`.

---

### 5️⃣ FAQ tipo acordeón (solo CSS)

```html
<section class="faq">
  <h3>¿Qué es CSS?</h3>
  <input type="checkbox" id="q1">
  <p class="answer">CSS describe la presentación...</p>
</section>
```

**Objetivo**
Oculta `.answer` por defecto y muéstrala (`display:block`) cuando el `<input>` hermano esté `:checked`.

*Tip*: selector hermano adyacente `input:checked + .answer`.

---

> ⌚ **Cómo evaluarte**: cada regla debería ser 1-3 líneas. Si tardas más de 5-10 min, revisa la jerarquía de especificidad o repasa la tabla de pseudo-clases.
