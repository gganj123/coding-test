function solution(n, info) {
  let answer = [];
  let maxDifference = -1; // 최대 점수 차이
  let bestAnswer = [-1]; // 최적의 답

  // 재귀 함수로 모든 경우의 수를 탐색하여 최적의 점수 차이를 구함
  function dfs(index, apeachScore, lionScore, arrowsLeft) {
      if (index === 11) {
          // 모든 점수에 대해 화살 배치가 끝난 경우
          let difference = lionScore - apeachScore;
          if (difference > maxDifference) {
              maxDifference = difference;
              bestAnswer = answer.slice(); // answer 배열을 복사하여 bestAnswer로 저장
          } else if (difference === maxDifference) {
              // 점수 차이가 같으면 더 많은 점수를 맞힌 경우로 갱신
              let currentLowestIndex = 10;
              while (currentLowestIndex >= 0 && bestAnswer[currentLowestIndex] === answer[currentLowestIndex]) {
                  currentLowestIndex--;
              }
              if (answer[currentLowestIndex] > bestAnswer[currentLowestIndex]) {
                  bestAnswer = answer.slice();
              }
          }
          return;
      }

      for (let lionArrows = 0; lionArrows <= arrowsLeft; lionArrows++) {
          let apeachArrows = info[index];
          answer[index] = lionArrows;
          dfs(index + 1, apeachScore + (apeachArrows > lionArrows ? 10 - index : 0), lionScore + (lionArrows > apeachArrows ? 10 - index : 0), arrowsLeft - lionArrows);
      }
  }

  // 초기 dfs 호출
  dfs(0, 0, 0, n);

  // 결과 반환
  if (maxDifference <= 0) {
      return [-1];
  }
  return bestAnswer;
}

// 예시 입력에 대한 출력 확인
console.log(solution(5, [2,1,1,1,0,0,0,0,0,0,0])); // [0,2,2,0,1,0,0,0,0,0,0]
console.log(solution(1, [1,0,0,0,0,0,0,0,0,0,0])); // [-1]
console.log(solution(9, [0,0,1,2,0,1,1,1,1,1,1])); // [1,1,2,0,1,2,2,0,0,0,0]
console.log(solution(10, [0,0,0,0,0,0,0,0,3,4,3])); // [1,1,1,1,1,1,1,1,0,0,2]
