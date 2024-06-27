const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const numbers = input.split(" ").map((el) => +el);
let [a, b] = numbers;
console.log(a + b);
