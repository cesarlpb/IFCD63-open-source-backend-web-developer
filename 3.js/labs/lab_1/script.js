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

// Llamamos a la función para actualizar el ul con datos
// del localStorage: 
cargarListaTareas();

/* Funciones */
function crearTarea(tarea, cargaInicial = false) {
  let taskId = 0; // id de la tarea que se va a agregar

  const noTasksEl = ul.querySelector("#no-tasks");
  if (noTasksEl) {
    noTasksEl.remove();
  }

  // Usamos la cantidad de elementos <li> en el <ul> para
  // calcular un id que empieza en 1:
  taskId = ul.querySelectorAll("li").length + 1;

  // Realiza toda la lógica necesaria para añadir el <li>
  // en el <ul> de las tareas:
  // - crear los elementos del DOM con sus contenidos
  // - Anida los elementos del DOM
  // - Añade el li nuevo al ul
  // - Añade los event listeners al checkbox y al button:
  const actualizarUl = guardarTarea(tarea); // => actualiza el localStorage
  if(actualizarUl || cargaInicial){
    crearLi(taskId, tarea); // => añade la tarea en el ul
  }
}

function limpiarForm() {
  input.value = "";
}

function crearLi(taskId, tarea) {
  // Creamos los ids que podammos necesitar:
  const taskElId = `tarea-${taskId}`;
  const checkboxElId = `checkbox-${taskId}`;
  const deleteBtnElId = `delete-btn-${taskId}`;

  // Usamos document.createElement() para crear los objetos
  // del DOM porque usando string los event listeners no se
  // añadían bien:
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

  // * Marcar tareas completadas al hacer click (toggle de clase). => Necesitamos
  // un checkbox en cada tarea para marcarla como completada con un click => al
  // completar se va a tachar la línea => al desmarcar el checkbox se quitara el
  // tachado

  // <li style="text-decoration:none;"><input type="checkbox" name="" id=""> Tarea</li>

  // * Eliminar tareas con un botón “×” dentro de cada `<li>`.

  // <li style="text-decoration:none;"><input type="checkbox" name="" id=""> Tarea
  // button x
  // </li>

  // Usamos el evento change para capturar cuando el checkbox se marca
  // y se desmarca => en e.target.checked tenemos el valor true/false
  // según esté marcado o desmarcado este input:
  checkbox.addEventListener("change", (e) => {
    console.log("Estado del checkbox", e.target.id, ":", e.target.checked);
    // Boolean => nombramos la variable como una pregunta de SI / NO
    // Si la respuesta es sí: true
    // Si es no: false
    const isChecked = e.target.checked;
    const span = ul.querySelector(`#${taskElId} span`);
    if (isChecked) {
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

// * Guardar y recuperar la lista en `localStorage`.
function cargarListaTareas() {
  // Lee la lista de tareas desde localStorage

  // Leemos localStorage => item "tareas"
  const tareasString = localStorage.getItem("tareas"); // string de tareas
  // Si recibo null en tareasString => paramos la ejecución de la función
  if(tareasString == null){ 
    console.log("Aún no hay tareas")
    return ; 
  }
  const tareasArray = JSON.parse(tareasString); // array de tareas
  // Hacemos un bucle para colocar las tareas en el ul
  for (let i = 0; i < tareasArray.length; i++) {
    const tarea = tareasArray[i];
    crearTarea(tarea, true);
  }
}

function guardarTarea(tarea) {
  // Leemos el localStorage para añadir a la lista actual si es que hay
  // tareas guardadas
  const tareasString = localStorage.getItem("tareas");
  // en este punto, tareasString es un string:
  console.log(tareasString, typeof tareasString);
  // Pero, para usar .push() de array necesitamos pasar el string
  // a array, asi que realizamos un
  // casting (conversión) de string a objeto (array):
  let tareasArray = JSON.parse(tareasString);
  console.log(tareasArray, typeof tareasArray); // este dato es 'object' Array => array
  if(tareasArray == null){
    tareasArray = []
  }
  // Añadimos la tarea al array actual => usamos el método push de array
  const actualizarUl = !tareasArray.includes(tarea); // true si está, false si no está
  if(actualizarUl){
    tareasArray.push(tarea); // la tarea se añade al array
    console.log("Se ha añadido la tarea", tarea, "en:", tareasArray);
  } else {
    console.log("La tarea", tarea, "ya estaba en el array:", tareasArray)
  }
  
  // Guardamos la lista actualizada en el localStorage
  const tareasActualizadasString = JSON.stringify(tareasArray);
  localStorage.setItem("tareas", tareasActualizadasString);

  return actualizarUl;
}
