import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "@wing-playground/shared/src/index.css";
import { loadWASM } from "onigasm";
import wasmUrl from "@wing-playground/shared/src/onigasm.wasm?url";
import { redirectIfTooManyTabs } from "./open-tabs";

if (!redirectIfTooManyTabs()) {
  loadWASM(wasmUrl).then(() => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
}
