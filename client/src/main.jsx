// Import React and ReactDOM
import React from "react";
import ReactDOM from "react-dom/client";
// Import App and CartProvider
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";
// Import CSS
import "./index.css";

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);