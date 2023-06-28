export async function deleteMachines(prefix: string, timeout: number) {
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
            createdAt
          }
        }
      }`
    })
  });
  const apps = await appsRespone.json();
  for (const node of apps.data.apps.nodes) {
    console.log("checking app for deletion...", node);
    if (node.id.startsWith(prefix) && new Date((new Date(node.createdAt).getTime()) + timeout).getTime() < Date.now()) {
      console.log("deleting app...", node);
      const rr = await fetch("https://api.fly.io/graphql", {
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
      console.log("app deleted...", node, await rr.json());
    }
  }
}