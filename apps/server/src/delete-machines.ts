export async function deleteMachines(prefix: string, timeout: number, hardTimeout: number) {
  const appsRespone = await fetch("https://api.fly.io/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.FLY_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "query":`query getapps {
        apps {
          nodes{
            id
            machines {
              nodes {
                state
              }
              totalCount
            }
            createdAt
          }
        }
      }`
    })
  });
  const apps = await appsRespone.json();
  console.log("checking apps for deletion...");
  for (const node of apps.data.apps.nodes) {
    if (
      node.id.startsWith(prefix) &&
      (new Date((new Date(node.createdAt).getTime()) + hardTimeout).getTime() < Date.now() ||
      (new Date((new Date(node.createdAt).getTime()) + timeout).getTime() < Date.now() &&
        node.machines.totalCount === 0 ||
        node.machines.nodes.every(n => n.state === "destroyed")))) {
      console.log("deleting app...", JSON.stringify(node));
      await fetch("https://api.fly.io/graphql", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.FLY_API_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "query":`mutation Delete($input:ID!) {
            deleteApp(appId: $input) {
              organization {
                id
              } 
            }
          }`,
          "variables":{
            "input": node.id
          }
        })
      });
    }
  }
}