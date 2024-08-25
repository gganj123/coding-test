function solution(n) {
  let sum = "";
  //n이 10을 넘어갈경우 100까지 2개씪늘어난다. 10 <= x < 10^2  length+2   10^2 < x < 10^3 length+3
  //length 가 n보다 크거나 같을때 x값으로 for문 만들기
  //10 + 10~99 90개  10^n-10^(n-1)
  for (let i = 1; i <= n; i++) {
    sum += i.toString();
  }

  return Number(sum.slice(n - 1, n));
}
