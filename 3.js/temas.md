# Temario JavaScript para Web / Front-End

## Parte I — Introducción a JavaScript y Fundamentos ES6

### 1. Introducción a JavaScript

JavaScript es un lenguaje de programación **interpretado**, de **tipado dinámico** 
y multiparadigma (imperativo, funcional y orientado a objetos). Nació en 1995 
para dar interactividad al navegador y hoy se usa tanto en **front-end** como en
 **back-end** (Node.js, Deno, Bun, ...), móviles, IoT, etc.

### 2. Variables: `let`, `const` y `var`

- **`var`**  
  - Funcionan con **hoisting**: su declaración se eleva al inicio de la función o del script.  
  - Ámbito de **función** (no de bloque).  
  - Puede redeclararse y reasignarse.
- **`let`**  
  - Bloquea la variable en el **scope de bloque** (`{ … }`).  
  - No permite redeclaración en el mismo scope.  
  - Sufre la **Temporal Dead Zone** hasta su inicialización.
- **`const`**  
  - Igual que `let`, pero **constante**: debe inicializarse al declararse y no puede reasignarse.  
  - Ojo: si referencia un objeto o array, sus propiedades o elementos **sí** pueden mutar.

```js
function ejemplo() {
  console.log(a); // undefined  (hoisting de var)
  // console.log(b); // ReferenceError (TDZ)
  var a = 1;
  let b = 2;
  const c = 3;
  b = 20;
  // c = 30; // TypeError
}
```

> [!TIP]
> ❌ No debe usarse `var` en ES6, usa `let` o `const` en su lugar.

### 3. Hoisting y `scope`

- **Hoisting**: declaraciones de `var` y funciones **se elevan** al inicio de su
 contexto (función o global).
- **Scope global**: variables declaradas fuera de cualquier función.
- **Scope de función**: variables creadas con `var` o funciones dentro de una
 función.
- **Scope de bloque**: variables `let`/`const` dentro de `{ … }`.

```js
{
  var x = 1;
  let y = 2;
}
console.log(x); // 1
// console.log(y); // ReferenceError
```

### 4. Declaración vs Expresión de Funciones

- **Declaración** (`function foo() { … }`): se hoistea completamente, puede llamarse antes de su aparición en el código.
- **Expresión** (`const foo = function() { … }`): se comporta como variable `const`/`let`, no hay hoisting de la asignación.

```js
console.log(decl()); // “hola”
function decl() { return 'hola'; }

console.log(expr()); // TypeError: expr is not a function
const expr = function() { return 'hola'; };
```

### 5. Arrow Functions

Sintaxis compacta, **no** tienen su propio `this`, `arguments`, ni `new.target`.

```js
// Declaración clásica
const sq1 = function(n) { return n * n; };

// Arrow function
const sq2 = n => n * n;

// Múltiples parámetros y cuerpo de bloque
const sum = (a, b = 0) => {
  const res = a + b;
  return res;
};
```

### 6. Parámetros Default, Rest & Spread

- **Default**: valor si no se pasa argumento.
- **Rest** (`...args`): agrupa restos en un array.
- **Spread** (`...arr`): expande iterables en elementos individuales.

```js
function greet(name = 'Invitado') {
  console.log(`¡Hola, ${name}!`);
}

function total(...nums) {
  return nums.reduce((acc, n) => acc + n, 0);
}

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1,2,3,4,5]
```

### 7. Destructuring de Objetos y Arrays

Extrae valores en variables de forma clara.

```js
// Array
const colores = ['rojo', 'verde', 'azul'];
const [primero, segundo] = colores; // primero='rojo', segundo='verde'

// Objeto
const usuario = { nombre: 'Ana', edad: 25, país: 'ES' };
const { nombre, país: locale } = usuario; // nombre='Ana', locale='ES'

// Valores por defecto y anidado
const data = { id: 1, info: { email: null } };
const { info: { email = 'n/a' } } = data; // email='n/a'
```

### ⚡ Retos rápidos (10–15 min cada uno)

1. **Swap**: intercambia dos variables `a` y `b` usando destructuring.
2. **Media**: función `average(...nums)` que calcule la media de N números.
3. **Saludo**: arrow function con parámetro default que devuelva `"¡Hola, X!"`.
4. **Config**: dado el objeto `{ debug: true, verbose: false }`, usa destructuring para extraer `debug` y `verbose`.
5. **Spread**: combina dos arrays de frutas en uno solo usando spread.

```js
// Ejemplo array1 = ['manzana','pera'], array2 = ['uvas','kiwi'] → resultado: ['manzana',…,'kiwi']
```

---

## Parte II — DOM API, Eventos y Manipulación

### 1. Selección de nodos
- **`document.querySelector(selector)`**  
  Devuelve el primer elemento que coincida con el selector CSS.
  ```js
  const btn = document.querySelector('.btn-primary');
  ```

- `document.querySelectorAll(selector)`
  Devuelve un NodeList de todos los elementos que coinciden.

  ```js
  const items = document.querySelectorAll('ul li');
  ```
- `getElementById(id)`**, **`getElementsByClassName(cls)`, `getElementsByTagName(tag)` 
  Métodos “clásicos” que devuelven HTMLCollection o elemento único.

  ```js
  const header = document.getElementById('main-header');
  const cards = document.getElementsByClassName('card');
  ```

### 2. Manipulación de contenido, atributos, clases y estilos

Javascript permite manipular el contenido, atributos, clases y estilos de un 
elemento HTML.

- **Contenido**

  * `element.textContent` → texto plano.
  * `element.innerHTML` → HTML interno.

  ```js
  title.textContent = 'Nuevo título';
  container.innerHTML = '<p>Hola <strong>Mundo</strong></p>';
  ```

- **Atributos**

  * `element.getAttribute(name)` / `element.setAttribute(name, value)`
  * Propiedades directas (`img.src`, `link.href`).

  ```js
  img.setAttribute('alt', 'Descripción');
  console.log(link.href);
  ```

- **Clases** (`classList`)

  * `add()`, `remove()`, `toggle()`, `contains()`.

  ```js
  box.classList.add('active');
  box.classList.toggle('hidden');
  ```

- **Estilos en línea**

  * `element.style.propiedad = valor`
  * Convierte nombres kebab-case a camelCase.

  ```js
  card.style.backgroundColor = '#f5f5f5';
  card.style.setProperty('margin-top', '1rem')`
  ```

### 3. Eventos

Un `evento` es un mensaje que el navegador envía a un objeto (como un botón o un 
campo de texto) cuando ocurre algo. Por ejemplo, cuando el usuario hace clic en 
un botón, el navegador envía un evento a ese botón.

* **`addEventListener(event, handler, options)`**

  * `options`: `{ capture: true/false, once: true, passive: true }`.
  * Permite múltiples escuchas sin sobrescribir.

  ```js
  btn.addEventListener('click', e => {
    e.preventDefault();
    console.log('Clickeado');
  });
  ```

* **`removeEventListener(event, handler)`**

  * Elimina el listener registrado.

* **Propagación**

  * **Burbuja** (por defecto): el evento sube del target al `document`.
  * **Captura**: se puede interceptar antes de llegar al target (`capture: true`).

* **Delegación de eventos**
  Asigna un listener a un contenedor padre y filtra por `e.target`.

  ```js
  list.addEventListener('click', e => {
    if (e.target.matches('li')) {
      console.log('Ítem seleccionado:', e.target.textContent);
    }
  });
  ```

### 4. Formularios

Los formularios son una forma de enviar datos a un servidor. En JavaScript, 
podemos interactuar con ellos usando eventos y manipulación de DOM.

- **Validación personalizada**

  * Usar atributos HTML (`required`, `min`, `pattern`) y/o API de Validity:

    ```js
    if (!input.checkValidity()) {
      alert(input.validationMessage);
    }
    ```

- **`preventDefault()`**
  Evita el envío o recarga por defecto.

  ```js
  form.addEventListener('submit', e => {
    e.preventDefault();
    // procesar datos
  });
  ```

- **Lectura y gestión de valores**

  * `input.value`, `select.value`, `checkbox.checked`.

  ```js
  const data = {
    name: form.elements.name.value,
    agree: form.elements.terms.checked
  };
  ```
> [!NOTE]
>
> Se recomienda validar los datos antes de enviarlos al servidor.
> La validación de datos de lado cliente no debe ser la única forma de validar
> datos, pero es una buena práctica. En lado cliente, nos centramos en darle 
> feedback al usuario y ayudarle a corregir los errores posibles del envío.

### 🛠️ Lab: To-Do List 100 % con vanilla JS

- `Vanilla JS` := JavaScript sin librerías adicionales.

1. **Estructura HTML**

   ```html
   <form id="todo-form">
     <input type="text" name="task" placeholder="Nueva tarea…" required>
     <button>Agregar</button>
   </form>
   <ul id="todo-list"></ul>
   ```
2. **Funcionalidades**

   * Añadir nuevas tareas al hacer submit.
   * Marcar tareas completadas al hacer click (toggle de clase).
   * Eliminar tareas con un botón “×” dentro de cada `<li>`.
   * Guardar y recuperar la lista en `localStorage`.
3. **Puntos clave**

   * Uso de `preventDefault()`.
   * Delegación de eventos en `<ul>`.
   * Manipulación de DOM y `classList`.
   * Persistencia con `localStorage`.

## Parte III — Asincronía y Módulos ES6

Los módulos son una forma de organizar código en JavaScript.

### 1. Fetch API

El API de `fetch` permite realizar peticiones HTTP desde JavaScript.

- **GET**  
  ```js
  fetch('https://api.example.com/items')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
  ```

- **POST**

  ```js
  fetch('https://api.example.com/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer TOKEN_AQUI'
    },
    body: JSON.stringify({ name: 'Nuevo ítem', price: 9.99 })
  })
    .then(res => res.json())
    .then(data => console.log('Creado:', data))
    .catch(err => console.error(err));
  ```
- **Manejo de JSON**

  * `JSON.stringify(obj)` → convierte objeto a cadena JSON.
  * `response.json()` → parsea texto a objeto JS.

### 2. Promesas y async/await

- **Creación de promesas**

  ```js
  const espera = ms =>
    new Promise(resolve => setTimeout(resolve, ms));

  espera(1000).then(() => console.log('1 segundo ha pasado'));
  ```
- **Encadenamiento** (`then` / `catch` / `finally`)

  ```js
  fetch('/data')
    .then(res => res.json())
    .then(items => /* procesar ítems */)
    .catch(err => /* manejar error */)
    .finally(() => console.log('¡Operación finalizada!'));
  ```
- **`async` / `await`**

  ```js
  async function cargaDatos() {
    try {
      const res = await fetch('/data');
      const items = await res.json();
      console.log(items);
    } catch (err) {
      console.error('Error cargando datos:', err);
    }
  }

  cargaDatos();
  ```

### 3. Módulos ES6

- **`export` vs `export default`**

  ```js
  // utils.js
  export function suma(a, b) { return a + b; }
  export const PI = 3.14;

  export default function saluda() {
    console.log('¡Hola desde utils!');
  }
  ```

- **`import` y alias**

  ```js
  import saluda, { suma, PI as constantePI } from './utils.js';

  saluda();
  console.log(suma(2,3), constantePI);
  ```

- **Organización por módulos**

  * Cada componente o conjunto de funciones en su propio archivo.
  * Usa un punto de entrada (p. ej. `main.js`) que importe tus módulos y arranque la app.
  * Configura bundler (Vite, Webpack) para servir `type="module"` y resolver rutas.

### 🚀 Mini-proyecto: Consumir API pública y pintar cards con CSS Modules

1. **Estructura**

   ```bash
   src/
   ├─ components/
   │  └─ Card.js
   ├─ styles/
   │  └─ Card.module.css
   └─ main.js
   ```

2. **Flujo**

   * En `main.js` importa tu función `fetchItems()` y el componente `Card`.
   * Obtén datos de la API con `await fetch(...)`.
   * Por cada elemento, crea una instancia de `Card`, pasando props (imagen, título, precio).
   * Inserta las cards en el DOM dentro de un contenedor `<div id="app">`.

3. **CSS Modules**

   - Importa estilos en JS:

     ```js
     import styles from './Card.module.css';
     ```
   - En tu componente, aplica clases:

     ```js
     cardEl.className = styles.card;
     ```
   - Esto evita colisiones y permite scope local por componente.

---

- [Ejercicios de Javascript](./ejercicios/frontend.md)
- [Proyectos de Javascript](./ejercicios/proyectos-frontend.md)

## Referencias

- [MDN Web Docs: JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

---

# Temario Javascript para Back-End con Node.js

## Parte IV — Fundamentos de Node.js  

- **4.1** ¿Qué es Node.js? V8, Event Loop y arquitectura no bloqueante  
- **4.2** Gestor de paquetes **npm / yarn**  
  - `package.json`, versiones semánticas, scripts  
- **4.3** Módulos CommonJS vs ES Modules  
  - `require` / `module.exports` y `import` / `export`  
- **4.4** API de sistema de archivos (fs)  
  - Lectura/escritura síncrona y asíncrona  
- **4.5** Eventos y EventEmitter  
- **4.6** Trabajo con streams (lectura y escritura de datos en chunks)  
- ⚡ **Lab**: script CLI que lee un JSON, lo modifica y lo reescribe  

## Parte V — Servidores HTTP y Express.js  

- **5.1** Módulo nativo `http`  
  - Crear servidor, rutas básicas, cabeceras y códigos de estado  
- **5.2** Introducción a **Express**  
  - Instalación y estructura de un proyecto  
- **5.3** Rutas y verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`)  
- **5.4** Middleware  
  - Uso de `app.use()`, orden, middleware de terceros (morgan, body-parser)  
- **5.5** Gestión de errores (error-handling middleware)  
- **5.6** Servir archivos estáticos  
- 🛠️ **Lab**: API REST mínima de “tareas” en memoria con Express  

## Parte VI — Persistencia de datos  

- **6.1** Conexión a bases de datos  
  - **MongoDB** con **Mongoose**: esquemas, modelos, validaciones  
  - **PostgreSQL** con **Sequelize** / **Knex**: definiciones, migraciones  
- **6.2** CRUD completo conectado a BD  
- **6.3** Consultas avanzadas: filtros, paginación, población (populate)  
- **6.4** Gestión de transacciones (en SQL)  
- **6.5** Variables de entorno con **dotenv**  
- ⚡ **Lab**: extender la API de “tareas” para que persista en MongoDB  

## Parte VII — Seguridad, Testing y Despliegue  

- **7.1** Autenticación y autorización  
  - **JWT**, **bcrypt** para hashing de contraseñas  
  - Middlewares de protección de rutas  
- **7.2** Buenas prácticas de seguridad  
  - **Helmet**, **CORS**, validación de inputs (Joi / express-validator)  
- **7.3** Testing de API  
  - **Jest** + **Supertest**: tests de rutas y casos de error  
- **7.4** Contenerización ligera con **Docker** (Dockerfile básico)  
- **7.5** Despliegue en **Heroku** / **Vercel** / **Render**  
- 🚀 **Mini-proyecto**: API completa de “usuarios” con registro/login, roles y tests  

- [Ejercicios de Javascript](./ejercicios/backend.md)
- [Proyectos de Javascript](./ejercicios/proyectos-backend.md)