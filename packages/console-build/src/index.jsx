import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpLink, wsLink, splitLink, createWSClient } from "@trpc/client";
import { Analytics } from "./Analytics";
import { trpc } from "./trpc";

const port = 34443;
const url = `http://localhost:${port}`;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: "always",
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
    mutations: {
      networkMode: "always",
    },
  },
});
const wsClient = createWSClient({
  url: `ws://localhost:${port}`,
});
const trpcClient = trpc.createClient({
  links: [
    splitLink({
      condition(op) {
        return op.type === "subscription";
      },
      true: wsLink({
        client: wsClient,
      }),
      false: httpLink({
        url,
      }),
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WingConsole.Console port={port} layout={2} />
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Analytics />
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>
);