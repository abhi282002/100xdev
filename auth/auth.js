const zod = require("zod");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const jwtPassword = "1234567";

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);
app.use(express.json());

function signJwt(username, password) {
  const usernameResponse = emailSchema.safeParse(username);
  const passwordResponse = passwordSchema.safeParse(password);
  if (!usernameResponse.success || !passwordResponse.success) {
    return null;
  }
  const signature = jwt.sign(
    {
      username,
    },
    jwtPassword
  );
  return signature;
}
function verifyJwt(token) {
  let ans = true;
  try {
    const verified = jwt.verify(token, "secret");
  } catch (error) {
    ans = false;
    console.log(error.message);
  }
  return ans;
}

function decodeJwt(token) {
  //true,false
  const decode = jwt.decode(token);
  if (decode) {
    return true;
  } else {
    return false;
  }
}

const result = verifyJwt(signJwt("harkirat@gmail.com", "ABhishek s"));
console.log(result);
// const ALL_USERS = [
//   {
//     username: "anu@gmail.com",
//     password: "123",
//     name: "Anuradha Shaw",
//   },
//   {
//     username: "Abhi@gmail.com",
//     password: "123456",
//     name: "abhishek Sharma",
//   },
//   {
//     username: "Niraj@gmail.com",
//     password: "12345",
//     name: "Niraj Kumar shaw",
//   },
// ];

// function userExists(username, password) {
//   //      write logic
//   const foundUser = ALL_USERS.find((user) => {
//     return user.username == username && user.password == password;
//   });
//   console.log(foundUser);
//   return foundUser != undefined ? true : false;
// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;
//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User does't exist in our memory in db",
//     });
//   }
//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   let username;
//   try {
//     const decode = jwt.verify(token, jwtPassword);
//     username = decode.username;
//   } catch (error) {
//     return res.status(403).json({
//       msg: "Invalid token ",
//     });
//   }
//   return res.status(200).json({
//     user: ALL_USERS.filter((user) => {
//       if (user.username != username) {
//         return true;
//       } else {
//         return false;
//       }
//     }),
//   });
// });

app.listen(3000);
