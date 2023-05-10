import { trpc } from "./trpc.js";

export const Analytics = () => {
    trpc["app.traces"].useSubscription(undefined, {
      async onData(trace) {
        
        console.debug("app.traces", { trace });
        
      },
    });

    return (
        <div>
            <h1>Analytics</h1>
        </div>
    );
}
