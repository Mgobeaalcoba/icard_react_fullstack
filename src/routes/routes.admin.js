// Gestionamos las rutas de la interface del admin del restaurante

import { AdminLayout } from "../layouts";
import { LoginAdmin } from "../pages";

const routesAdmin = [
  {
    path: "/admin",
    layout: AdminLayout,
    component: LoginAdmin,
  },
];

export default routesAdmin;
