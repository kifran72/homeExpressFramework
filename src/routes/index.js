const Routes = (app) => {
  app.get("/products/:id", (req, res) => {
    // for route /products/1, req.params has value  { id: '1' }
  });
  app.get("/products/", (req, res) => {
    // for route /products?page=1&pageSize=10, req.query has value  { page: '1', pageSize: '10' }
  });
  app.post("/products/", (req, res) => {
    // req.body should contain whatever you sent across as client
  });
  app.get("/", (req, res) => {
    res.send("test");
  });
};

module.exports = Routes;
