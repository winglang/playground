export async function verifyMachine(machine: string) {
  let name = machine.replace("https://", "").replace(".fly.dev", "")
  console.log("verifing machine...", name);
  const res = await fetch("https://api.fly.io/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.FLY_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "query":`query getapp($input:String) {
        app(name:$input) {
          id
          machines {
            nodes {
              state
            }
            totalCount
          }
          createdAt
        }
      }`,
      "variables":{
        "input": name
      }
    })
  });
  if (!res.ok) {
    return false;
  }
  const appRes = await res.json();
  return appRes.data?.app?.machines?.nodes?.every(n => n.state === "started");
}