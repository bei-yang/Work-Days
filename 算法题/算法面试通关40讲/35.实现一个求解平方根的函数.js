// 69题

var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x
  }
  let left = 1
  let right = x
  while (left <= right) {
    let middle = left + ((right - left) >> 1)
    if (middle * middle == x) {
      return middle
    } else if (middle * middle > x) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return right
}