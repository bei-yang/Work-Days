var merge = function (intervals) {
  if (!intervals || !intervals.length) return []
  intervals.sort((a, b) => a[0] - b[0])
  console.log(1, intervals)
  let ans = [intervals[0]]
  console.log(2, ans)
  for (let i = 1; i < intervals.length; i++) {
    if (ans[ans.length - 1][1] >= intervals[i][0]) {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
    } else {
      ans.push(intervals[i])
    }
  }
  return ans
}

console.log(merge([[1, 3], [8, 10], [2, 6], [15, 18]]))

var merge = function (intervals) {
  if (!intervals || !intervals.length) return []
  intervals.sort((a, b) => a[0] - b[0])
  let ans = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (ans[ans.length - 1][1] >= intervals[i][0]) {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
    } else {
      ans.push(intervals[i])
    }
  }
  return ans
}

var merge = function (intervals) {
  if (!intervals || !intervals.length) return []
  intervals.sort((a, b) => a[0] - b[0])
  let ans = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (ans[ans.length - 1][1] >= intervals[i][0]) {
      ans[ans.length - 1][1] = Math.max(ans[ans.length - 1][1], intervals[i][1])
    } else {
      ans.push(intervals[i])
    }
  }
  return ans
}