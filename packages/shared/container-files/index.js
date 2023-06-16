const { createConsoleApp } = require("@wingconsole/app");

(async () => {
  const server = await createConsoleApp({
    wingfile: "test.w",
  });

  console.log(`Server is running on http://localhost:${server.port}.`);
})();
