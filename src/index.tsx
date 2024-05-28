import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./styles";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Cannot find root element with that ID");

ReactDOM.createRoot(rootElement).render(
  <>
    <GlobalStyle />
    <App />
  </>
);
