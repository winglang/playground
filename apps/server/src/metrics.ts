import prom from "prom-client";
import express from "express";
import { FlyClient } from "./fly-client";

const registry = new prom.Registry();
const appsCount = new prom.Gauge({
  name: "apps_count",
  help: "Number of active apps"
});
const queueLength = new prom.Gauge({
  name: "queue_length",
  help: "Length of warm machines"
});

registry.registerMetric(appsCount);
registry.registerMetric(queueLength);

export function expressMetrics(queue: string[], app: express.Express) {
  const client = new FlyClient();
  app.get("/metrics", async (req, res) => {
    try {
      const count = await client.appsCount();
      appsCount.set(count);
      queueLength.set(queue.length);
  
      res.set('Content-Type', registry.contentType);
      res.end(await registry.metrics());
    } catch (err) {
      console.error("failed to get metrics", err);
      res.status(500);
    }
  });

  app.get("/queue", async (req, res) => {
    return res.json({
      queueLength: queue.length,
      queue,
      instance: process.env.FLY_ALLOC_ID
    })
  });
}