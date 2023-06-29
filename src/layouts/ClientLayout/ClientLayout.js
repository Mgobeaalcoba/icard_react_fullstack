import React from "react";
import "./ClientLayout.scss";

export function ClientLayout(props) {
  // props contendrá el contenido de nuestro layout. Esto viene del backend.
  const { children } = props;
  return (
    <div>
      <p>ClientLayout</p>

      {children}
    </div>
  );
}
