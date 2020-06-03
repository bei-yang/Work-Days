/* 最小覆盖子串
给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字符的最小子串。

示例：

输入: S = "ADOBECODEBANC", T = "ABC"
输出: "BANC"
说明：

如果 S 中不存这样的子串，则返回空字符串 ""。
如果 S 中存在这样的子串，我们保证它是唯一的答案。 */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  // let res = ''
  let left = 0
  let right = 0
  let needs = {}
  let windows = {}
  let match = 0
  let start = 0
  let minLen = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < t.length; i++) {
    needs[t[i]] ? needs[t[i]]++ : needs[t[i]] = 1
  }
  let needsLen = Object.keys(needs).length
  console.log(needsLen)
  while (right < s.length) {
    let c1 = s[right]
    if (needs[c1]) {
      windows[c1] ? windows[c1]++ : windows[c1] = 1
      if (windows[c1] === needs[c1]) {
        match++
      }
    }
    right++
    while (match == needsLen) {
      if (right - left < minLen) {
        start = left
        minLen = right - left
      }
      let c2 = s[left]
      if (needs[c2]) {
        windows[c2]--
        if (windows[c2] < needs[c2]) {
          match--
        }
      }
      left++
    }
  }
  return minLen === Number.MAX_SAFE_INTEGER ? '' : s.substr(start, minLen)
};
console.log(minWindow("ADOBECODEBANC", "ABC"))