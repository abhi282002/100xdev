const copiedObject = {};
const obj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
  hobbies: ["reading", "coding"],
};
for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    copiedObject[key] = obj[key];
  }
}

copiedObject.name = "abishek";
console.log(obj.name);
console.log(copiedObject.name);
