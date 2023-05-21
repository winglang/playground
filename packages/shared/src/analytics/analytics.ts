import Analytics from 'analytics';
// @ts-ignore
import segmentPlugin from '@analytics/segment';

export function createAnalytics(name: string) {
  const instance = Analytics({
    app: 'wing-playground',
    plugins: [
      segmentPlugin({
        writeKey: 'MvkxDOKWzcs7MFrWu1UNaO2bGn1S2RvA'
      })
    ]
  })
  
  instance.page()
  
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
      instance.track(`tutorial: simulator: ${resourceName}: ${action}`, Object.assign({}, trace, trace.data));
    }
  });
  
  instance.identify(Math.random().toString())

  return instance;
}

