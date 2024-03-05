import { FlyClient } from "./fly-client";


export async function verifyMachine(machine: string) {
  const client = new FlyClient();
  let name = machine.replace("https://", "").replace(".fly.dev", "")
  let isVerified = false;
  try {
    console.log("verifing machine...", name);
    const appRes = await client.getAppMachines(name);
    isVerified = appRes.data?.app?.machines?.nodes?.every(n => n.state === "started");
  } catch (err) {
    console.error("failed to verify machine", err);
    isVerified = false;
  }

  if (!isVerified) {
    // delete app async
    client.deleteApp(name).catch(err => console.error("failed to delete app", name, err));
  }

  return isVerified;
}