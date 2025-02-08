import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home"; // Import your homepage component
import "./index.css"; // Import global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
