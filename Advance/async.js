// const { log } = require("console");

const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// console.log("check");

//create own readFile method
//simmy-timmy
function abhiItself(cb) {
  fs.readFile("a.txt", "utf-8", function (err, data) {
    cb(data);
  });
}

function callBack(data) {
  console.log(data);
}

abhiItself(callBack);
