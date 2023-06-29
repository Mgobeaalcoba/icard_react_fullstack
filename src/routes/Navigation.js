import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h2>Navigation...</h2>} />
      </Routes>
    </BrowserRouter>
  );
}
