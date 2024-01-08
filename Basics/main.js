var a = 1; //defining a variable
a = 2;
console.log(a);

const b = 1;
//b = 2
console.log(b);

//Data Types
let name = "Abhishek ";
let age = 10;
let isMarried = true;

console.log("this persons name is " + name + "and their age is " + age);

if (isMarried) {
  console.log("Married");
} else {
  console.log("Not Married");
}

console.log(isMarried ? "Married" : "not Married");

//loops
//Array
const num = [21, 22, 23, 24, 25];
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 == 0) {
    console.log(num[i]);
  }
}

//Object
const user1 = [
  {
    firstName: "ABHISHEK",
    gender: "Male",
  },
  {
    firstName: "Harkirat",
    gender: "Male",
  },
  {
    firstName: "anuradha",
    gender: "Female",
  },
];

for (let i = 0; i < user1.length; i++) {
  if (user1[i]["gender"] == "Male") {
    console.log(user1[i]["firstName"]);
  }
}

//findSum

function sum(a, b) {
  return a + b;
}
console.log(sum(1, 2));
