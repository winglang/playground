import { FlyClient } from "./fly-client";

export async function deleteQueue(queue: string[]) {
  try {
    const client = new FlyClient();
    console.log("deleting queue...", queue.length);
    await Promise.all(queue.map(machine => {
      let name = machine.replace("https://", "").replace(".fly.dev", "");
      return client.deleteApp(name);
    }));
  } catch (err) {
    console.error("failed to delete queue", err);
  }
}
