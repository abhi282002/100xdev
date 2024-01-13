const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router();

//user routes
router.post("/signup", (req, res) => {
  //implement
  const username = req.body.username;
  const password = req.body.password;
  //check if user withthis name exist
  User.create({
    username: username,
    password: password,
  })
    .then((value) => {
      res.json({ msg: "User created successfully" });
    })
    .catch(() => {
      res.status(500).json({ msg: "Server error" });
    });
});

router.get("/courses", (req, res) => {
  //implement course purchase logic
  Course.find({})
    .then((value) => {
      res.json({ AllCourses: value });
    })
    .catch((value) => {
      res.status(500).json({ msg: "Internal Server error" });
    });
});
router.post("/courses/:courseId", userMiddleware, (req, res) => {
  //implement
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  //implement
});

module.exports = router;
