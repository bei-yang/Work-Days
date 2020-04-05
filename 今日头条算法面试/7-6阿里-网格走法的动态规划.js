
console.log(f2(4, 3))


// function f (x, y, dp = []) {
//   if (!dp[y]) {
//     dp[y] = []
//   }
//   if (dp[y][x] !== undefined) {
//     return dp[y][x]
//   }

//   if (x > 0 && y > 0) {
//     return f(x - 1, y) + f(x, y - 1)
//   } else if (x > 0) {
//     return f(x - 1, y)
//   } else if (y > 0) {
//     return f(x, y - 1)
//   } else {
//     return 1
//   }
// }

function f (w, h) {
  const dp = []
  for (let y = 0; y <= h; y++) {
    dp[y] = []
    for (let x = 0; x <= w; x++) {
      if (x === 0 && y === 0) {
        dp[y][x] = 1
      } else if (x === 0) {
        dp[y][x] = dp[y - 1][x]
      } else if (y === 0) {
        dp[y][x] = dp[y][x - 1]
      } else {
        dp[y][x] = dp[y][x - 1] + dp[y - 1][x]
      }
    }
  }
  return dp[h][w]
}

function f2 (x, y) {
  return jc(x + y) / (jc(x) * jc(y))
}

function jc (x) {
  if (x < 2) return x
  return x * jc(x - 1)
}
