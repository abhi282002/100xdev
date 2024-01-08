function Slice(str, startIndex, lastIndex) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i >= startIndex && i < lastIndex) {
      newStr = newStr + str[i];
    }
  }
  return newStr;
}

console.log(Slice("Hello Abhishek", 0, 7));
