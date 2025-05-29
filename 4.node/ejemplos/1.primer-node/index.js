/**
 * Para ejecutar este programa con Node usa:
 * node index.js
 */
// Escribimos en la consola del sistema:
console.log("Hola desde Node");

// Bucle:
for(let i = 0; i < 5; i++) {
  console.log("Iteración:", i);
}

// Función:
function sumar(a, b) {
  return a + b;
}
let suma = sumar(1, 2)
console.log("1 + 2 = ", suma)

// fetch:
console.log("fetch:")
fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
.then(res => res.json())
.then(data => console.log(data));