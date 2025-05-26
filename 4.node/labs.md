## 🛠️ Lab Entregable — API CRUD con Node.js, Express, Sequelize y SQLite

| Tema        | Módulos                                                          | Habilidades clave                                                                                              |
|-------------|------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **JS BE**   | Express <br> Sequelize <br> SQLite                               | ✔ Setup de proyecto y ORM <br> ✔ Definición de modelos y relaciones <br> ✔ Endpoints CRUD <br> ✔ Control de permisos básicos |

### 1 · Objetivo

Construir una **API REST** para un blog con **Usuarios**, **Posts** y **Categorías**, usando **Express** y **Sequelize** sobre **SQLite**, con endpoints CRUD y control de autoría (cada usuario sólo puede editar/borrar sus propios posts/categorías).

---

### 2 · Ejercicios

#### Ejercicio 1: Setup del proyecto  
- Inicia `npm init` y añade scripts `"start": "node app.js"` y `"dev": "nodemon app.js"`.  
- Instala dependencias:  
  ```bash
  npm i express sequelize sqlite3 body-parser dotenv
  npm i -D nodemon
  ````

* Crea estructura de carpetas:

  ```
  /lab-api-blog
  ├─ app.js
  ├─ config/
  │   └─ database.js
  ├─ models/
  ├─ routes/
  ├─ controllers/
  └─ .env
  ```
* En `config/database.js`, configura Sequelize para SQLite y llama a `sequelize.sync()` al arrancar.
* En `app.js`, monta `body-parser.json()`, importa rutas y prueba que `GET /` responda `{ status: 'ok' }`.

#### Ejercicio 2: Modelo **User**

* En `models/User.js`, define Sequelize model con campos:

  ```js
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: Sequelize.STRING, unique: true, allowNull: false },
  email:    { type: Sequelize.STRING, unique: true, allowNull: false },
  password: { type: Sequelize.STRING, allowNull: false }
  ```
* En `routes/users.js` y `controllers/userController.js`, implementa endpoints:

  * `POST   /users` → crear usuario
  * `GET    /users` → listar todos
  * `GET    /users/:id` → detalle
  * `PATCH  /users/:id` → actualizar
  * `DELETE /users/:id` → borrar
* Prueba con Postman.

#### Ejercicio 3: Modelo **Category**

* En `models/Category.js`, define:

  ```js
  id:   { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING, unique: true, allowNull: false }
  ```
* Monta rutas y controladores CRUD similares a `/categories`.
* Añade validación de `name` no vacío.

#### Ejercicio 4: Modelo **Post** y asociaciones

* En `models/Post.js`, define:

  ```js
  id:      { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  title:   { type: Sequelize.STRING, allowNull: false },
  content: { type: Sequelize.TEXT,   allowNull: false }
  ```
* Configura asociaciones:

  ```js
  Post.belongsTo(User, { foreignKey: 'userId' });
  Post.belongsToMany(Category, { through: 'PostCategories' });
  Category.belongsToMany(Post, { through: 'PostCategories' });
  ```
* Implementa en `/posts` endpoints:

  * `POST   /posts` → recibe `{ title, content, userId, categoryIds[] }`
  * `GET    /posts` → lista con `include: [User, Category]`
  * `GET    /posts/:id` → detalle con relaciones
  * `PATCH  /posts/:id` → sólo si `req.body.userId === post.userId`
  * `DELETE /posts/:id` → sólo si el usuario coincide

#### Ejercicio 5: Pruebas de integración

* Usa Postman (o un script) para:

  1. **Crear un usuario** → anota su `id`.
  2. **Crear dos categorías**.
  3. **Crear un post** con ese `userId` y las `categoryIds`.
  4. **Actualizar** el título del post (mismo `userId`).
  5. **Intentar borrar** el post con otro `userId` → debe fallar (403/401).
  6. **Borrar** el post con el `userId` correcto → éxito.

---

### 3 · Entrega

* Carpeta `/lab-api-blog/` con:

  * `package.json` y `node_modules/` excluidos (solo `package-lock.json`).
  * `app.js`
  * `/config/database.js`
  * `/models/*.js`
  * `/routes/*.js`
  * `/controllers/*.js`
  * `.env.example` con variables necesarias.
* `README.md` con:

  * Instrucciones de instalación (`npm install`, `npm run dev`).
  * Ejemplos de peticiones a cada endpoint.
  * Notas sobre control de autoría.
* Exportación de colección Postman con las 6 pruebas de integración.

---

### Criterios de evaluación comunes

| Peso | Criterio                                                                                   |
| ---- | ------------------------------------------------------------------------------------------ |
| 40 % | **Correctitud técnica** (endpoints CRUD, asociaciones y validaciones según el enunciado)   |
| 30 % | **Arquitectura y organización** (separación clara de `models`, `routes`, `controllers`)    |
| 20 % | **Control de permisos** (sólo el usuario creador puede editar/borrar sus posts/categorías) |
| 10 % | **Documentación y pruebas** (README claro + colección Postman completa y funcional)        |

Happy coding!
