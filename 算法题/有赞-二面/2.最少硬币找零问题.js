// function minCoinChange (coins, amount) {
//   const cache = []
//   let num = 0
//   const makeChange = (value) => {
//     if (!value) {
//       return []
//     }
//     if (cache[value]) {
//       return cache[value]
//     }
//     let min = []
//     let newMin
//     let newAmount
//     for (let i = 0; i < coins.length; i++) {
//       const coin = coins[i]
//       newAmount = value - coin
//       if (newAmount >= 0) {
//         newMin = makeChange(newAmount)
//       }
//       if (newAmount >= 0 && (newMin.length < min.length || !min.length) && (newMin.length || !newAmount)) {
//         min = [coin].concat(newMin)
//       }
//       console.log('new Min' + min + 'for' + amount)
//     }
//     cache[value] = min
//     num++
//     return { count: num, arr: cache[value] }
//   }
//   return makeChange(amount)
// }

console.log(minCoinChange([1, 2, 3], 6))


// function minCoinChange (coins, amount) {
//   const cache = []
//   let num = 0
//   const makeChange = (value) => {
//     if (!value) {
//       return []
//     }
//     if (cache[value]) {
//       return cache[value]
//     }
//     let min = []
//     let newMin
//     let newAmount
//     for (let i = 0; i < coins.length; i++) {
//       const coin = coins[i]
//       newAmount = value - coin
//       if (newAmount >= 0) {
//         newMin = makeChange(newAmount)
//       }
//       if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
//         min = [coin].concat(newMin)
//       }
//     }
//     cache[value] = min
//     num++
//     return { num, minArr: cache[value] }
//   }
//   return makeChange(amount)
// }

// function minCoinChange (coins, amount) {
//   const cache = []
//   let num = 0
//   const makeChange = (value) => {
//     if (!value) {
//       return []
//     }
//     if (cache[value]) {
//       return cache[value]
//     }
//     let min = []
//     let newMin
//     let newAmount
//     for (let i = 0; i < coins.length; i++) {
//       const coin = coins[i]
//       newAmount = value - coin
//       if (newAmount >= 0) {
//         newMin = makeChange(newAmount)
//       }
//       if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
//         min = [coin].concat(newMin)
//       }
//     }
//     cache[value] = min
//     num++
//     return { num, arr: cache[value] }
//   }
//   return makeChange(amount)
// }


function minCoinChange (coins, amount) {
  const cache = []
  let num = 0
  const makeChange = (value) => {
    if (!value) return []
    if (cache[value]) return cache[value]
    let min = []
    let newMin
    let newAmount
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
        min = [coin].concat(newMin)
      }
    }
    cache[value] = min
    num++
    return { num, arr: cache[value] }
  }
  return makeChange(amount)
}


function minCoinChange (coins, amount) {
  const cache = []
  let num = 0
  const makeChange = (value) => {
    if (!value) return []
    if (cache[value]) return cache[value]
    let min = []
    let newMin
    let newAmount
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      if (newAmount >= 0 && (newMin.length < min.length - 1 || !min.length) && (newMin.length || !newAmount)) {
        min = [coin].concat(newMin)
      }
    }
    cache[value] = min
    num++
    return { num, arr: cache[value] }
  }
  return makeChange(amount)
}

