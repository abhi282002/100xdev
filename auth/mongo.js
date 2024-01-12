const jwt = require("jsonwebtoken");

//decode ,verify ,generate
const value = {
  name: "Abhishek",
  accountNumber: 12121212,
};

const token = jwt.sign(value, "secret");
//if bank loose this secret then anyone can deposit amount from bank
console.log(token);

function tryCatch() {
  let a;
  try {
    console.log(a.length);
    console.log("hi there from inside");
  } catch (error) {
    console.log(error.message);
  }
}
tryCatch();
