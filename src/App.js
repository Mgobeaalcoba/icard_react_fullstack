import React from "react";
// import { Button } from "semantic-ui-react";
import { Navigation } from "./routes";

// importo mi ClientLayout para envolver mi app con el mismo
import { ClientLayout } from "./layouts";

export default function App() {
  return (
    <ClientLayout className="app">
      <h1 className="app__title">Hola Mundo</h1>
      <Navigation />
    </ClientLayout>
  );
}
