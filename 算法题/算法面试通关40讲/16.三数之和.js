var threeSum = function (nums) {
  if (nums.length < 3) return []
  let res = []
  let arr = nums.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) break
    if (i > 0 && arr[i] === arr[i - 1]) continue
    let L = i + 1
    let R = arr.length - 1
    while (L < R) {
      let sum = arr[i] + arr[L] + arr[R]
      if (sum === 0) {
        res.push([arr[i], arr[L], arr[R]])
        while (arr[L] === arr[L + 1]) {
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
  return res
}