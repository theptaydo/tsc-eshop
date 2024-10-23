const controller = require("../controllers/user.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = function (app, axios) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/v1/users", authJwt.isAdmin, controller.getUsers);
  app.get("/api/v1/user", authJwt.isAdmin, controller.getUser);  //?username=dangth
  app.post("/api/v1/user", authJwt.isAdmin, controller.saveUser);
  app.patch("/api/v1/user", authJwt.isAdmin, controller.updateUser);  //api/v1/user
};