import urlExist from "./url-exist";
import { sleep } from "./sleep";
import { FlyClient } from "./fly-client";
import { flyAppsPrefix, flyAppsImage, maxFlyApps } from "./config";

export async function createMachine(region?: string) {
  const client = new FlyClient();
  console.log("creating machine...")
  const appsCount = await client.appsCount();
  if (appsCount > maxFlyApps) {
    throw new Error(`cannot create more apps. count ${appsCount}, limit ${maxFlyApps}`)
  }
  const appName = `${flyAppsPrefix}${Math.random().toString().slice(12, -1)}`;
  const hostname = `${appName}.fly.dev`
  const appUrl = `https://${hostname}`
  await client.createApp(appName);
  const [_, machineRes] = await Promise.all([
    client.allocateIpAddress(appName), 
    client.createMachine(appName, flyAppsImage, region)
  ]);

  console.log("waiting for started state", appUrl);
  await client.waitForMachineState(appName, machineRes);

  let fetchCount = 0;
  console.log('fetching machine...', hostname, Date.now());
  while (true) {
    if (fetchCount++ > 300) {
      throw new Error("failed to fetch machine: " + hostname);
    }
    try {
      if (await urlExist(appUrl)) {
        console.log('machine fetched...', hostname, Date.now());
        break;
      } else {
        throw new Error(`url doesnt yet exists, sleeping...', ${hostname}`);
      }
    } catch (err) {
      if (fetchCount % 50 === 0) {
        console.log(err, hostname)
      }
      await sleep(200);
    }
  }
  return appUrl;
}
