const express = require("express");
const app = express();

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;
//   if (username === "Abhishek" && password === "pass") {
//     if (kidneyId == 1 || kidneyId == 2) {
//       console.log(kidneyId);
//       res.json({
//         msg: "your kidney is fine",
//       });
//     }
//   }
//   res.status(400).json({ msg: "Something up with your input" });
// });

//better way to do this use middleware

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "Abhishek" && password != "pass") {
    res.status(403).json({
      data: "Invalid user input",
    });
  } else {
    next();
  }
}

function kidneyMiddleware(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (kidneyId != 1 && kidneyId != 2) {
    res.status(403).json({
      data: "Invalid kidneyId input",
    });
  } else {
    next();
  }
}

app.get(
  "/health-checkup",
  userMiddleware,
  kidneyMiddleware,
  function (req, res, next) {
    res.send("Your heart is healthy");
  }
);

app.listen(3000);
