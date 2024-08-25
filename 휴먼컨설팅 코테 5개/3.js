function solution(numbers) {
  let count = 0;

  function dfs(index, sum) {
    if (index == numbers.length) {
      if (sum == 0) {
        count++;
      }
      return;
    }

    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
  dfs(0, 0);

  return count;
}
