bring cloud;

let bucket = new cloud.Bucket();

let exampleCode = inflight () => {
  log("Creating files");
  // TODO - Add code from "Creating file" section
  log("Reading files");
  // TODO - Add code from "Reading file" section
  log("Listing files");
  // TODO - Add code from "Listing file" section
  log("Deleting files");
  // TODO - Add code from "Deleting file" section
};

new cloud.Function(exampleCode) as "Example Code";
