import Analytics from 'analytics';
import { useEffect } from "react";
// @ts-ignore
import segmentPlugin from '@analytics/segment';
import { LoadingStatus } from '../loading-status';

export interface AnalyticsProps {
  platform: "learn" | "play";
  tutorial?: string;
  state: LoadingStatus;
}

const MAX_ANALYTICS_STRING_LENGTH = 1024;

const instance = Analytics({
  app: 'wing-playground',
  plugins: [
    segmentPlugin({
      writeKey: 'MvkxDOKWzcs7MFrWu1UNaO2bGn1S2RvA'
    })
  ]
});

const sessionId = Date.now();

instance.page()

export function useAnalytics({platform, tutorial, state}: AnalyticsProps) {

  const track = (event: string, properties?: Record<string, any>) => {
    instance.track(
      event.toLowerCase(),
      {
        ...(properties || {}),
        integrations: {
          "Actions Amplitude": {
            "session_id": sessionId
          },
        }
      },
    );
  }

  // handle state change events
  useEffect(() => {
    const eventNamePrefix = tutorial ? `${platform}:${tutorial}` : `${platform}`;
    switch (state) {
      case LoadingStatus.Init:
        track(`${eventNamePrefix}_containers_init`);
        break;
      case LoadingStatus.Install:
        track(`${eventNamePrefix}_dependency_install`);
        break;
      case LoadingStatus.Eval:
        track(`${eventNamePrefix}_console_init`);
        break;
      case LoadingStatus.Completed:
        track(`${eventNamePrefix}_startup_ready`);
        break;
    }
  }, [state, platform, tutorial]);

  useEffect(() => {

    const listener = (event: any) => {
      if (event && event.data && event.data.trace) {
        const trace = event.data.trace
        if (trace.type !== 'resource') {
          return;
        }

        const resourceName = trace.sourceType.replace("wingsdk.cloud.", "");
        if (!trace.data.message.includes("(")) {
          return;
        }

        // extracting the action name.
        // trace message for resources looks like this:
        // 'Invoke (payload="{\\"messages\\":[\\"dfd\\"]}").'
        const action = trace.data.message.slice(
            0,
            Math.max(0, trace.data.message.indexOf("(")),
        );

        const properties = {
          message: trace?.data?.message?.substring(0, MAX_ANALYTICS_STRING_LENGTH) || '',
          status: trace?.data?.status?.substring(0, MAX_ANALYTICS_STRING_LENGTH) || 'unknown',
          result: trace?.data?.result?.substring(0, MAX_ANALYTICS_STRING_LENGTH) || 'unknown',
        }

        // general interaction event
        const eventName = tutorial ? `${platform}:${tutorial}_resource_interact` : `${platform}_resource_interact`;
        track(
            eventName,
            {
              resource: resourceName,
              action,
              ...properties
            }
        );
        // resource specific event
        const resourceEventName = tutorial ? `${platform}:${tutorial}_${resourceName}_${action}` : `${platform}_${resourceName}_${action}`;
        track(
            resourceEventName,
            properties
        );

      }
    }

    window.addEventListener('message', listener);

    return () => {
      window.removeEventListener('message', listener);
    }

  }, [tutorial]);

  return {
    track
  };
}

