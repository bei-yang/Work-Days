var majorityElement = function (nums) {
  let obj = {}
  const res = []
  for (let item of nums) {
    if (!obj[item]) {
      obj[item] = 1
    } else {
      obj[item] += 1
    }
  }
  for (let prop in obj) {
    if (obj[prop] > nums.length / 3) {
      res.push(obj[prop])
    }
  }
  return res
};

console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]))