const fs = require("fs");

function solution(progresses, speeds) {
  const answer = [];
  const days = []; // 각 작업이 완료되는 데 필요한 날짜를 저장할 배열

  // 각 작업이 완료되는 날짜를 계산
  for (let i = 0; i < progresses.length; i++) {
    const remainingWork = 100 - progresses[i];
    const daysRequired = Math.ceil(remainingWork / speeds[i]);
    days.push(daysRequired);
  }

  // 배포 순서대로 작업들을 그룹화
  let maxDay = days[0];
  let count = 1;

  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      answer.push(count);
      count = 1;
      maxDay = days[i];
    }
  }

  answer.push(count); // 마지막 그룹 추가

  // 결과를 answer.txt 파일에 저장
  fs.writeFileSync("answer.txt", answer.join("\n"));
  return answer;
}