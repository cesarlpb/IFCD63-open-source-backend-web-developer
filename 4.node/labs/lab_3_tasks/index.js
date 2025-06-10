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
  res.send("get")
})
app.get("/tasks/:id", (req, res) => {
  res.send("get id")
})
app.post("/tasks/", (req, res) => {
  res.send("post")
})
app.put("/tasks/:id", (req, res) => {
  res.send("put id")
})
app.delete("/tasks/:id", (req, res) => {
  res.send("delete id")
})

// Añadimos callback para escribir la ruta base del servidor:
app.listen(PORT, () => {
  console.log(`Hola, desde http://localhost:${PORT}/`);
});