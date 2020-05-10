var trap = function (height) {
  let leftMax = [], rightMax = [], count = 0, n = height.length

  leftMax[0] = 0
  rightMax[n - 1] = 0

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1])
  }

  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1])
  }

  for (let i = 0; i < n; i++) {
    let min = Math.min(leftMax[i], rightMax[i]), curr = height[i]
    if (curr < min) count += (min - curr)
  }
  return count
}

var trap = function (height) {
  let leftMax = [], rightMax = [], count = 0, n = height.length
  leftMax[0] = 0
  rightMax[0] = 0
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1])
  }
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1])
  }
  for (let i = 0; i < n; i++) {
    let min = Math.min(leftMax[i], rightMax[i])
    let curr = height[i]
    if (curr < min) count += (min - curr)
  }

  return count 
}