// Script de Lab 1: Página de Tareas con persistencia en localStorage

// * Añadir nuevas tareas al hacer submit. => necesitamos un evento que capture 
// el envío del formulario, es decir, el submit

const form = document.querySelector("#todo-form");
const input = form.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 👉🏼 necesario para evitar la recarga de la página
  // Hacemos console.log del contenido del input:
  console.log("El contenido del input es:", input.value); // ✅
  crearTarea(input.value);
  limpiarForm();
});

function crearTarea(tarea){
  // Usamos el string que recibimos como parámetro para crear un <li> que 
  // añadimos en el <ul>
  const ul = document.querySelector("#todo-list");
  ul.innerHTML = `
  <li>${tarea}</li>
  `; 
// TODO: añadir el checkbox en el li y añadir el button con x para borrar tarea
}

function limpiarForm(){
  input.value = "";
}

// * Marcar tareas completadas al hacer click (toggle de clase). => Necesitamos 
// un checkbox en cada tarea para marcarla como completada con un click => al 
// completar se va a tachar la línea => al desmarcar el checkbox se quitara el 
// tachado

// <li style="text-decoration:none;"><input type="checkbox" name="" id=""> Tarea</li>

// * Eliminar tareas con un botón “×” dentro de cada `<li>`.

// <li style="text-decoration:none;"><input type="checkbox" name="" id=""> Tarea 
// button x
// </li>

// * Guardar y recuperar la lista en `localStorage`.

function cargarLista(){
  // Lee la lista de tareas desde localStorage
}
function actualizarTareas(){
  // Hace un bucle para añadir todas las tareas del localStorage como <li>
}