/* 
  121,122,123,309,188,714

  1.暴力解
  2.DP
    MP[i]=MP[i-1]+(-a[i]) 买股票
    MP[i]=MP[i-1]+(a[i])  卖股票

  当发现状态不够，增加数组或者维度

  MP[i][j]   j=0||1  ,0:没有股票，1有股票

  MP[i,0]= MP[i-1,0]   // 不动
         = MP[i-1,1]+a[i]  // 卖股票
  选没有股票的最大

  MP[i,1]=MP[i-1,1]  // 不动
         =MP[i-1,0]-a[i]  // 买股票
  选有股票的最大值

  当要买股票的时候，要记录买卖次数，小于K次

  MP[i][j]还不够，还需要一维度记录买卖了多少次:
  
  MP[i][j][k]  i: 表示第i天；j:表示是否有股票，k:表示之前总共交易了多少次

  MP[i][j][k]  <===>   MP[i][k][j]
  维度谁在前谁在后都无所谓的

  
*/

// 121
var maxProfit = function (prices) {
  let valley = prices[0]
  let max = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < valley) {
      valley = prices[i]
    } else {
      max = Math.max(max, prices[i] - valley)
    }
  }
  return max
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

