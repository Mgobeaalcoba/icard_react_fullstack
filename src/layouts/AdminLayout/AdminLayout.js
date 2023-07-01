import React from "react";
import "./AdminLayout.scss";

export function AdminLayout(props) {
  // props contendrá el contenido de nuestro layout. Esto viene del backend.
  const { children } = props;
  return (
    <div>
      <p>AdminLayout</p>

      {children}
    </div>
  );
}
