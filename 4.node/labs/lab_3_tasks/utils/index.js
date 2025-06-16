/**
 * Utils => funciones auxiliares
 * 
 * Archivo de funcionalidades que usamos en el proyecto
 * 
 *** Parte 2: leer y escribir en un archivo .json ***
 *
 * - Fn readJson(path_to_json) => lee un archivo json y lo devuelve como un objeto
 * - Fn writeJson(path_to_json, data) => escribe un objeto en un archivo json
*/

import fs from "fs";
import path from "path";

/**
 * @param {string} path_to_json 
 * @description Lee un archivo json y lo devuelve como un objeto
 * @example readJson("./tasks.json") => { tasks: [] }
 * @returns {object}
 */
const readJson = (path_to_json) => {
  // 1. Creamos la ruta absoluta del archivo .json
  const __dirname = path.resolve();
  const file_path = path.join(__dirname, path_to_json);
  // 2. Leemos el archivo en un try/catch
  try {
    const file_content = fs.readFileSync(file_path, "utf-8");
    const json_content = JSON.parse(file_content);
    return json_content;
  } catch (error) {
    // 3. Devolvemos el contenido del archivo como un objeto (array u objeto)
    // 4. Si no existe el archivo, devolvemos un objeto vacío
    // 5. Si hay un error hacemos throw (lanzamos la Excepción)
    console.error("🚨 Error al leer el archivo:", error.message);
    return {};
  }
}

/**
 * @param {string} path_to_json 
 * @param {object} data 
 * @description Escribe un objeto en un archivo json
 * @example writeJson("./tasks.json", [Task1, Task2, Task3])
 */
const writeJson = (path_to_json, data) => {
  // 1. Creamos la ruta absoluta del archivo .json
  const __dirname = path.resolve();
  const file_path = path.join(__dirname, path_to_json);
  // 2. Escribimos el archivo en un try/catch
  try {
    fs.writeFileSync(file_path, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error("🚨 Error al escribir el archivo:", error.message);
    return false;
  }
}

export { readJson, writeJson };