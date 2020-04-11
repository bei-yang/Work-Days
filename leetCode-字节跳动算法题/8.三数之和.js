var threeSum = function (nums) {
  var result = []
  var len = nums.length
  if (nums === null || len < 3) return result
  nums.sort((a, b) => a - b)
  for (var i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    var L = i + 1
    var R = len - 1
    while (L < R) {
      var sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while (nums[L] === nums[L + 1]) {
          L++
        }
        while (nums[R] === nums[R - 1]) {
          R--
        }
        L++
        R--
      } else if (sum < 0) {
        L++
      } else {
        R--
      }
    }
  }
  return result
}

var threeSum = function (nums) {
  var result = []
  var len = nums.length
  if (nums === null || len < 3) {
    return result
  }
  nums.sort((a, b) => a - b)
  for (var i = 0; i < len; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    var L = i + 1
    var R = len - 1
    while (L < R) {
      var sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        result.push([nums[i], nums[L], nums[R]])
        while (nums[L] === nums[L + 1]) {
          L++
        }
        while (nums[R] === nums[R - 1]) {
          R--
        }
        L++
        R--
      } else if (sum < 0) {
        L++
      } else {
        R--
      }
    }
  }
  return result
}