import http from 'http'; // 👉🏼 importación del módulo

// Usamos `createServer()` de http para iniciar el main loop:
const server = http.createServer((req, res) => {
  // Objeto request en req:
  // console.log(req)
  if (req.url === '/' && req.method === "GET") {
    // Texto plano:
    // res.writeHead(200, {'Content-Type':'text/plain'});
    // res.end('Hola desde Node nativo');
    // HTML:
    // res.writeHead(200, {'Content-Type':'text/html'});
    // res.end('<h1>Hola desde Node nativo</h1>');
    // JSON:
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end('{"msg": "Hola desde Node nativo"}');
  } else {
    res.writeHead(404, {'Content-Type':'application/json'}); 
    res.end(`{"error": "No se ha encontrado la ruta o recurso '${req.url}', o el método '${req.method}' no es correcto. Se esperaba GET"}`);
  }
});
server.listen(3000, () => {
  console.log("El servidor está disponible en", "http://localhost:3000/", "🚀")
});