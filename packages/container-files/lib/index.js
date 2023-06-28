const { createConsoleApp } = require("@wingconsole/app");

(async () => {
  const server = await createConsoleApp({
    wingfile: "test.w",
    requestedPort: 3000
  });

  console.log(`Server is running on http://localhost:${server.port}.`);
})();
