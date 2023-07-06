import { FlyClient } from "./fly-client";

export async function deleteMachines(prefix: string, staleTimeout: number, uptimeTimeout: number) {
  const client = new FlyClient();
  const apps = await client.getApps();
  console.log("checking apps for deletion...");
  for (const node of apps.data.apps.nodes) {
    if (
      node.id.startsWith(prefix) &&
      (new Date((new Date(node.createdAt).getTime()) + (uptimeTimeout * 1000)).getTime() < Date.now() ||
      (new Date((new Date(node.createdAt).getTime()) + (staleTimeout * 1000)).getTime() < Date.now() &&
        node.machines.totalCount === 0 ||
        node.machines.nodes.every(n => n.state === "destroyed")))) {
      console.log("deleting app...", JSON.stringify(node));
      await client.deleteApp(node.id);
    }
  }
}