const Routes = (app) => {
  app.get("/", (req, res) => {
    res.send("test");
  });
};

module.exports = Routes;
