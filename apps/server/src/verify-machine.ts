import { FlyClient } from "./fly-client";


export async function verifyMachine(machine: string) {
  const client = new FlyClient();
  try {
    let name = machine.replace("https://", "").replace(".fly.dev", "")
    console.log("verifing machine...", name);
    const appRes = await client.getAppMachines(name);
    return appRes.data?.app?.machines?.nodes?.every(n => n.state === "started");
  } catch (err) {
    console.error("failed to verify machine", err);
    return false;
  }
}