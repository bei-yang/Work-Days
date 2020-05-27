/* 
  72. 编辑距离
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：

插入一个字符
删除一个字符
替换一个字符
 

示例 1：

输入：word1 = "horse", word2 = "ros"
输出：3
解释：
horse -> rorse (将 'h' 替换为 'r')
rorse -> rose (删除 'r')
rose -> ros (删除 'e')
示例 2：

输入：word1 = "intention", word2 = "execution"
输出：5
解释：
intention -> inention (删除 't')
inention -> enention (将 'i' 替换为 'e')
enention -> exention (将 'n' 替换为 'x')
exention -> exection (将 'n' 替换为 'c')
exection -> execution (插入 'u')
*/

/* 
  1. 暴力 
  2. DP 两步曲：  
    1) 状态 DP[i][j]  word1的前i个字符-->word2前j  最少步数
     
    DP[m][n] 
*/
// var minDistance = function (word1, word2) {
//   let n = word1.length
//   let m = word2.length
//   let dp = new Array(n + 1).fill(0).map(() => {
//     new Array(m + 1).fill(0)
//   })
//   for (let i = 0; i <= n; i++) {
//     dp[i][0] = i
//   }
//   for (let j = 0; j <= m; j++) {
//     dp[0][j] = j
//   }
//   for (let i = 0; i <= n; i++) {
//     for (let j = 0; j <= m; j++) {
//       if (i * j) {
//         dp[i][j] = word1[i - 1] === word2[j - 1] ? dp[i - 1][j - 1] : (Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1)
//       } else {
//         dp[i][j] = i + j
//       }
//     }
//   }
//   return dp[n][m]
// }

let minDistance = (word1, word2) => {
  let m = word1.length
  let n = word2.length
  let dp = []
  for (let i = 0; i <= m; i++) {
    dp.push([])
    for (let j = 0; i <= n; j++) {
      if (i * j) {
        dp[i][j] = word[i - 1] === word2[j - 1] ? dp[i - 1][j - 1] : (Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1)
      }else{
        dp[i][j]=i+j
      }
    }
  }
  return dp[m][n]
};

console.log(minDistance('horse', 'ros'))