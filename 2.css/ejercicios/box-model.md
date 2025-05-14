## Ejercicios de Box Model

### 1️⃣ Centrado con `margin:auto`

```html
<div class="login-box">
  <h2>Sign In</h2>
</div>
```

**Objetivo**

1. Fija la caja a `width:320px; height:180px;`.
2. Centra horizontalmente en la página (sin usar flex/grid).
3. Añade un borde gris de 2 px.

*Tip*: `margin-left/right:auto;` hace el trabajo si el elemento es **block**.

---

### 2️⃣ Avatar redondo con relleno

```html
<img class="avatar" src="avatar.jpg" alt="perfil">
```

**Objetivo**

1. Haz que el avatar mida `80px × 80px`.
2. Aplica `padding:4px` con fondo blanco para crear un “marco” interno.
3. Añade un borde exterior `2px solid #4b9ed6;` y convierte la imagen en círculo.

*Tip*: Usa `box-sizing:border-box` para que las medidas sigan siendo 80×80 pese al padding/borde.

---

### 3️⃣ Tres columnas que no se rompan

```html
<section class="columns">
  <article>Uno</article>
  <article>Dos</article>
  <article>Tres</article>
</section>
```

**Objetivo**

1. Haz que cada `<article>` flote (o use `inline-block`) y ocupe exactamente 1/3 del ancho, sin pasarse de línea.
2. Cada columna debe llevar `padding:1rem;` y un borde de 1 px.
3. **Pista extra**: sin `box-sizing:border-box` la suma de paddings + borders > 100 %; arréglalo globalmente.

*Tip*: `*{box-sizing:border-box}` + `width:33.333%` para cada artículo.

---

### 4️⃣ Resaltar foco sin mover layout

```html
<button class="cta">Comprar ahora</button>
```

**Objetivo**

1. Estilo base: `padding:0.6rem 1.2rem; border:none;`.
2. Cuando el botón tenga `:focus-visible`, dibuja un contorno azul de 3 px que **no** refluya los elementos vecinos.
3. Separa el contorno 2 px del borde del botón.

*Tip*: `outline` + `outline-offset:2px;` (no uses `border` aquí).

---

### 5️⃣ Margen colapsado vs. padding

```html
<article class="post">
  <h2>Título</h2>
  <p>Contenido del post...</p>
</article>
```

**Objetivo**

1. Añade `margin-top:2rem` al `<h2>` y observa cómo el post se separa del artículo exterior (colapso).
2. Rompe el colapso aplicando `padding-top:1px` al `.post` (sin que sea visible).
3. Da a `.post` un borde gris `1px solid #ddd;` y `padding:1.5rem;` para un look de tarjeta.

*Tip*: cualquier padding > 0 del elemento contenedor evita que su margen colapse con el del hijo.

---

> ⌚ **Auto-chequeo rápido**: cada solución cabe en 3-5 líneas. Si “desborda” o se desplaza el layout, revisa `box-sizing` y recuerda la regla de colapso de márgenes.
