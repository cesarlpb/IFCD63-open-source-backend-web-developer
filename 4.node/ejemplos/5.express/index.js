import express from 'express';

// Instanciamos Express en la variable app:
const app = express();
const PORT = 3000;
// Items
class Item {
  constructor(id, titulo, precio){
    this.id = id;
    this.titulo = titulo;
    this.precio = precio;
  }
}
const items = [
  new Item(1, "Ratón inalámbrico", 19.99),
  new Item(2, "Teclado RGB", 28.97),
  new Item(3, "Ordenador portátil DELL", 290.5)
]

// Middleware para parsear req.body => JSON
app.use(express.json());

// Endpoint para método GET:
app.get('/', (req, res) => {
  res.send({ status: 'ok' })
});

// Métodos HTTP: GET, POST, PUT, DELETE
/**
 * GET -> devuelve una lista de elementos (items)
 */
app.get('/items', (req, res) => {
  res.status(200).send(items);
})

/**
 * GET por id -> devuelve un elemento item de la lista
 */
app.get('/items/:id', (req, res) => {
  const id = req.params.id;
  // TODO: añadir validación para que id sea un número entero
  console.log("id:", id)
  console.log("typeof", typeof id)
  res.end(`items/${id}`)
})

// Añadimos callback para escribir la ruta base del servidor:
app.listen(PORT, () => {
  console.log(`Hola, desde http://localhost:${PORT}/`)
});