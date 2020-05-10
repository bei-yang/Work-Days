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
//   findValues(n, capacity, ks, weights, values)
//   return ks[n][capacity]
// }

// function findValues (n, capacity, ks, weights, values) {
//   let i = n
//   let k = capacity
//   while (i > 0 && k > 0) {
//     if (ks[i][k] !== ks[i - 1][k]) {
//       console.log('解---', 'w---', weights[i - 1], 'v---', values[i - 1])
//       i--
//       k -= ks[i][k]
//     } else {
//       i--
//     }
//   }
// }

// console.log(knapSack(5, [2, 3, 4], [3, 4, 5], 3))

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
// }

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
//         ks[i][w] = Math.max(values[i - 1] + ks[i - 1][w - weights[i - 1]], ks[i - 1][w])
//       } else {
//         ks[i][w] = ks[i - 1][w]
//       }
//     }
//   }
//   return ks[n][capacity]
// }

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
//         ks[i][w] = Math.max(values[i - 1] + ks[i - 1][w - weights[i - 1]], ks[i - 1][w])
//       } else {
//         ks[i][w] = ks[i - 1][w]
//       }
//     }
//   }
//   let val = findValues(n, capacity, ks, weights, values)
//   return { capacity: ks[n][capacity], val }
// }

// function findValues (n, capacity, ks, weights, values) {
//   let i = n
//   let k = capacity
//   let res = []
//   while (i > 0 && k > 0) {
//     if (ks[i][k] !== ks[i - 1][k]) {
//       res.push({ weight: weights[i - 1], value: values[i - 1] })
//       i--
//       k -= ks[i][k]
//     } else {
//       i--
//     }
//   }
//   return res
// }
console.log(knapSack(5, [2, 3, 4], [3, 4, 5], 3))



function knapSack (capacity, weights, values, n) {
  const ks = []
  for (let m = 0; m <= n; m++) {
    ks[m] = []
  }
  for (let i = 0; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (i === 0 || w === 0) {
        ks[i][w] = 0
      } else if (weights[i - 1] <= w) {
        ks[i][w] = Math.max(values[i - 1] + ks[i - 1][w - weights[i - 1]], ks[i - 1][w])
      } else {
        ks[i][w] = ks[i - 1][w]
      }
    }
  }
  let res = findValue(ks, capacity, weights, values, n)
  return { res, capacity: ks[n][capacity] }
}

function findValue (ks, capacity, weights, values, n) {
  let i = n
  let j = capacity
  let res = []
  while (i > 0 && j > 0) {
    if (ks[i][j] !== ks[i - 1][j]) {
      res.push({ weight: weights[i - 1], value: values[i - 1] })
      i--
      j -= ks[i][j]
    } else {
      i--
    }
  }
  return res
}