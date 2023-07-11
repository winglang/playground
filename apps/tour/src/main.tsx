import React from "react";
import ReactDOM from "react-dom/client";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import "@wing-playground/shared/src/index.css";
import { loadWASM } from "onigasm";
import wasmUrl from "@wing-playground/shared/src/onigasm.wasm?url";
import { maybeRedirect } from "@wing-playground/shared/src/maybe-redirect";

const redirected = await maybeRedirect({
  maxTabs: 3,
  mainSite: import.meta.env.VITE_MAIN_SITE_URL,
  subdomainSite: import.meta.env.VITE_SUBDOMAIN_SITE_URL,
});

if (!redirected) {
  loadWASM(wasmUrl).then(() => {
    ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  });
}
