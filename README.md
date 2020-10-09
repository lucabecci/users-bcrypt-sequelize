# API usuarios.

*API para usuarios donde los mismos podrán crear, editar, borrar y listar sus tareas. Solamente sera el backend, el frontend se pensara a futuro.*

---

## 1. Comenzando

Para obtener el proyecto debemos:

```jsx
git clone https://github.com/lucabecci/users-bcrypt-sequelize 
//copiamos el directorio
```

## 2. Pre-requisitos

Que necesitamos para un buen funcionamiento del directorio:

- node.JS > 10.x
- npm > 6.x

## 3. Instalación

Para tener un entorno de desarrollo de este proyecto tenemos que: 

```jsx
cd user-bcrypt-sequelize //entramos al directorio
npm install //instalamos las dependencias del proyecto
npm run dev //podemos correrlo con el script dev(se ejecuta con nodemon)
//o
npm start //podemos correrlo con el script start(se ejecuta con node)
```

## 4. Construido con:

Herramientas que utilice para crear esta API:

Produccion:

- [PostgreSQL](https://www.postgresql.org/) - Como base de datos relacional.
- [Express](https://expressjs.com) - Infraestructura de aplicaciones web Node.js.
- [Morgan](https://www.npmjs.com/package/morgan) - Es un middleware para registrador de solicitudes HTTP para node.js.
- [Pg](https://www.npmjs.com/package/pg) - Cliente PostgreSQL sin bloqueo para Node.js.
- [Sequelize](https://sequelize.org/) - Sequelize es un ORM de Node.js basado en promesas.
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Biblioteca para el hash de contraseñas.

Desarrollo: 

- [Nodemon](https://www.npmjs.com/package/nodemon) - Herramienta para actualizar la aplicación al recibir el cambio.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Dotenv es un módulo de dependencia  que carga variables de entorno desde un .envarchivo a process.env.
- [Husky](https://www.npmjs.com/package/husky) - Husky es una herramienta que puede prevenir el mal git commit, git push y más. También podemos utilizarla para realizar varias ejecuciones de scripts antes de hacer un commit o un push.
- [CommitLint](https://commitlint.js.org/#/) - Herramienta para utilizar una convención de commits, nuestro caso es Conventional Comits.
- [Prettier](https://prettier.io/) - Es una herramienta que sirve como  formateador de código.
- [Eslint](https://eslint.org/) - Herramienta que nos ayuda a encontrar errores de codigo(ejemplo: variables sin usar y mas).

## 5. Versionado

Para el versionado se utilizo [ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0/)

## 6. Autor

***Luca Becci -** trabajo y documentación.*

- [github](https://github.com/lucabecci)
- [twitter](https://twitter.com/lucabecci)