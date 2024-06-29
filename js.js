const n = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((el) => parseInt(el, 10));

function solution(n) {
  var cur = n.toString(2).split("");
  var next = 0;
  for (s = 1; s < 1000; s++) {
    next = (Number(n) + s).toString(2).split("");
    if (
      Number(cur.join(""))
        .toString(2)
        .split("")
        .filter((e) => e === "1").length ===
      Number(next.join(""))
        .toString(2)
        .split("")
        .filter((e) => e === "1").length
    ) {
      console.log(parseInt(next.join(""), 2));
      console.log(cur.filter((e) => e === "1").length);
      console.log(Number(cur.join("")).toString(2));

      return parseInt(next.join(""));
    }
  }
  console.log(parseInt(next.join(""), 2));
  return;
}

solution(n);
