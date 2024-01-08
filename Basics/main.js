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

//callback
function sumation(n1, n2, fnToCall) {
  let result = n1 + n2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is: " + data);
}

function displayResultPassive(data) {
  console.log("Sum's Result is : " + data);
}

const ans = sumation(1, 2, displayResult);
console.log(ans);

//A function is callback some times inside a function

function calculateArithmetic(a, b, arithmaticFinalFunction) {
  const ans = arithmaticFinalFunction(a, b);
  return ans;
}

function sum(a, b) {
  return a + b;
}

console.log(calculateArithmetic(1, 2, sum));
