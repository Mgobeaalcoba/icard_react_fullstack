// Gestionamos las rutas de la interface del cliente del restaurante.

import { ClientLayout } from "../layouts";
import { Home } from "../pages";

const routesClient = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
];

export default routesClient;
