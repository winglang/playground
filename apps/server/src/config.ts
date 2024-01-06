const envToNumber = (envName: string, defaultValue: number) => {
  let envValue = defaultValue;
  let envValueStr = process.env[envName];
  if (envValueStr) {
    envValue = parseInt(envValueStr);
    if (isNaN(envValue)) {
      throw new Error(`invalid env value ${envValueStr} for key ${envName}`);
    }
  }
  return envValue
}

const flyAppsPrefix = process.env.FLY_APPS_PREFIX || "winglang-playground-";
const flyAppsImage = process.env.FLY_APPS_IMAGE || "registry.fly.io/winglang-playground:latest";
const queueSize = envToNumber("QUEUE_SIZE", 0);
const maxFlyApps = envToNumber("MAX_FLY_APPS", 1000);
// max seconds allowed since app was created
const appUptimeLimitInSeconds = envToNumber("APP_UPTIME_LIMIT_IN_SECONDS", 60 * 60 * 8 );
// max seconds allowed since app was created and has no more availble machines
const appStaleLimitInSeconds = envToNumber("APP_STALE_LIMIT_IN_SECONDS", 60 * 2);
// max idle time for a machine (heartbeat not recieved)
const machineIdleLimitInSeconds = envToNumber("MACHINE_IDLE_LIMIT_IN_SECONDS", 60 * 5);
// rate limit window size in seconds
const rateLimitWindowInSeconds = envToNumber("RATE_LIMIT_WINDOW_IN_SECONDS", 60 * 5);
// rate limit max requests
const rateLimitMaxRequests = envToNumber("RATE_LIMIT_MAX_REQUESTS", 60);

console.log("environment configuration", {
  flyAppsPrefix,
  flyAppsImage,
  queueSize,
  maxFlyApps,
  appUptimeLimitInSeconds,
  appStaleLimitInSeconds,
  machineIdleLimitInSeconds,
  rateLimitWindowInSeconds,
  rateLimitMaxRequests,
});

export {
  flyAppsPrefix,
  flyAppsImage,
  queueSize,
  maxFlyApps,
  appUptimeLimitInSeconds,
  appStaleLimitInSeconds,
  machineIdleLimitInSeconds,
  rateLimitWindowInSeconds,
  rateLimitMaxRequests,
};
