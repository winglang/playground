import { trpc } from "./trpc.js";

export const Analytics = () => {
  trpc["app.traces"].useSubscription(undefined, {
    async onData(trace) {
      console.debug("app.traces", { trace });
      window.parent.postMessage({ trace }, "*");
    },
  });

  return (
    <div>
    </div>
  );
}
