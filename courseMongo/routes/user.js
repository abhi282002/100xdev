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
  //implement course push logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  User.updateOne(
    { username: username },
    {
      $push: {
        purchasesCourses: courseId,
      },
    }
  ).catch((e) => {
    console.log(e);
  });
  res.json({ msg: "Course Purchase Successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  //implement
  const user = await User.findOne({
    username: req.headers.username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasesCourses,
    },
  });
  res.status(200).json({ courses: courses });
});

module.exports = router;
