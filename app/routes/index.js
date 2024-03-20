module.exports = (app) => {
  // Api routes
  const tutorialApiRouters = require("./api/turorial.routes");
  app.use("/api/tutorials", tutorialApiRouters);

  // Backend routes
  const homeRouters = require("./backend/index");
  app.use("/", homeRouters);

  app.get("*", (req, res) => {
    res.status(404).send('404 page not found!');
  });
};
