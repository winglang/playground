bring cloud;

let counter = new cloud.Counter();

let exampleCode = inflight () => {
  log("function is called with an initial counter value of ${counter.peek()}");
  counter.inc();
  log("value of the counter before next increment is ${counter.inc()}");
  log("value of the counter after last increment is ${counter.peek()}");
  counter.reset();
  log("value of the counter after reset is ${counter.peek()}");
  counter.dec();
  log("value of the counter after decrement is ${counter.peek()}");
};

new cloud.Function(exampleCode) as "Example Code";