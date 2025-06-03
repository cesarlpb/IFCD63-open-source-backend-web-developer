import express from "express";

// Instanciamos Express en la variable app:
const app = express();
const PORT = 3000;
// Items
class Item {
  constructor(id, titulo, precio) {
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
  }
}
const items = [
  new Item(1, "Ratón inalámbrico", 19.99),
  new Item(2, "Teclado RGB", 28.97),
  new Item(3, "Ordenador portátil DELL", 290.5),
];

// Middleware para parsear req.body => JSON
app.use(express.json());

// Endpoint para método GET:
app.get("/", (req, res) => {
  res.send({ status: "ok" });
});

// Métodos HTTP: GET, POST, PUT, DELETE
/**
 * GET -> devuelve una lista de elementos (items)
 */
app.get("/items", (req, res) => {
  res.status(200).send(items);
});

/**
 * GET por id -> devuelve un elemento item de la lista
 */
app.get("/items/:id", (req, res) => {
  const id = req.params.id;
  const esNumeroEntero = Number(id) == Number.parseInt(id);
  // Negative programming o Defense clauses => if
  // Descartar primero lo que sabemos que NO nos vale
  if (!esNumeroEntero) {
    res.status(400).send({
      error: `El id ${id} debe ser número entero. Se recibió ${typeof id}`,
    });
  }
  let item = {};
  for (let i = 0; i < items.length; i++) {
    if (Number.parseInt(id) == items[i].id) {
      item = items[i];
      break; // paramos el for si encontramos el elemento
    }
  }
  // TODO: colocar condición para devolver 404 (No encontrado) cuando item sea {}
  // en este punto
  res.status(200).send(item);
});

/**
 * POST -> añade un elemento nuevo a la lista
 */
app.post("/items", (req, res) => {
  // Hacer un items.push() de los datos recibidos
  console.log(req.body);
  // TODO: añadir el item recibido a items
  res.json(req.body);
});

/**
 * PUT -> editar campos de un item ya existente
 */
app.put("/items/:id", (req, res) => {
  // TODO:
  // Encontramos el elemento en items
  // Modificamos los campos que se indican editados
  const id = req.params.id;
  const esNumeroEntero = Number(id) == Number.parseInt(id);
  if (!esNumeroEntero) {
    res.status(400).send({
      error: `El id ${id} debe ser número entero. Se recibió ${typeof id}`,
    });
  }
  console.log(req.body);
  res.json(req.body);
});

/**
 * DELETE -> borrar un item de items
 */
app.delete("/items/:id", (req, res) => {
  // TODO:
  // Encontramos el elemento en items
  // Borramos el elemento de items
  const id = req.params.id;
  const esNumeroEntero = Number(id) == Number.parseInt(id);
  if (!esNumeroEntero) {
    res
      .status(400)
      .send({
        error: `El id ${id} debe ser número entero. Se recibió ${typeof id}`,
      });
  }
  res.json(id);
});

// Añadimos callback para escribir la ruta base del servidor:
app.listen(PORT, () => {
  console.log(`Hola, desde http://localhost:${PORT}/`);
});
