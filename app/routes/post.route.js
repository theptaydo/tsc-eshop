const controller = require("../controllers/post.controller");
const authJwt = require("../middlewares/authJwt");

module.exports = function (app, axios) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/v1/posts", authJwt.verifyToken, controller.getPosts);
  app.get("/api/v1/post", controller.getPost);  //?id=65ffty655
  app.post("/api/v1/post", authJwt.verifyToken, controller.savePost);
  // app.patch("/api/v1/user", authJwt.isAdmin, controller.updateUser);  //api/v1/user
};