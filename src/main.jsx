import React from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./App"; // ✅ Import the wrapper
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper /> {/* ✅ use AppWrapper, NOT App */}
  </React.StrictMode>
);
