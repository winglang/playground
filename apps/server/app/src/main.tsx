import { Console } from "@wingconsole/ui";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"

const query = new URLSearchParams(location.search);

const heartbeat = async () => {
  try {
    const res = await fetch(`/heartbeat`, {cache: "no-store"});
    if (!res.ok) {
      throw new Error("failed to send heartbeat");
    }
  } catch (err) {
    console.log("heartbeat error", err)
    window.parent.postMessage({ heartbeat: false }, "*");  
  }
};
heartbeat();
setInterval(async () => {
  await heartbeat();
}, 10000);

ReactDOM.createRoot(document.querySelector("#root")!).render(
  <React.StrictMode>
    <Console 
      trpcUrl="/trpc"
      wsUrl={`${location.protocol === "http:" ? "ws://" : "wss://"}${location.host}`}
      layout={Number(query.get("layout")) || 1} // default to 1 = vscode (2 = playground, 3 = tutorial)
      theme={query.get("theme") as any}
      onTrace={(trace) => {
        // Playground and Learn need to be able to listen to all traces.
        window.parent.postMessage({ trace }, "*");
      }}
    />
  </React.StrictMode>,
);

