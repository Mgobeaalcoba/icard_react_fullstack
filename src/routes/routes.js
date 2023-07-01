// Archivo que va a gestionar las rutas
// routes.admin.js y routes.client.js se van a combinar acá

import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";

// const routes = [routerAdmin, routerClient] // Devuelve un cada import un array de objetos que se guarda dentro de un nuevo array. El resultado es algo así como: [[{}],[{}]].

const routes = [...routerAdmin, ...routerClient]; // Con los tres puntos adelante le estoy pidiendo solamente el contenido de mis arrays. Y no el array completo. Por lo que el resultado se verá como [{},{}] que es lo que buscabamos

export default routes;
