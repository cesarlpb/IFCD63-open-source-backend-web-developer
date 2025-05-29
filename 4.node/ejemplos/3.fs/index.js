// Importamos el módulo para manipular archivos en Node:
import fs from 'fs'; // ES Modules
// Leemos el archivo data.txt y escribimos el contenido en consola:
const data = fs.readFileSync('./data.txt', 'utf8');
console.log("Contenido inicial de data.txt:")
console.log(data);
console.log();

// Escribimos contenido en el archivo añadiendo al final con 
// la opción de append (a)
// con la opcion w o sin el flag a se sobreescribe todo el contenido
fs.writeFileSync('./data.txt', "\nNueva línea", { flag: 'a' });
const data2 = fs.readFileSync('./data.txt', 'utf8');
console.log("Contenido editado en data.txt:");
console.log(data2);