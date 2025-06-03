import express from 'express';

// Instanciamos Express en la variable app:
const app = express();
const PORT = 3000;

// Middleware para parsear req.body => JSON
app.use(express.json());

// Endpoint para método GET:
app.get('/', (req, res) => {
  res.send({ status: 'ok' })
});

// Añadimos callback para escribir la ruta base del servidor:
app.listen(PORT, () => {
  console.log(`Hola, desde http://localhost:${PORT}/`)
});