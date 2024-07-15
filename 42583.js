function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = [];
  let bridge_weights = 0;

  for (let i = 0; i < bridge_length; i++) {
    bridge.push(0);
  }

  while (truck_weights.length > 0 || bridge_weights > 0) {
    time++;

    let leaving_truck = bridge.shift();
    bridge_weights -= leaving_truck;

    if (truck_weights.length > 0) {
      if (bridge_weights + truck_weights[0] <= weight) {
        let new_truck = truck_weights.shift();
        bridge.push(new_truck);
        bridge_weights += new_truck;
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}
