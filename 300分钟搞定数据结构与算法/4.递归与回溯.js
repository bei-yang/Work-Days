/* LeetCode 第 91 题，解码的方法。

 

一条包含字母 A-Z 的消息通过以下方式进行了编码：

'A' -> 1

'B' -> 2

…

 

'Z' -> 26

 

给定一个只包含数字的非空字符串，请计算解码方法的总数。
 */
var numDecodings = function (s) {
  if (s[0] === 0) {
    return 0
  }
  let n = s.length
  let dp = new Array(n + 1).fill(0)
  dp[0] = dp[1] = 1
  for (let i = 2; i <= n; i++) {
    if (s[i - 1] !== 0) {
      dp[i] = dp[i] + dp[i - 1]
    }
    if (s[i - 1] === 1 || (s[i - 1] === 2 && s[i - 1] <= 6)) {
      dp[i] = dp[i] + dp[i - 2]
    }
  }
  return dp[n]
}




/* LeetCode 第 247 题：找到所有长度为 n 的中心对称数。



示例

输入:  n = 2

输出: ["11","69","88","96"] */

