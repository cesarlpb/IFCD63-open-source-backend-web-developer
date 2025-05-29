# Pasos para crear proyecto con npm

```bash
  npm init
```

![alt text](image.png)

Rellenamos cada apartado:

![alt text](image-1.png)

- **type**: "module" para usar ESModules (`import`)

Aceptamos la confirmación:

![alt text](image-2.png)

Finalmente, en `scripts` añadimos los comandos `start` y `dev` para probar y podremos ejecutar (son equivalentes):

```bash
  node index.js

  npm run start

  npm run dev
```