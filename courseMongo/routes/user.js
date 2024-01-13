const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();

//user routes
router.post("/signup", userMiddleware, (req, res) => {
  //implement
});

router.get("/courses", userMiddleware, (req, res) => {
  //implement
});
router.post("/courses/:courseId", userMiddleware, (req, res) => {
  //implement
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  //implement
});

module.exports = router;
