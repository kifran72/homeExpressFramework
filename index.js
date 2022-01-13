const server = require("./src/server");
const routes = require("./src/routes/index");
const app = server();

routes(app);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
