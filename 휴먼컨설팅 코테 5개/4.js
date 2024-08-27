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

function solution2(n) {
  let digit = 1; // 현재 자리수
  let count = 9; // 해당 자리수에서의 숫자 개수
  let start = 1; // 해당 자리수의 시작 숫자

  // n이 속한 자리수를 찾기
  while (n > digit * count) {
    n -= digit * count; // 해당 자리수에서 차지하는 자릿수를 빼줌
    digit++; // 자리수를 1 증가
    count *= 10; // 자리수가 증가할 때 숫자의 개수도 10배씩 증가
    start *= 10; // 자리수의 시작 숫자도 10배씩 증가
  }

  // n이 속한 숫자를 찾기
  start += Math.floor((n - 1) / digit); // 해당 숫자를 찾음
  let s = start.toString(); // 문자열로 변환하여 자릿수 계산

  // 해당 숫자의 n번째 자릿수를 반환
  return Number(s[(n - 1) % digit]);
}
