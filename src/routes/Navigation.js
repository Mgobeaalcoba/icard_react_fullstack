import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { map } from "lodash";
import routes from "./routes";

export function Navigation() {
  console.log("routes -->", routes); // Devuelve por consola un array con todas las configuraciones de rutas que hemos dado de alta. Este array debemos recorrerlo para renderearlo. Para eso vamos a usar el paquete "lodash".
  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
