import "./styles/main.scss";
// const start = require("./js/start");

import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then((registration) => {
//         console.log("Service Worker зареєстрований з успіхом:", registration);
//       })
//       .catch((error) => {
//         console.log("Помилка реєстрації Service Worker:", error);
//       });
//   });
// }

root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
