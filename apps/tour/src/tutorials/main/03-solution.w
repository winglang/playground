bring cloud;

let q = new cloud.Queue();

new cloud.Function(inflight (s: Json?) => {
  if s == "" {
      log("Function was invoked without a payload");
  } else {
      log("Function was called with argument '{s!}'");
  }
});
