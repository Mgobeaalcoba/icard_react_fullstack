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
