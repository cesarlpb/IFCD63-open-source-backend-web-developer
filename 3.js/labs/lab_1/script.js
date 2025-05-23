// Script de Lab 1: Página de Tareas con persistencia en localStorage

// * Añadir nuevas tareas al hacer submit. => necesitamos un evento que capture 
// el envío del formulario, es decir, el submit

/* Variables globales */

// Elemento DOM formulario:
const form = document.querySelector("#todo-form");
// Elemento DOM input en el formulario:
const input = form.querySelector("input");
// Elemento DOM lista desordenada para las tareas:
const ul = document.querySelector("#todo-list");

/* Listeners */

form.addEventListener("submit", (e) => {
  e.preventDefault(); // 👉🏼 necesario para evitar la recarga de la página
  // Hacemos console.log del contenido del input:
  console.log("El contenido del input es:", input.value); // ✅
  crearTarea(input.value);
  limpiarForm();
});

function crearTarea(tarea){

  let taskId = 0; // id de la tarea que se va a agregar

  const noTasksEl = ul.querySelector("#no-tasks");
  if(noTasksEl){
    noTasksEl.remove();
  } 
  
  // Usamos la cantidad de elementos <li> en el <ul> para
  // calcular un id que empieza en 1:
  taskId = ul.querySelectorAll("li").length + 1;

  // creamos los ids que podammos necesitar:
  const taskElId = `tarea-${taskId}`;
  const checkboxElId = `checkbox-${taskId}`;
  const deleteBtnElId = `delete-btn-${taskId}`;

  // Usamos el string que recibimos como parámetro para crear un <li> que 
  // añadimos en el <ul>
  
  ul.innerHTML += `
  <li id=${taskElId}>
  <input id=${checkboxElId} class="checkbox" type="checkbox">
  <span>${tarea}</span>
  <button id=${deleteBtnElId} class="delete-btn">&#x2715;</button>
  </li>
  `; 

  // Añadimos los eventos para dar funcionalidad al checkbox y 
  // al botón de borrar:

  const checkbox = ul.querySelector(`#${checkboxElId}`);
  const deleteBtn = ul.querySelector(`#${deleteBtnElId}`);
  
  checkbox.addEventListener("change", (e) => {
    console.log("Estado del checkbox", e.target.id, ":", e.target.checked)
    // Boolean => nombramos la variable como una pregunta de SI / NO
    // Si la respuesta es sí: true
    // Si es no: false
    const isChecked = e.target.checked;
    const span = ul.querySelector(`#${taskElId} span`);
    if(isChecked) {
      span.style.textDecoration = "line-through"; // tachado
      span.style.color = "gray";
    } else {
      span.style.textDecoration = "none"; // sin tachado
      span.style.color = "black";
    }

  });

  deleteBtn.addEventListener("click", (e) => {
    console.log("Has clicado el boton", e.target.id)
  });
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