const fs = require("fs");

function abhiReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}
//resolve ->

//callback function to call
function onDone(data) {
  console.log(data);
}
abhiReadFile().then(onDone);

//Understand Promise class

// const d = new Promise(function (resolve) {});
// console.log(d);

var a = new Promise(function (resolve) {
  setTimeout(() => {
    resolve("Foo");
  }, 1000);
});

function callBack() {
  console.log(a);
}

console.log(a);
a.then(callBack);

//async function

function abhiAsyncFunction() {
  let p = new Promise(function (resolve) {
    setTimeout(() => {
      resolve("hi there i'm abhishek");
    }, 3000);
  });
  return p;
}

async function main() {
  let value = await abhiAsyncFunction();
  console.log(value);
}
main();
console.log("aftermain");
