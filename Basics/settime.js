const start = performance.now();
console.log(start);
setTimeout(() => {
  const end = performance.now();
  const diff = end - start;

  console.log(`Time elapsed: ${diff} milliseconds`);
}, 1000); // 1000 milliseconds (1 second) delay in this example
