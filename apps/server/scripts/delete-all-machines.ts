import { deleteMachines } from "../src/delete-machines";
import { flyAppsPrefix } from "../src/config";
deleteMachines(flyAppsPrefix, 0, 0).then(() => {
  console.log("done");
});