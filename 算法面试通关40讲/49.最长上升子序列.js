/* 
  300. 最长上升子序列

  给定一个无序的整数数组，找到其中最长上升子序列的长度。

示例:

输入: [10,9,2,5,3,7,101,18]
输出: 4 
解释: 最长的上升子序列是 [2,3,7,101]，它的长度是 4。
说明:

可能会有多种最长上升子序列的组合，你只需要输出对应的长度即可。
你算法的时间复杂度应该为 O(n2) 。
进阶: 你能将算法的时间复杂度降低到 O(n log n) 吗?

*/

/* 
  1. 暴力求解 2^n
  2. DP   n^2
    DP[i]  从头-->i元素，最长子序列的长度

    DP[i]=Max{
      DP[j]+1      j:0-->i-1且a[j]<a[i]
    }

  3. 二分查找  N*logN
*/
var lengthOfLIS = function (nums) {
  let n = nums.length
  if (n === 0) {
    return 0
  }
  let dp = new Array(n).fill(1)
  let max = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(max, dp[i])
  }
  return max
}
