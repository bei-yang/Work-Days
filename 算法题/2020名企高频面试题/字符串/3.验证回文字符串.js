/* 验证回文字符串 Ⅱ
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:

输入: "aba"
输出: True
示例 2:

输入: "abca"
输出: True
解释: 你可以删除c字符。
注意:

字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。 */

var validPalindrome = function (s, flag = true) {
  let l = 0
  let r = s.length - 1
  while (l < r && s[l] === s[r]) {
    l++
    r--
  }
  if (r <= l) return true
  if (flag === true) return validPalindrome(s.slice(l, r), false) || validPalindrome(s.slice(l + 1, r + 1), false)
  return false
};
console.log(validPalindrome('abc'))