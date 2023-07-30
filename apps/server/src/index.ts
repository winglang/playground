import 'dotenv/config'
import { startConsole } from "./console";
import { startController } from "./controller";

if (process.env.IS_CONTROLLER === "true") {
  startController();
} else {
  startConsole({ wingfile: "wing/test.w" });
}