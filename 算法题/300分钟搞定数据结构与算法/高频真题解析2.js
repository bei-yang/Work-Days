/* LeetCode 第 56 题：给出一个区间的集合，请合并所有重叠的区间。
示例 1
输入: [[1,3], [2,6], [8,10], [15,18]]
输出: [[1,6], [8,10], [15,18]]

解释: 区间 [1,3] 和 [2,6] 重叠，将它们合并为 [1,6]。

示例 2

输入: [[1,4], [4,5]]
输出: [[1,5]]

解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。 */

var merge = function (intervals) {
  if (intervals.length === 0) {
    return []
  }
  var res = []
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])
  for (var i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i])
    } else if (intervals[i][1] > res[res.length - 1][1]) {
      res[res.length - 1][1] = intervals[i][1]
    }
  }
  return res
}

/* 435. 无重叠区间
给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

注意:

可以认为区间的终点总是大于它的起点。
区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
示例 1:

输入: [ [1,2], [2,3], [3,4], [1,3] ]

输出: 1

解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2:

输入: [ [1,2], [1,2], [1,2] ]

输出: 2

解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
示例 3:

输入: [ [1,2], [2,3] ]

输出: 0

解释: 你不需要移除任何区间，因为它们已经是无重叠的了。 */

var eraseOverLapIntervals = function (intervals) {
  let len = intervals.length
  if (len <= 2) return 0
  let count = 1
  intervals.sort((a, b) => a[1] - b[1])
  let prev = 0
  for (let i = 0; i < len; i++) {
    if (intervals[prev][1] <= intervals[i][0]) {
      count += 1
      prev = i
    }
  }
  return len - count
}