import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client` instead of `react-dom`
import App from "./App";
import "./index.css";

// Create a root for React 18
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
