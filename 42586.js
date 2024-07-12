function solution(progresses, speeds) {
  var answer = [];
  var count = 0;
  function popop() {
    if (progresses[0] + n * speeds[0] >= 100) {
      count++;
      progresses.shift();
      speeds.shift();
      popop();
    }
  }
  for (n = 0; n < 100; n++) {
    popop();
    if (count != 0) {
      answer.push(count);
      count = 0;
    }
  }
  return answer;
}
