const { createConsoleServer } = require("@wingconsole/server");
const express = require("express");

const staticDir = `${__dirname}/dist`;

(async () => {

  const server = await createConsoleServer({
    wingfile: "test.w",
    log: console,
    onExpressCreated: (app) => {
      app.use(express.static(staticDir))
    }
  })

  console.log(`Server is running on http://localhost:${server.port}.`);
})();
