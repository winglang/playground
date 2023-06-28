import { deleteMachines } from "../src/delete-machines";
// deleteMachines("test-play-test-", 0, 1000 * 60 * 60 * 24).then(() => {
deleteMachines("test-play-test-", 0, 0).then(() => {
  console.log("done");
});