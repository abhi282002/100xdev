const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

//Admin routes
router.post("/signup", (req, res) => {
  //implement
  const username = req.body.username;
  const password = req.body.password;
  //check if user withthis name exist
  Admin.create({
    username: username,
    password: password,
  })
    .then((value) => {
      res.json({ msg: "Admin created successfully" });
    })
    .catch(() => {
      res.status(500).json({ msg: "Server error" });
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const tittle = req.body.tittle;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  const newCourse = await Course.create({
    tittle,
    description,
    imageLink,
    price,
  });
  res.json({ msg: "Course Created Successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, (req, res) => {
  Course.find({})
    .then((value) => {
      res.json({ AllCourses: value });
    })
    .catch((value) => {
      res.status(500).json({ msg: "Internal Server error" });
    });
});

module.exports = router;
