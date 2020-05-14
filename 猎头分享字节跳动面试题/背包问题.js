/* function knapSack (capacity, weights, values) {
  n = weights.length
  const ks = []
  for (let i = 0; i < n; i++) {
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





 */










function knapsack (weights, values, capacity) {
  let n = weights.length
  let arr = []
  for (let i = 0; i <= n; i++) {
    arr[i] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= capacity; j++) {
      if (i === 0 || j === 0) {
        arr[i][j] = 0
      } else if (weights[i - 1] <= j) {
        const a = values[i - 1] + arr[i - 1][j - weights[i - 1]]
        const b = arr[i - 1][j]
        arr[i][j] = a > b ? a : b
      } else {
        arr[i][j] = arr[i - 1][j]
      }
    }
  }
  return arr[n][capacity]
}

console.log(knapsack([2, 3, 4], [3, 4, 5], 5))