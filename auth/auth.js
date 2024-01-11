const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtPassword = "123456";

app.use(express.json());

const ALL_USERS = [
  {
    username: "anu@gmail.com",
    password: "123",
    name: "Anuradha Shaw",
  },
  {
    username: "Abhi@gmail.com",
    password: "123456",
    name: "abhishek Sharma",
  },
  {
    username: "Niraj@gmail.com",
    password: "12345",
    name: "Niraj Kumar shaw",
  },
];

function userExists(username, password) {
  //      write logic
  const foundUser = ALL_USERS.find((user) => {
    return user.username == username && user.password == password;
  });
  console.log(foundUser);
  return foundUser != undefined ? true : false;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User does't exist in our memory in db",
    });
  }
  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  let username;
  try {
    const decode = jwt.verify(token, jwtPassword);
    username = decode.username;
  } catch (error) {
    return res.status(403).json({
      msg: "Invalid token ",
    });
  }
  return res.status(200).json({
    user: ALL_USERS.filter((user) => {
      if (user.username != username) {
        return true;
      } else {
        return false;
      }
    }),
  });
});

app.listen(3000);
