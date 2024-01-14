const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtSecret = require("../constant");
async function userMiddleware(req, res, next) {
  const words = req.headers.authorization;
  const token = words.split(" ");
  const actualToken = token[1];
  const decode = await jwt.verify(actualToken, jwtSecret);
  if (decode) {
    req.username = decode.username;
    next();
  } else {
    res.status(403).json({ msg: "Invalid token" });
  }
}
module.exports = userMiddleware;
