/* LeetCode 第 340 题：给定一个字符串 s ，找出至多包含 k 个不同字符的最长子串 T。

示例 1
输入: s = "eceba", k = 2
输出: 3

解释: 则 T 为 "ece"，所以长度为 3。

示例 2
输入: s = "aa", k = 1
输出: 2

解释: 则 T 为 "aa"，所以长度为 2。 */

var lengthOfLongestSubstringKDistinct = function (s, k) {
  let n = s.length
  if (n < k || n === 0) return n
  let left = 0
  let right = 0
  let windows = {}
  let match = 0
  let maxLen = Number.MIN_SAFE_INTEGER
  while (right < n) {
    let c1 = s[right]
    windows[c1] ? windows[c1]++ : (windows[c1] = 1) && match++
    right++
    while (match > k) {
      let c2 = s[left]
      if (windows[c2] === 1) {
        match--
      }
      windows[c2]--
      left++
    }
    maxLen = Math.max(maxLen, right - left)
  }
  return maxLen
}
