const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

function isVPS(n) {
  let countOpen = 0;
  let countClose = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] === "(") {
      countOpen++;
    } else if (n[i] === ")") {
      countClose++;
    }

    // 중간에 ')'가 '('보다 많아지는 경우 false
    if (countClose > countOpen) {
      return false;
    }
  }

  return countOpen === countClose;
}

for (let i = 0; i < input.length; i++) {
  if (isVPS(input[i])) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
