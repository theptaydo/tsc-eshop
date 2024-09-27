const controller = require("../controllers/rating.controller");

module.exports = function (app, axios) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  // app.get("/api/auth/dangth", controller.dangth);
  app.post("/api/v1/rating", controller.saveRatingByProductById); // api/v1/rating?productId=66f5171aed29779dd6b82f4c
};