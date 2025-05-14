# Ejercicios de Modelo de Visualización

### Ejercicio 1: Block vs Inline

1. Crea un HTML con varios `<div>` y `<span>` anidados.
2. A cada `<div>` dale un fondo y padding, y observa cómo siempre ocupan toda la línea.
3. Con los `<span>` aplica también fondo y padding: verifica que sólo ocupen el ancho de su contenido y no rompen línea.

<details>
<summary>Objetivo</summary>
Visualizar la diferencia entre cajas de nivel bloque e inline.
</details>

---

### Ejercicio 2: Inline-Block para combinar lo mejor de ambos

1. Crea tres `<div class="item">Item 1</div>`…
2. Define `.item { display: inline-block; width: 100px; height: 100px; margin: 0 10px; background: lightcoral; }`.
3. Ajusta el `vertical-align` para alinear sus líneas de base y prueba valores como `middle`, `top`, `bottom`.

<details>
<summary>Objetivo</summary>
Entender cómo inline-block permite ancho/alto pero sin romper línea.
</details>

---

### Ejercicio 3: Float y Clear

1. Inserta una imagen `<img src="…" class="fl">` seguida de varios párrafos de texto.
2. Define `.fl { float: left; margin: 0 1rem 1rem 0; }`. Observa cómo el texto fluye a su alrededor.
3. Tras los párrafos, añade `<div class="clear"></div>` y en CSS `.clear { clear: both; }` para “romper” el flujo de floats.

<details>
<summary>Objetivo</summary>
Practicar el flujo clásico de floats y cómo clear detiene ese flujo.
</details>

---

### Ejercicio 4: Block Formatting Context (BFC) con Overflow

1. Crea un contenedor `<div class="bfc">…floats…</div>` que agrupe varios floats.
2. Dale `.bfc { overflow: auto; }` y comprueba que ahora el contenedor colapsa correctamente sus floats (altura contenida).

<details>
<summary>Objetivo</summary>
Mostrar cómo overflow distinto de visible genera un BFC que “contiene” floats y colapsos de margen.
</details>

---

### Ejercicio 5: Margin Collapsing

1. Pon dos `<div class="box">…</div>` consecutivos, cada uno con `margin-top: 20px; margin-bottom: 20px; background: lightblue;`.
2. Observa que el espacio entre ellos no suma 40px sino 20px (colapso).
3. Inserta un padding o un borde en uno de ellos y vuelve a medir: ¿cambia?

<details>
<summary>Objetivo</summary>
Entender el colapso de márgenes verticales entre bloques adyacentes.
</details>

---

### Ejercicio 6: Visibility vs Display

1. Crea un botón que al hacer clic alterne entre `.hidden { visibility: hidden; }` y `.none { display: none; }`.
2. Observa: con `visibility: hidden` el hueco permanece; con `display: none` todo el elemento desaparece y el flujo se reordena.

<details>
<summary>Objetivo</summary>
Diferenciar ocultar manteniendo espacio vs retirar del flujo.
</details>

---

### Ejercicio 7: Contextos de Apilamiento (z-index)

1. Superpone tres cajas absolutas en distintas posiciones top/left, dándoles distintos `z-index`.
2. Juega con valores positivos, negativos, elinea algunos en `position: static` (sin z-index) y otros en `relative`.
3. Observa cómo sólo los posicionados participan y en qué orden se apilan.

<details>
<summary>Objetivo</summary>
Practicar stacking contexts y la relación entre position<>static y z-index.
</details>

---

### Ejercicio 8: Positioning y Flux vs Out-of-Flow

1. Crea tres cajas en línea. Dale a la segunda `position: relative; top: 20px;`.
2. A la tercera, `position: absolute; top: 0; right: 0;` dentro de un contenedor `position: relative`.
3. Añade finalmente un `<header>` con `position: fixed; top: 0; width: 100%;` y contenido largo debajo para hacer scroll.

<details>
<summary>Objetivo</summary>
Ver la diferencia entre posicionamiento estático, relativo (desplazamiento manteniendo espacio) y absoluto/fijo (fuera del flujo).
</details>
