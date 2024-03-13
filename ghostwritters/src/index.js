import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ConvContext from "./context/ConvContext.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConvContext>
      <App />
    </ConvContext>
  </React.StrictMode>
);
