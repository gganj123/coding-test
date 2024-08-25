function solution(N, trees) {
  //2차원배열 그린벨트 문제 ..대각선 x,y면 x+y 값이 작을경우 새롭게 형성
  //순서?
  //만약 [1,1]이면 [end,1] [1,end] 거의 제일 높은값... 제일 작은수 일수록 맞닿는다 => 정렬
  //[1,4]면 [1,end] [end,4] [2,2] [3,1]
  let count = 1;
  let t_sort = trees.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let minX = trees[0][0];
  let minY = trees[0][1];
  for (let [x, y] of trees) {
    if (y < minY) {
      count++;
      minY = y;
      console.log(y);
    }
  }

  return count;
}
