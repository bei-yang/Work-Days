/* 

*/

// var maxPrduct = function (nums) {
//   if (!nums.length) {
//     return null
//   }
//   let state = []
//   let max = nums[0]
//   for (let i = 0; i < nums.length; i++) {
//     state[i] = []
//   }
//   state[0][0] = nums[0]
//   state[0][1] = nums[0]
//   for (let i = 1; i < nums.length; i++) {
//     state[i][0] = Math.max(state[i - 1][0] * nums[i], nums[i], state[i - 1][1] * nums[i])
//     state[i][1] = Math.max(state[i - 1][1] * nums[i], nums[i], state[i - 1][0] * nums[i])
//     if (max < state[i][0]) max = state[i][0]
//   }
//   return max
// }


var maxProduct = function (nums) {
  if (!nums.length) return null
  let [max, curMax, curMin] = [nums[0], nums[0], nums[0]]

  for (let i = 1; i < nums.length; i++) {
    [curMax, curMin] = [curMax * nums[i], curMin * nums[i]];
    [curMax, curMin] = [Math.max(curMax, curMin, nums[i]), Math.min(curMax, curMin, nums[i])]
    if (max < curMax) max = curMax;
  };
  return max
};

var maxProduct = function (nums) {
  if (!nums.length) return null
  let [max, curMax, curMin] = [nums[0], nums[0], nums[0]]

  for (let i = 1; i < nums.length; i++) {
    [curMax, curMin] = [curMax * nums[i], curMin * nums[i]];
    [curMax, curMin] = [Math.max(curMax, curMin, nums[i]), Math.min(curMax, curMin, nums[i])];
    if (max < curMax) max = curMax;
  };
  return max
};


console.log(maxProduct([2, 3, -2, 4]))