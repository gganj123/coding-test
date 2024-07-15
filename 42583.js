function solution(bridge_length, weight, truck_weights) {
  var time = 0;
  var bridge = [];
  var bridge_weight = 0;

  for (n = 0; n < bridge_length; n++) {
    bridge.push(0);
  }
  while (truck_weights.length > 0 || truck_weights > 0) {
    time++;
    var out_truck = bridge.shift();
    bridge_weight -= out_truck;
    if (truck_weights.length > 0) {
      if (bridge_weight + truck_weights[0] <= weight) {
        var new_truck = truck_weights.shift();
        bridge.push[new_truck];
        bridge_weight += new_truck;
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}
