const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el, 10));

let count0 = 0;
let count1 = 0;

function fibonacci(n) {
  if (n === 0) {
    count0++;
    return 0;
  } else if (n === 1) {
    count1++;
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

input.forEach((num) => {
  count0 = 0;
  count1 = 0;
  fibonacci(num);
  //   console.log(`0 count : ${count0}`);
  //   console.log(`1 count : ${count1}`);
  console.log(count0, count1);
  //   console.log(fibonacci(num));
});
