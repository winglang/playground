import { Resolver } from "node:dns/promises"
import urlExist from "./url-exist";
import { sleep } from "./sleep";

export async function createMachine() {
  const appName = `test-play-test-${Math.random().toString().slice(12, -1)}`;
  const hostname = `${appName}.fly.dev`
  await fetch("https://api.machines.dev/v1/apps", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.FLY_API_TOKEN}`
    },
    body: JSON.stringify({
      "app_name": appName,
      "org_slug": "personal"
    })
  });
  const rr = await fetch("https://api.fly.io/graphql", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.FLY_API_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "query":"mutation($input: AllocateIPAddressInput!) { allocateIpAddress(input: $input) { ipAddress { id address type region createdAt } } }",
      "variables":{"input":{"appId":appName,"type":"shared_v4"}}
    })
  })
  console.log(await rr.json());
  // await sleep(3000);
  while (true) {
    try {
      const resolver = new Resolver();
      const resolved = await resolver.resolve(hostname);
      console.log(resolved);
      break;
    } catch (err) {
      console.log(err)
      await sleep(200);
    }
  }
  const resp = await fetch(`https://api.machines.dev/v1/apps/${appName}/machines`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.FLY_API_TOKEN}`
    },
    body: JSON.stringify({
      "config": {
        "guest": {
          "cpus": 1,
          "cpu_kind": "shared",
          "memory_mb": 1024
        },
        "env": {
          "IS_CONTROLLER": "false"
        },
        "auto_destroy": true,
        "image": "registry.fly.io/test-play-test:latest",
        "services": [
          {
            "ports": [
              {
                "port": 443,
                "handlers": [
                  "tls",
                  "http"
                ]
              },
              {
                "port": 80,
                "handlers": [
                  "http"
                ]
              }
            ],
            "protocol": "tcp",
            "internal_port": 3000
          }
        ],
        "checks": {
        //   "http-get": {
        //     "type": "http",
        //     "port": 3000,
        //     "protocol": "http",
        //     "method": "GET",
        //     "path": "/",
        //     "interval": "15s",
        //     "timeout": "10s"
        // }
        //     "httpget": {
        //         "type": "http",
        //         "port": 8080,
        //         "method": "GET",
        //         "path": "/",
        //         "interval": "15s",
        //         "timeout": "10s"
        //     }
        }
      }
    })
  });
  const data = await resp.json() as any;
  console.log(data);
  await fetch(`https://api.machines.dev/v1/apps/${appName}/machines/${data.id}/wait?instance_id=${data.instance_id}`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${process.env.FLY_API_TOKEN}`
    },
  });
  
  const appUrl = `https://${hostname}`
  
  while (true) {
    try {
      console.log('verifying machine...', Date.now());
      if (await urlExist(appUrl)) {
        console.log('machine verified...', Date.now());
        break;
      } else {
        console.log('failed to verify machine, sleeping...', Date.now());
        await sleep(200);  
      }
    } catch (err) {
      console.log(err)
      await sleep(200);
    }
  }
  // await sleep(2000);
  // await waitForMachine(appUrl, hostname);
  return appUrl;
}

async function waitForMachine(url: string, hostname: string) {
  try {
    const resolver = new Resolver();
    await resolver.resolve(hostname);
    // const controller = new AbortController()
    // setTimeout(() => controller.abort(), 1500)
    console.debug(`making a request to ${url}`);
    await fetch(url, {cache: "no-store"});
    return true;
  } catch (err) {
    console.debug("fetch error", err);
    await sleep(1000);
    return waitForMachine(url, hostname);
  }
}
