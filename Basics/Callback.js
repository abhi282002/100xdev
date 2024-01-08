// function square(n) {
//   return n * n;
// }
// function sumOfSquare(a, b) {
//   const val = square(a);
//   const val2 = square(b);
//   return val + val2;
// }
// console.log(sumOfSquare(1, 2));

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function sumOfSomething(a, b, func) {
  const val = func(a);
  const val2 = func(b);
  return val + val2;
}
console.log(sumOfSomething(1, 2, square));
console.log(sumOfSomething(2, 2, cube));
