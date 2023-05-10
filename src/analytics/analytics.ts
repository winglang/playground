import Analytics from 'analytics';
import segmentPlugin from '@analytics/segment';

export const analytics = Analytics({
  app: 'wing-playground',
  plugins: [
    segmentPlugin({
      writeKey: 'MvkxDOKWzcs7MFrWu1UNaO2bGn1S2RvA'
    })
  ]
})

analytics.page()

window.addEventListener('message', function(event: any) {
  if (event && event.data && event.data.trace) {
    const trace = event.data.trace
    if (trace.type !== 'resource') {
      return;
    }

    // console.log("Message received from the child: " + event.data.trace); // Message received from child
    // console.log("traceee", Object.assign({}, trace, trace.data));
    const resourceName = trace.sourceType.replace("wingsdk.cloud.", "");
    const action = trace.data.message.substr(0, trace.data.message.indexOf("("));
    analytics.track(`tutorial: simulator: ${resourceName}: ${action}`, trace);
  }
});

analytics.identify(Math.random().toString())
