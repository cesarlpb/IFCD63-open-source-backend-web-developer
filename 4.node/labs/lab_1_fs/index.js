import fs from "fs";

// 1. Creamos un archivo en blanco, TXT:

const filepath = "./archivo_en_blanco.txt";
const file = fs.openSync(filepath, "w"); // 👉🏼 sobreescribe el contenido del archivo
console.log("Se ha creado el archivo en", filepath);

// 2. Escribimos los primeros números con un bucle for en un archivo:
const filepath2 = "./numeros.txt";

let numerosString = "";
for (let i = 0; i <= 10; i++) {
  numerosString += `${i}\n`;
}
// fs.writeSync( fd, string, position, encoding )
const file2 = fs.openSync(filepath2, "w");
fs.writeSync(file2, numerosString, 0, "utf-8");
console.log("Se han guardado los números en", filepath2);

// 3. Hacemos un log.txt: `Hora actual: hh:mm, evento, error`

const logFilePath = "./log.txt";
const logFile = fs.openSync(logFilePath, "a"); // 👉🏼 a de append => agrega al final del archivo
let lines = "";
for (let i = 0; i < 5; i++) {
  const currentTime = new Date().toLocaleString(); // dd/mm/aaaa, hh:mm:ss
  lines += `${i}, ${currentTime}, esto es un evento, error: {}\n`;
}
fs.writeSync(logFile, lines, null, "utf-8");
console.log("Se ha creado el log en", logFilePath);

// 4. Creamos un archivos JSON y guardamos un user:

// Este es el objeto que vamos a pasar al archivo:
const user = {
  id: 1,
  name: "Pepe",
  email: "pepe@frog.com",
  ciudad: "Barcelona",
};

const userFilePath = "./user.json";
const userFile = fs.openSync(userFilePath, "w");

// ⚠ Hay que cambiar el objeto user a string para poder guardarlo bien
// y que no salga el [object Object] por defecto de JS:
const userString = JSON.stringify(user, null, 2);
fs.writeSync(userFile, userString, null, "utf-8");
console.log("Se ha guardado el user en", userFilePath);

// 5. Extendemos lo anterior a una lista de usuarios:
const users = [
  {
    id: 1,
    name: "Pepe",
    email: "pepe@frog.com",
    ciudad: "Barcelona",
  },
  {
    id: 2,
    name: "Ana",
    email: "ana@gmail.com",
    ciudad: "Tarragona",
  },
  {
    id: 3,
    name: "Mario",
    email: "mario@outlook.com",
    ciudad: "Lleida",
  },
];

const usersFilePath = "./users.json";
const usersFile = fs.openSync(usersFilePath, "w");
const usersString = JSON.stringify(users, null, 2);
fs.writeSync(usersFile, usersString, null, "utf-8");
console.log("Se ha guardado el user en", usersFilePath);

// Comprobación de que users.json es correcto:
// 👉🏼 comprobamos que el JSON sea válido

const usersFileString = fs.readFileSync(usersFilePath, 'utf-8'); // 'string'
const json = JSON.parse(usersFileString);
console.log("El JSON es de tipo:", typeof json); // 'object'
console.log("El array tiene estos elementos:", json.length); // 3
