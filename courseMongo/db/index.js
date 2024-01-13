const mongoose = require("mongoose");
const URI = require("../mongoUri");
mongoose.connect(URI + "Courses");

const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasesCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CourseSchema",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  tittle: String,
  description: String,
  imageLink: String,
  price: Number,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
