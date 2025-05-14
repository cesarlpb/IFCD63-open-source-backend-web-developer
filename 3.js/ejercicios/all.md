# Ejercicios de JavaScript

## 1. Variables

1. Declara tres variables con `var`, `let` y `const`; prueba redeclarar y reasignar cada una.  

2. Usa `console.log` para mostrar el valor de una `var` antes de declararla y el error de TDZ de una `let`.  

3. Crea una `const` que apunte a un objeto, intenta reasignarla y luego modifica una de sus propiedades.  

## 2. Hoisting & Scope  

4. Dentro de un bloque `{ … }` declara `var x = 1; let y = 2;` y comprueba con `console.log` cuáles existen fuera.  

5. Escribe una función que declare `var z = 3;` internamente y prueba acceder a `z` desde fuera de la función.  

## 3. Declaración vs Expresión de Funciones  

6. Transforma esta declaración en expresión:  
  
  ```js
   function saluda() { return 'Hola'; }
  ```
  ¿Qué cambia en el hoisting?

## 4. Arrow Functions

7. Reescribe la función clásica

   ```js
   function duplica(n) { return n * 2; }
   ```

   como arrow function.

## 5. Default, Rest & Spread

8. Implementa `function greet(name = 'Invitado')` que imprima `"¡Hola, X!"`.

9. Crea `function total(...nums)` que calcule la suma de todos sus argumentos.

10. Junta dos arrays de frutas usando el operador spread para crear uno nuevo.

## 6. Destructuring

11. Dado `const arr = [10,20,30,40];`, extrae en variables `primero` y `resto` (array).

12. Dado `const user = {n:'Ana', e:25};`, extrae `n` como `nombre` y `e` con alias `edad`.

13. Con `const data = {info:{email:null}};`, extrae `email` con valor por defecto `"n/a"`.

## 7. Selección en el DOM

14. Usa `document.querySelector` para cambiar el texto de un `<h1>`.

15. Con `querySelectorAll` selecciona varios `<p>` y aplica `style.color = 'blue'`.

16. Obtén un elemento por `getElementById` y añade la clase `activo`.

## 8. Manipulación del DOM

17. Crea un `<p>` en JavaScript y añádelo al final de `<body>` con `appendChild`.

18. Selecciona un elemento y cambia su atributo `data-test` usando `setAttribute`.

## 9. Eventos y Delegación

19. Añade un listener `click` a un botón que muestre un `alert('clic')`.

20. Registra un listener con `{ capture: true }` y observa el orden de ejecución.

21. En un `<ul>` con varios `<li>`, usa delegación para manejar clicks en los ítems.

## 10. Formularios

22. Crea un `<form>` simple, intercepta `submit` con `preventDefault()` y muestra los valores en consola.

## 11. Promesas

23. Define `const espera = ms => new Promise(r => setTimeout(r, ms));` y encadena `espera(1000).then().catch().finally()`.

## 12. Async/Await + Fetch

24. Escribe un `async function load()` que haga `await fetch('https://jsonplaceholder.typicode.com/posts')` y muestre el JSON en consola.

## 13. Módulos ES6

25. Crea `utils.js` exportando `export function suma(a,b){return a+b}`, luego en `main.js` importa y usa `suma(2,3)`.

