export interface App {
  id: string;
  createdAt: string;
  machines: {
    nodes: [{
      state: string;
    }]
    totalCount: number;
  }
};

interface GetAppsResult {
  data: {
    apps: {
      nodes: [App]
      totalCount: number;
    }
  }
}

interface CountResult {
  data: {
    apps: {
      totalCount: number;
    }
  }
}

interface CreateMachineResult {
  id: string;
  instance_id: string;
}

interface GetAppMachineResult {
  data: {
    app: {
      id: string;
      machines: {
        nodes: [{
          state: string;
        }]
        totalCount: number;
      }
      createdAt: string;
    }
  }
}

export class FlyClient {
  token;
  graphqlUrl = "https://api.fly.io/graphql";
  apiUrl = "https://api.machines.dev/v1";

  constructor() {
    if (!process.env.FLY_API_TOKEN) {
      throw new Error("environment variable FLY_API_TOKEN not set");
    }

    this.token = process.env.FLY_API_TOKEN;
  }

  _headers() {
    return {
      "Authorization": `Bearer ${this.token}`,
      "Content-Type": "application/json"
    }
  }

  async getApps() {
    const appsRespone = await fetch(this.graphqlUrl, {
      method: "POST",
      headers: this._headers(),
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
            totalCount
          }
        }`
      })
    });
    if (!appsRespone.ok) {
      throw new Error("failed to get apps");
    }
    const apps = await appsRespone.json() as GetAppsResult;
    return apps;
  }

  async appsCount() {
    const countRes = await fetch(this.graphqlUrl, {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        "query":`query getapps {
          apps {
            totalCount
          }
        }`
      })
    });
    if (!countRes.ok) {
      throw new Error("failed to get app count" + countRes.status);
    }
    const count = await countRes.json() as CountResult;
    return count.data.apps.totalCount;
  }

  async createApp(appName: string) {
    const appRes = await fetch(`${this.apiUrl}/apps`, {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        "app_name": appName,
        "org_slug": "personal"
      })
    });
    if (!appRes.ok) {
      throw new Error("failed to create app: " + appName);
    }
    console.log(await appRes.text())
  }

  async deleteApp(appName: string) {
    const deleteRes = await fetch(this.graphqlUrl, {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        "query":`mutation Delete($input:ID!) {
          deleteApp(appId: $input) {
            organization {
              id
            } 
          }
        }`,
        "variables":{
          "input": appName
        }
      })
    });
    if (!deleteRes.ok) {
      throw new Error("failed to delete app " + appName);
    }
  }

  async allocateIpAddress(appName: string) {
    const ipRes = await fetch(this.graphqlUrl, {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        "query":"mutation($input: AllocateIPAddressInput!) { allocateIpAddress(input: $input) { ipAddress { id address type region createdAt } } }",
        "variables":{"input":{"appId":appName,"type":"shared_v4"}}
      })
    })
    if (!ipRes.ok) {
      throw new Error(`failed to create shared ip: ${appName} + ${await ipRes.text()}`);
    }
  }

  async createMachine(appName: string, imageName: string, region?: string) {
    const machineRes = await fetch(`${this.apiUrl}/apps/${appName}/machines`, {
      method: "POST",
      headers: this._headers(),
      body: JSON.stringify({
        "region": region ?? undefined,
        "config": {
          "guest": {
            "cpus": 1,
            "cpu_kind": "shared",
            "memory_mb": 512
          },
          "env": {
            "IS_CONTROLLER": "false"
          },
          "auto_destroy": true,
          "image": imageName,
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
        }
      })
    });
    if (!machineRes.ok) {
      throw new Error("failed to create machine: " + appName);
    }
    const data = await machineRes.json() as CreateMachineResult;
    if (!data.id || !data.instance_id) {
      throw new Error("unexpected create machine data: " + JSON.stringify(data));
    }
    return data;
  }

  async waitForMachineState(appName: string, machineResult: CreateMachineResult) {
    const waitRes = await fetch(`${this.apiUrl}/apps/${appName}/machines/${machineResult.id}/wait?instance_id=${machineResult.instance_id}`, {
      method: "GET",
      headers: this._headers(),
    });
    if (!waitRes.ok) {
      throw new Error("failed to wait for machine: " + appName + ":" + machineResult.id);
    }
  }

  async getAppMachines(appName: string) {
    const res = await fetch(this.graphqlUrl, {
      method: "POST",
      headers: this._headers(),
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
          "input": appName
        }
      })
    });
    if (!res.ok) {
      throw new Error("failed to get app machines: " + appName);
    }
    const verifyMachineResult = await res.json() as GetAppMachineResult
    return verifyMachineResult;
  }
}