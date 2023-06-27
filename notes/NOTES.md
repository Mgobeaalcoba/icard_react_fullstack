# Proyecto: Carta eléctronica para un restaurante

1. Dependencias: Node, Npm(Viene con node), Yarm(Se instala luego de NPM), Python3, Django, Django Rest Framework

---

## Paso a paso para comenzar el frontend de mi proyecto con React

1. Dependencias: Node, Npm y Yarn (se instala con Npm)
2. Con las dependencias instaladas y ubicando en la carpeta padre (la que contiene el frontend y el backend):

```bash
npx create-react-app icard_react_fullstack
```

Este comando ya me habrá armado un .gitignore y un README.md y me habrá inicializado un repositorio local con rama "master". Restaría cambiarle el nombre de la rama a "main" (estandar actual) y agregar el repo remoto mas la LICENSE

3. Para levantar nuestra aplicación hacemos:

```bash
yarn
yarn start
```

El primer comando instalará todas las dependencias necesarios en node_modules para poder llevar adelante un prouyecto react
El segundo comando encenderá el servidor de desarrollo para ir testeando nuestra react app en vivo y directo.

---

## Instalamos semantic UI react

Esta biblioteca nos ofrece los componentes que vamos a estar usando en nuestra app. Es una librería responsive. Es decir, nos sirve tanto para vista desde desktop (empleados del restaurante) como para vista mobile (clientes del restaurante)

1. Comandos a ejecutar para la instalación

```bash
$  yarn add semantic-ui-react semantic-ui-css
## Or NPM
$  npm install semantic-ui-react semantic-ui-css
```

2. Despues de instalarlo debemos importar CSS minificado en nuestra app´s entry file (index.js):

```js
import "semantic-ui-css/semantic.min.css";
```

Todas las dependencias de nuestro proyecto que instalemos van a quedar registradas en nuestro archivo package.json.
Por lo que si luego queremos instalar nuevamente las mismas en otra PC, o si estamos clonando un repositoria react de otro dev debemos hacer:

```bash
npm install
## Or Yarn
yarn install
```

El file index.js de nuestro package "src" nos debería quedar así (Comenté algunas lineas de código que ya no sirven luego de la librería de semantic):

```js
import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css"; Lo quitamos al importar semantic.min.css
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> Lo comentamos al importar semantic.min.css
  <App />
  //</React.StrictMode> Lo comentamos al importar semantic.min.css
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

3. Elimino de "src" el index.css, App.test.js, logo.svg, App.css también lo quitamos por el momento.

4. En App.js borramos todo y usamos el shorcut de la extension "ES7 React...": rfc
5. Con la estructura de "rfc" armada vamos crear el primer "Hola Mundo" en React que debería verse así:

```js
import React from "react";

export default function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
    </div>
  );
}
```

6. Ahora vamos a poner un primer botón de semantic UI en nuestra app así:

```js
import React from "react";
import { Button } from "semantic-ui-react";

export default function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Button primary>Click Me</Button>
    </div>
  );
}
```

y con eso tendremos ademas del "Hola Mundo" un componente Button de semantic UI en nuestro front end que se vería algo así:

<img src="../images/button_semanticUI_component.PNG">

Esto significa que tenemos semantic UI añadido correctamente a nuestro proyecto listo para usarse en nuestra app para restaurantes.

---

## Configurando SASS para poder usar estilos

Está será la última configuración que vamos a hacer para poder sumar estilos a nuestro frontend y luego ya pasaremos a poner manos a la obra en la app.

SASS reemplazará a CSS en nuestro proyecto como proveedor de estilos dado que tiene una potencía mucho mas amplia.

Si creamos un archivo App.scss (tipo SASS) en nuestro proyecto así no mas el mismo no va a compilar. Dado que necesitamos una extensión más para que funcione:

1. Instalamos extensiones necesarios para SASS:

```bash
yarn add sass
```

Esto modificará automáticamente nuestro package.json dado que no es necesario en JS que lo hagomos nosotros como si lo es en python con pip.

2. Creamos estilos SASS (App.scss):

```scss
h1 {
  color: red;
}
```

3. Importamos los estilos en App.js:

```js
import React from "react";
import { Button } from "semantic-ui-react";
import "./App.scss";

export default function App() {
  return (
    <div>
      <h1>Hola Mundo</h1>
      <Button primary>Click Me</Button>
    </div>
  );
}
```

- ¿Que ventajas tiene usar SASS en lugar de CSS?

  1. Posibilidad de anidar estilos:

  ```css
  .app {
    background: green($color: #000000);

    &__title {
      color: red;
    }
  }
  ```

  El "&" en SASS lo que hace es continuar a la clase padre. Es decir que:

  "&" = .app

  ```js
  import React from "react";
  import { Button } from "semantic-ui-react";
  import "./App.scss";

  export default function App() {
    return (
      <div className="app">
        <h1 className="app__title">Hola Mundo</h1>
        <Button primary>Click Me</Button>
      </div>
    );
  }
  ```

Como todo esto lo hicimos para probar SASS entonces quitamos todo lo que agregamos por ahora tal como estaba antes de esta sección.

---
