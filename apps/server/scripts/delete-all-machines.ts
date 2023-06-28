import { deleteMachines } from "../src/delete-machines";
deleteMachines("test-play-test-", 0).then(() => {
  console.log("done");
});