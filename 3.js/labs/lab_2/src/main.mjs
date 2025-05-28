import Card, { fetchItems } from "./components/Card.mjs";

// Pedimos los datos al API y lo guardamos en una variable
// Proceso asíncrono: tarda entre 50ms y 300ms
const t0 = performance.now();
const jokes = await fetchItems();
const t1 = performance.now();
console.log(`El fetch ha tardado ${t1 - t0} ms.`);

// Proceso síncrono: tarda entre 0 y 0.1 ms
const t2 = performance.now();
console.log(jokes);
const t3 = performance.now();
console.log(`El console.log ha tardado ${t3 - t2} ms.`);

// Si tenemos datos (array.length > 0) hacemos el bucle:
if(jokes.length > 0){
  for(let i = 0; i < jokes.length; i++) {
    if(i == 0){ document.querySelector("#app").textContent = "" }
    const item = jokes[i];
    Card(item);
  }
}