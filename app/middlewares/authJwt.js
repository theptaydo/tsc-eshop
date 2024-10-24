const jwt = require("jsonwebtoken");
const config = require("../config/security.config");
const db = require("../models");
const Users = require("../models/user.model");

verifyToken = async (req, res, next) => {
  const tokenBearer = req.header('Authorization');
  let token = tokenBearer.substring(7);

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token,
    config.SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Unauthorized!",
        });
      }
      console.log(decoded)
      req.username = decoded.username;
      req.roles = decoded.roles;
      next();
    });
};

isAdmin = (req, res, next) => {
  try {
    const tokenBearer = req.header('Authorization');
    let token = tokenBearer.substring(7);

    if (!token) {
      return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token,
      config.SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(403).send({
            message: "Forbidden!",
          });
        }
        if (!decoded.roles.includes('ADMIN'))
          return res.status(403).send({
            message: "Forbidden!",
          });
        req.username = decoded.username;
        req.roles = decoded.roles;
        next();
      });
  } catch (error) {
    return res.status(403).send({
      message: "Forbidden! & catch",
    });
  }
};

isModerator = (req, res, next) => {
  const tokenBearer = req.header('Authorization');
  let token = tokenBearer.substring(7);

  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token,
    config.SECRET,
    (err, decoded) => {
      if (err) {
        return res.status(403).send({
          message: "Forbidden!",
        });
      }
      console.log(decoded)
      if (!decoded.roles.includes('MODERATOR'))
        return res.status(403).send({
          message: "Forbidden!",
        });
      req.username = decoded.username;
      req.roles = decoded.roles;
      next();
    });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator
};
module.exports = authJwt;
