import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import "./index.css";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);