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

  const li = document.createElement("li");
  li.id = taskElId;

  // Usando el API de elementos del DOM creamos un checkbox idéntico
  // a: <input id=${checkboxElId} class="checkbox" type="checkbox">
  // de la siguiente forma:
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = checkboxElId;
  checkbox.className = "checkbox";

  // Creamos un elemento del DOM span con el texto de forma equivalente
  // a: <span>${tarea}</span>
  // de la siguiente forma:
  const span = document.createElement("span");
  span.textContent = tarea;

  // Creamos el button que equivale a:
  // <button id=${deleteBtnElId} class="delete-btn">&#x2715;</button>
  // de la siguiente forma:
  const button = document.createElement("button");
  button.id = deleteBtnElId;
  button.className = "delete-btn";
  button.innerHTML = "&#x2715;";

  // Finalmente, colocamos los elementos en el orden correcto:
  /**
   * <li> 
   *  <input...> <span> texto </span> <button> x </button>
   * </li>
   */
  // Primero colocamos el contenido del li:
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(button);
  // Añadimos el li con todo su contenido al ul:
  ul.appendChild(li);

  // Añadimos los eventos para dar funcionalidad al checkbox y 
  // al botón de borrar:
  
  // Usamos el evento change para capturar cuando el checkbox se marca
  // y se desmarca => en e.target.checked tenemos el valor true/false
  // según esté marcado o desmarcado este input:
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

  // Usamos el evento de click en el deleteBtn para capturar 
  // los clicks en estos botones:
  button.addEventListener("click", (e) => {
    console.log("Has clicado el boton", e.target.id);
    const li = ul.querySelector(`#${taskElId}`);
    // TODO: usamos window.confirm(...) para pedir confirmación antes de borrar
    li.remove();
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

// TODO: agregamos la carga y el guardado de las tareas en localStorage

function cargarLista(){
  // Lee la lista de tareas desde localStorage
}
function actualizarTareas(){
  // Hace un bucle para añadir todas las tareas del localStorage como <li>
}