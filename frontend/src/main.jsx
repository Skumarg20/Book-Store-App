import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./assets/context/authoProvide.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
    
      <div className="bg-white dark:bg-black">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
