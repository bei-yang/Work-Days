/* 举例：LeetCode 第 516 题，在一个字符串 S 中求最长的回文子序列。例如给定字符串为 dccac，最长回文就是 ccc。 */

var longeest = function (s) {
  const dp = Array.from(new Array(s.length), () => new Array(s.length).fill(0))
  const len = s.length
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i; j < len; j++) {
      if (i === j) {
        dp[j][j] = 1
        continue
      }
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][len - 1]
}

/* 
  背包问题
*/
// function knapSack (capacity, weights, values, n) {
//   const ks = []
//   for (let i = 0; i <= n; i++) {
//     ks[i] = []
//   }
//   for (let i = 0; i <= n; i++) {
//     for (let w = 0; w <= capacity; w++) {
//       if (i === 0 || w === 0) {
//         ks[i][w] = 0
//       } else if (weights[i - 1] <= w) {
//         const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
//         const b = ks[i - 1][w]
//         ks[i][w] = a > b ? a : b
//       } else {
//         ks[i][w] = ks[i - 1][w]
//       }
//     }
//   }
//   return ks[n][capacity]
// }


/* 

*/
// function knapSack (capacity, weights, values) {
//   const n = values.length
//   const ks = []
//   for (let i = 0; i <= n; i++) {
//     ks[i] = []
//   }
//   for (let i = 0; i <= n; i++) {
//     for (let w = 0; w <= capacity; w++) {
//       if (i == 0 || w == 0) {
//         ks[i][w] = 0
//       } else if (weights[i - 1] <= w) {
//         const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
//         const b = ks[i - 1][w]
//         ks[i][w] = a > b ? a : b
//       } else {
//         ks[i][w] = ks[i - 1][w]
//       }
//     }
//   }
//   return ks[n][capacity]
// }


console.log(knapSack(5, [2, 3, 4], [3, 4, 5], 3))

function knapSack (capacity, weights, values) {
  const n = values.length
  const ks = []
  for (let i = 0; i <= n; i++) {
    ks[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
        const b = ks[i - 1][w]
        ks[i][w] = a > b ? a : b
      } else {
        ks[i][w] = ks[i - 1][w]
      }
    }
  }
  return ks[n][capacity]
}

function knapSack (capacity, weights, values) {
  const n = values.length
  const ks = []
  for (let i = 0; i <= n; i++) {
    ks[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
        const b = ks[i - 1][w]
        ks[i][w] = a > b ? a : b
      } else {
        ks[i][w] = ks[i - 1][w]
      }
    }
  }
  return ks[n][capacity]
}


function knapSack (capacity, weights, values) {
  const n = values.length
  const ks = []
  for (let i = 0; i <= n; i++) {
    ks[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
        const b = ks[i - 1][w]
        ks[i][w] = a > b ? a : b
      } else {
        ks[i][w] = ks[i - 1][w]
      }
    }
  }
  return ks[n][capacity]
}

function knapSack (capacity, weights, values) {
  const n = values.length
  const ks = []
  for (let i = 0; i <= n; i++) {
    ks[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
        const b = ks[i - 1][w]
        ks[i][w] = a > b ? a : b
      } else {
        ks[i][w] = ks[i - 1][w]
      }
    }
  }
  return ks[n][capacity]
}

function knapSack (capacity, weights, values) {
  const n = values.length
  const ks = []
  for (let i = 0; i <= n; i++) {
    ks[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0
      } else if (weights[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
        const b = ks[i - 1][w]
        ks[i][w] = a > b ? a : b
      } else {
        ks[i][w] = ks[i - 1][w]
      }
    }
  }
  return ks[n][capacity]
}

function knapSack (capacity, weights, values) {
  const len = values.length
  const ks = []
  for (let i = 0; i <= len; i++) {
    ks[i] = []
  }
  for (let m = 0; m <= len; m++) {
    for (let n = 0; n <= capacity; n++) {
      if (m === 0 || n === 0) {
        ks[m][n] = 0
      } else if (weight[i - 1] <= w) {
        const a = values[i - 1] + ks[i - 1][w - weights[i - 1]]
        const b = ks[i - 1][w]
        ks[i][w] = a > b ? a : b
      } else {
        ks[i][w] = ks[i - 1][w]
      }
    }
  }
  return ks[n][capacity]
}


function knapSack(capacity,weights,values){
  const len=values.length
  const ks=[]
  for(let i=0;i<=len;i++){
    ks[i]=[]
  }
  for(let m=0;m<=len;m++){
    for(let n=0;n<=capacity;n++){
      if(m===0||n===0){
        ks[m][n]=0
      }else if(weights[m-1]<=n){
        const a=values[m-1]+ks[m-1][n-weights[m-1]]
        const b=ks[m-1][n]
        ks[m][n]=a>b?a:b
      }else{
        ks[m][n]=ks[m-1][n]
      }
    }
  }
  return ks[len][capacity]
}
console.log(knapSack(5, [2, 3, 4], [3, 4, 5], 3))