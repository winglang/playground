import Analytics from 'analytics';
import { useEffect } from "react";
// @ts-ignore
import segmentPlugin from '@analytics/segment';
import { LoadingStatus } from '../loading-status';

export interface AnalyticsProps {
  name: string;
  state: LoadingStatus;
}

const instance = Analytics({
  app: 'wing-playground',
  plugins: [
    segmentPlugin({
      writeKey: 'MvkxDOKWzcs7MFrWu1UNaO2bGn1S2RvA'
    })
  ]
})

instance.page()

export function useAnalytics({name, state}: AnalyticsProps) {
  useEffect(() => {
    instance.track(`${name}: state: ${state}`, { state });
  }, [state]);

  window.addEventListener('message', function(event: any) {
    if (event && event.data && event.data.trace) {
      const trace = event.data.trace
      if (trace.type !== 'resource') {
        return;
      }
  
      const resourceName = trace.sourceType.replace("wingsdk.cloud.", "");
      if (trace.data.message.indexOf("(") === -1) {
        return;
      }
  
      const action = trace.data.message.substr(0, trace.data.message.indexOf("("));
      instance.track(`${name}: simulator: ${resourceName}: ${action}`, Object.assign({}, trace, trace.data));
    }
  });

  return {
    analytics: instance
  };
}

