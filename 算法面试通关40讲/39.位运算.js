/* 
  338.比特位计数
*/

var countBits = function (num) {
  let dp = [0]
  let n = 1
  while (n < num) {
    dp[n] = dp[n & (n - 1)] + 1
    n++
  }
  return dp
}

// console.log(countBits(5))

var countBits = function (num) {
  let dp = [0]
  let n = 1
  while (n < num) {
    dp[n] = dp[n & (n - 1)] + 1
    n++
  }
  return dp
}