function solution(vote) {
  //C랑 A가 만약 4표라면??
  let map = new Map();
  let v_arr = vote.split("");

  for (let i = 0; i < v_arr.length; i++) {
    if (map.has(v_arr[i])) {
      map.set(v_arr[i], map.get(v_arr[i]) + 1);
    } else {
      map.set(v_arr[i], 1);
    }
    // console.log(map);
  }
  let max = "";
  let max_vote = 0;
  for (let [k, v] of map) {
    if (max_vote < v) {
      max_vote = v;
      max = k;
      console.log(map);
    } else if (max_vote == v) {
      if (k == "C") {
        if (max == "A") {
          return "A";
        } else {
          return "B";
        }
      } else {
        return "AB";
      }
    }
  }
  // console.log(map)
  return max;
}
