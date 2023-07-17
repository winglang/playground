import { FlyClient, App } from "./fly-client";

const isUptimeTimeout = (node: App, uptimeTimeout: number) => {
  return new Date((new Date(node.createdAt).getTime()) + (uptimeTimeout * 1000)).getTime() < Date.now();
};

const isStaleTimeout = (node: App, staleTimeout: number) => {
  return new Date((new Date(node.createdAt).getTime()) + (staleTimeout * 1000)).getTime() < Date.now() &&
    (node.machines.totalCount === 0 || node.machines.nodes.every(n => n.state === "destroyed"))
};

export async function deleteMachines(prefix: string, staleTimeout: number, uptimeTimeout: number) {
  const client = new FlyClient();
  const apps = await client.getApps();
  console.log("checking apps for deletion...");
  for (const node of apps.data.apps.nodes) {
    if (
      node.id.startsWith(prefix) &&
      (isUptimeTimeout(node, uptimeTimeout) || isStaleTimeout(node, staleTimeout))) {
      console.log("deleting app...", JSON.stringify(node));
      await client.deleteApp(node.id);
    }
  }
}