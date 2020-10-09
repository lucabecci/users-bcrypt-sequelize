# Primer etapa.

- Creamos el proyecto.
- Instalamos dependencias.
- Armamos la estructura del proyecto.
- Configuramos husky con prettier, commitlint, eslint.
- Configuramos express como app.
- Creamos los scripts de desarrollo y producción.
- Inicializamos el servidor.

Dependencias: 

```jsx
"devDependencies": {
    "@commitlint/cli": "^11.0.0",
    "@commitlint/config-conventional": "^11.0.0",
    "dotenv": "^8.2.0",
    "eslint": "^7.10.0",
    "husky": "^4.3.0",
    "nodemon": "^2.0.4",
    "prettier": "2.1.2",
    "sequelize-cli": "^6.2.0"
  },
  "dependencies": {
    "bcrypt": "^5.0.0",
    "express": "^4.17.1",
    "morgan": "^1.10.0",
    "pg": "^8.4.1",
    "pg-hstore": "^2.3.3",
    "sequelize": "^6.3.5"
  }
```

Estructura del proyecto:

```jsx
|--node_modules
|--src
	|--controllers
	|--database
	|--models
	|--routes
	|--app.js
	|--index.js
|--.env
|--.eslintignore
|--.eslintrc.js
|--.gitignore
|--ETAPAS.md
|--commitlint.config.js
|--.prettierrc
|--package-lock.json
|--package.json
|--README.md

```

Configuramos husky con commitlint, prettier y eslint:

```jsx
//Configuracion de commitlint.config.js
module.exports = { extends: ["@commitlint/config-conventional"] };

//Configuracion de .eslintrc.js
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
    }
};

//Configuracion de husky con commitlint, prettier y eslint en package.json
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
      "pre-commit": "npx prettier --write src/* && npx eslint --fix src/*"
    }
  }
```

Configuramos express como app con los middlewares necesarios:

```jsx
//EN APP.JS:

const express = require("express");
const morgan = require("morgan");
//initializations
const app = express();
//importing routes

//middlewares
app.use(morgan("dev"));
app.use(express.json());
//routes

module.exports = app;
```

Creamos los scripts de desarrollo y producción:

```jsx
//EN PACKAGE.JSON: 
"scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js"
  }
```

Configuramos index para después inicializar el servidor: 

```jsx
//EN INDEX.JS

const app = require("./app");
require("dotenv").config();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000;

async function main() {
  await app.listen(PORT);
  console.log("Server on port:", PORT);
}

main();
```