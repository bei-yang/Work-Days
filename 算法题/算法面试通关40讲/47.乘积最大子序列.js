// 152 题

// 暴力法
var maxProduct = function (nums) {
  if (nums.length === 0) return null
  if (nums.length === 1) return nums[0]
  let max = Number.MIN_SAFE_INTEGER
  let mid
  for (let i = 0; i < nums.length; i++) {
    mid = nums[i]
    max = Math.max(max, mid)
    for (let j = i + 1; j < nums.length; j++) {
      mid = mid * nums[j]
      max = Math.max(max, mid)
    }
  }
  return max
}

// dp
var maxProduct = function (nums) {
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]

  for (let i = 1; i < nums.length; i++) {
    let tmp = min
    min = Math.min(nums[i], Math.min(max * nums[i], min * nums[i]))
    max = Math.max(nums[i], Math.max(max * nums[i], tmp * nums[i]))
    res = Math.max(res, max)
  }
  return res
}