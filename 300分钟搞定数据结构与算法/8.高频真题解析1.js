/* 例题分析一
LeetCode 第 03 题：给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

示例 1
输入："abcabcbb"
输出：3
解释：因为无重复字符的最长子串是"abc"，其长度为3。


示例 2
输入："bbbbb"
输出：1
解释：因为无重复字符的最长子串是 "b"，其长度为 1。

示例 3
输入："pwwkew"
输出：3
解释：因为无重复字符的最长子串是 "wke"，其长度为 3。
注意：答案必须是子串的长度，"pwke" 是一个子序列，不是子串。 */

var lengthOfLongest = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (let n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}

var lengthOfLongest = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (let n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}

var lengthOfLongest = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (let n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}