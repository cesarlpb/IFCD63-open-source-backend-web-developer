# IFCD63: Open source backend web developer
Repositorio De la formación IFCD63: Open Source Backend Web Developer

# 🚀 Introducción al Desarrollo Web Back End

¡Bienvenido al curso de Open Source Back End Web Developer! Esta guía te ayudará a empezar con tu entorno de desarrollo y a comprender los fundamentos necesarios para tus primeros pasos como desarrollador/a.

---

## 1️⃣ Entender el rol de un desarrollador Backend

Un/a **desarrollador/a backend** es responsable de:
- La lógica del servidor y la base de datos de una aplicación web.
- Crear APIs que conectan el frontend con la base de datos.
- Asegurar la seguridad, escalabilidad y rendimiento de la aplicación.

Tecnologías típicas:
- Lenguajes: Python, PHP, Java, Node.js
- Bases de datos: MySQL, MongoDB, PostgreSQL
- Herramientas: Git, Docker, GitHub, servidores web como Apache o Nginx

---

## 2️⃣ Instalar entorno de desarrollo

### 🔧 Visual Studio Code
- Página oficial: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Descargar e instalar.

#### Extensiones recomendadas:
- Live Server
- GitLens
- Prettier (formateador de código)
- GitHub Copilot (opcional)

### 🔧 Git
- Página oficial: [https://git-scm.com/](https://git-scm.com/)
- Descargar e instalar.
- En Windows, usa **Git Bash** (se instala junto con Git).

> 💡 **Usuarios Mac:** Git viene preinstalado. Si no está, puedes instalarlo con `brew install git` (requiere Homebrew).

Comprobaciones de Git:

1. Instalamos Git (pasos anteriores)
2. Comprobamos git en terminal con `git --version`
3. Configuramos user y el email con:
```bash
  git config --global user.name "Tu Nombre"
  git config --global user.email "tuemail@ejemplo.com" # cambiar por email de Github
```
4. Colocar VS Code como editor por defecto con `git config --global core.editor "code"`
Comprobamos que es correcto con: `git config core.editor`

> code

---

## 3️⃣ Crear cuenta en GitHub

1. Ve a [https://github.com/](https://github.com/)
2. Crea una cuenta gratuita.
3. Confirma tu email.
4. Personaliza tu perfil con nombre, avatar y bio si quieres.

> 💡 Recomendación: Usa un correo profesional (no de la escuela si es temporal).

---

## 4️⃣ Aprender control de versiones básico

Abre tu terminal (Git Bash en Windows):

```bash
# Configura tu nombre y correo
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@ejemplo.com"
```

Comandos básicos:

Comando	Descripción
```bash
git --version	Muestra la versión de git
git clone URL	Clona un repositorio desde GitHub
# --------------------------------------------- 
git init	Inicializa un repositorio local
git status	Muestra los cambios actuales
git add .	Añade todos los archivos al staging
git commit -m "Mensaje"	Guarda los cambios en el repositorio local
git remote add origin URL	Conecta tu repo local con GitHub
git push -u origin main	Sube tu código a GitHub

```

--- 

5️⃣ Conocer estructura básica de una página web
```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Mi primera página</title>
</head>
<body>
  <h1>¡Hola, mundo!</h1>
  <p>Esta es mi primera página web.</p>
  <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo">
  <p><a href="https://github.com/tuusuario">Mi perfil de GitHub</a></p>
</body>
</html>
```
Guarda este archivo como index.html y ábrelo en tu navegador para verlo.

6️⃣ Crear y subir una primera página a GitHub
Paso a paso:

# 1. Crea una carpeta para tu proyecto
```
mkdir mi-web
cd mi-web
```

# 2. Crea tu archivo HTML
```
touch index.html  # o créalo con tu editor
```
# 3. Inicializa Git
```
git init
```

# 4. Añade el archivo
```
git add index.html
git commit -m "Primera versión de mi web"
```

# 5. Crea un repositorio en GitHub (desde la web)

# 6. Conéctalo con tu repo local
```
git remote add origin https://github.com/tuusuario/mi-web.git
```

# 7. Sube tu web
```
git push -u origin main
```

- Opcional: Publicar en GitHub Pages
  - Ve a la configuración del repo en GitHub.
  - Busca la sección Pages.
  - Selecciona la rama main y carpeta raíz (/).

¡Tu web estará publicada en https://tuusuario.github.io/mi-web/!
