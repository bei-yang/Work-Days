// var maximalSquare = function (matrix) {
//   let rows = matrix.length
//   let cols = rows > 0 ? matrix[0].length : 0
//   let maxSideLength = 0
//   let prev = 0
//   let dp = new Array(cols + 1).fill(0)

//   for (let i = 1; i <= rows; i++) {
//     for (let j = 1; j <= cols; j++) {
//       let temp = dp[j]
//       if (matrix[i - 1][j - 1] === '1') {
//         dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1
//         maxSideLength = Math.max(dp[j], maxSideLength)
//       } else {
//         dp[j] = 0
//       }
//       prev = temp
//     }
//   }
//   return maxSideLength * maxSideLength
// }


var maximalSquare = function (matrix) {
  let rows = matrix.length,
    cols = rows > 0 ? matrix[0].length : 0;
  let maxSideLength = 0, prev = 0;
  let dp = new Array(cols + 1).fill(0);
  console.log(1, dp)
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      let temp = dp[j];
      console.log(2, temp)
      if (matrix[i - 1][j - 1] === "1") {
        dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1;
        console.log(3, dp[j], dp[j - 1], prev)
        maxSideLength = Math.max(dp[j], maxSideLength);
        console.log(4, maxSideLength)
      } else {
        dp[j] = 0;
      }

      prev = temp
      console.log(5, prev)
    }
  }

  return maxSideLength * maxSideLength;
};

console.log(maximalSquare([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]))

var maximalSquare = function (matrix) {
  if (!matrix.length) return 0
  let rows = matrix.length
  let cols = matrix[0].length
  let maxSideLength = 0
  let prev = 0
  let dp = new Array(cols + 1).fill(0)
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1
        maxSideLength = Math.max(dp[j], maxSideLength)
      } else {
        dp[j] = 0
      }
      prev = temp
    }
  }
  return maxSideLength * maxSideLength
}

var maximalSquare = function (matrix) {
  if (!matrix.length) return 0
  let rows = matrix.length
  let cols = matrix[0].length
  let maxSideLength = 0
  let prev = 0
  let dp = new Array(cols + 1).fill(0)
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1
        maxSideLength = Math.max(dp[j], maxSideLength)
      } else {
        dp[j] = 0
      }
      prev = temp
    }
  }
  return maxSideLength * maxSideLength
}


var maximalSquare = function (matrix) {
  if (!matrix.length) return 0
  let rows = matrix.length
  let cols = matrix[0].length
  let maxSideLength = 0
  let prev = 0
  let dp = new Array(cols + 1).fill(0)
  for (let i = 1; i <= rows.length; i++) {
    for (let j = 1; j <= cols.length; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1
        maxSideLength = Math.max(dp[j], maxSideLength)
      } else {
        dp[j] = 0
      }
      prev = temp
    }
  }
  return maxSideLength * maxSideLength
}


var maximalSquare = function (matrix) {
  if (!matrix.length) return 0
  let rows = matrix.length
  let cols = matrix[0].length
  let maxSideLength = 0
  let prev = 0
  let dp = new Array(cols + 1).fill(0)
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[j] = Math.min(dp[j - 1], prev, dp[j]) + 1
        maxSideLength = Math.max(dp[j], maxSideLength)
      } else {
        dp[j] = 0
      }
      prev = temp
    }
  }
  return maxSideLength * maxSideLength
}