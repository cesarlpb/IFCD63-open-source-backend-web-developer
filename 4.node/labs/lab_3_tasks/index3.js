import express from "express";

// Instanciamos Express en la variable app:
const app = express();
const PORT = 3000;

// Middleware para parsear req.body => JSON
app.use(express.json());

const ENDPOINTS = [
  {
    "method": "GET",
    "route": "tasks/",
    "description": "Devuelve la lista de tareas"
  },
  {
    "method": "GET",
    "route": "tasks/:id",
    "description": "Devuelve una tarea por id"
  },
  {
    "method": "POST",
    "route": "tasks/",
    "description": "Recibe un objeto tasks para guardarlo"
  },
  {
    "method": "PUT",
    "route": "tasks/:id",
    "description": "Recibe un objeto tasks para editarlo y guardar los cambios"
  },
  {
    "method": "DELETE",
    "route": "tasks/:id",
    "description": "Borra una entrada task por id"
  }
]

class Task {
  constructor(id, title, description, userId){
    this.id = id,
    this.title = title,
    this.description = description
    this.createdAt = new Date().toISOString()
    this.updatedBy = userId
  }
}

// Creamos unas pocas tareas para el CRUD:
const tasks = [
  new Task(1, "Aprender JS", "Estudiar CRUD en Node", 1),
  new Task(2, "Enviar entregable", "Ejercicios de backend", 1), 
  new Task(3, "Probar Codex", "En OpenAI", 1)
]

// Endpoint de bienvenida al servidor:
app.get("/", (req, res) => {
  // map devuelve array que pasamos a string:
  let lisFormateados = `${ENDPOINTS.map(({ method, route, description }) => {
        return `
        <li>
          <strong>${method}:</strong>
          <a href="${route}" target="_blank">${route}</a>
          <p style="margin: 0.25em 0;">${description}</p>
        </li>`
    })}`;
  res.send(`
    <h1>Endpoints de tasks:</h1>
    <ul>
      ${lisFormateados.replaceAll(",", "")}
    </ul>
    `);
});

app.get("/tasks/", (req, res) => {
  try{
    if(tasks){ res.status(200).send(tasks); }
  } catch(e){
    console.error("Error:", e)
    res.status(500).send({"error": "No se han encontrado las tareas"})
  }
  
  
})
app.get("/tasks/:id", (req, res) => {
  const id = req.params.id;
  if(Number(id) == Number.parseInt(id) && Number(id) > 0){
    const task = tasks.find(item => item.id == Number.parseInt(id));
    if(task){ 
      return res.status(200).send(task);
    }
    return res.status(404).send({error: `Task with id ${id} not found`});
  }
  return res.status(400).send({"error": `El id ${id} no es un valor correcto. Se esperaba entero`});
})
app.post("/tasks/", (req, res) => {
  const { id, title, description, userId} = req.body;
  const newTask = new Task(id, title, description, userId);
  let isAdded = tasks.push(newTask) > 0;
  if(isAdded){ return res.status(201).send(newTask) }
  return res.status(500).send({"error": "No se ha podido guardar el elemento"})
})
app.put("/tasks/:id", (req, res) => {
  const taskId = req.params.id;
  const { title, description, userId} = req.body;
  let task = tasks.filter(item => item.id == taskId);
  if(task.length == 0){
    return res.status(404).send({"error": "El id solicitado no existe"})
  }
  task = task[0]; // Solo cuando ya se ha validado si hay length > 0 en arr
  if(title.length > 0){
    task.title = title;
  }
  if(description.length > 0){
    task.description = description;
  }
  if(Number(userId) > 0 && 
    Number.parseInt(userId) == Number(userId) && 
    Number.isNaN(Number(userId))) {
    task.userId = userId;
  }
  return res.status(200).send(task)
  //return res.status(500).send({"error": "No se ha podido guardar el elemento"})
})
app.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  const taskIndex = tasks.findIndex(item => item.id == id)
  // console.log(taskIndex, typeof taskIndex)
  if(taskIndex > -1){
    tasks.splice(taskIndex, 1);
    return res.status(204).send()
  }
  return res.status(404).send({"error": `No se ha encontrado el id ${id}`})
})

// Añadimos callback para escribir la ruta base del servidor:
app.listen(PORT, () => {
  console.log(`Hola, desde http://localhost:${PORT}/`);
});

/* TODO: 
* Parte 2: Usamos un .json para guardar las tareas:
  - Refactor inicial
  - Fn => escribir y leer desde .json => módulo fs
    - GETs => leer
    - POST, PUT, DELETE => escribir + leer
* Parte 3: Conectamos a un db SQLite
  - Fn que conecta a la db
  - Fn que crea la tabla necesaria => Tasks
  - En cada endpoint podemos colocar el query necesario
* Parte 4: ORM Sequelize => SQLite
  - Configurar el Sequelize
  - Modelo Task
  - Migración => crea tabla en la db
  - Usar las funcionalides de Sequelize en cada endpoint
*/
