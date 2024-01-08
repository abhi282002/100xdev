// const currentDate = new Date();
// console.log(currentDate.getMonth() + 1);
// console.log(currentDate.getFullYear());
// console.log(currentDate.getDate());
// console.log(currentDate.getHours());
// console.log(currentDate.getTime());
// console.log(currentDate.getSeconds());

//JSON.parse - covert string into object
//JSON.stringfy - convert object into string

const users = '{"name":"harkirat", "age":24, "gender":"male"}';
console.log(JSON.parse(users));
const obj = {
  name: "abhishek",
  title: "sharma",
};
console.log(JSON.stringify(obj));
