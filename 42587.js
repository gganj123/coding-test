function solution(priorities, location) {
  var queue = priorities.map((pri, idx) => ({ pri, idx }));
  var answer = 0;

  while (queue.length > 0) {
    var current = queue.shift();
    if (queue.some((item) => current.pri < item.pri)) {
      queue.push(current);
    } else {
      answer += 1;
      if (location == current.idx) {
        return answer;
      }
    }
  }
}
