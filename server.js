const app = require("./src/index");

const connect = require("./src/configs/db");

app.listen(process.env.PORT || 2345, async () => {
  await connect();
  console.log("listening on port 2345");
});
