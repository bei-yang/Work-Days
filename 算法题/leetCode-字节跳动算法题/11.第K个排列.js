// var getPermutation = function (n, k) {
//   const nums = [...Array(n)].map((v, i) => i + 1)
//   // console.log(1, nums)
//   const re = []
//   let nextK = k
//   for (let i = n; i > 0; i--) {
//     const factorialN = factorial(i - 1)
//     const num = Math.ceil(nextK / factorialN)
//     re.push(nums.splice(num - 1, 1))
//     nextK = (nextK % factorialN) || factorialN
//   }
//   return re.join('')
// }

// function factorial (n) {
//   if (n <= 1) {
//     return 1
//   }
//   return factorial(n - 1) * n
// }

// console.log(getPermutation(3, 3))

// var getPermutation = function (n, k) {
//   const nums = [...Array(n)].map((v, i) => i + 1)
//   const re = []
//   let nextK = k
//   for (let i = n; i > 0; i--) {
//     const factorialN = factorial(i - 1)
//     const num = Math.ceil(nextK / factorialN)
//     re.push(nums.splice(num - 1, 1))
//     nextK = (nextK % factorialN) || factorialN
//   }
//   return re.join('')
// }

// function factorial (n) {
//   if (n <= 1) {
//     return 1
//   }
//   return factorial(n - 1) * n
// }

var getPermutation = function (n, k) {
  const nums = [...Array(n)].map((v, i) => i + 1)
  const re = []
  let nextK = k
  console.log(1, nums)
  for (let i = n; i > 0; i--) {
    const factorialN = factorial(i - 1)
    console.log(2, factorialN)
    const num = Math.ceil(nextK / factorialN)
    console.log(3, num)
    re.push(nums.splice(num - 1, 1))
    console.log(4, re)
    nextK = (nextK % factorialN) || factorialN
    console.log(5, nextK);
  }
  return re.join('')
}

function factorial (n) {
  if (n <= 1) {
    return 1
  }
  return factorial(n - 1) * n
}

console.log(getPermutation(3, 3))

var getPermutation = function (n, k) {
  const nums = [...Array(n)].map((v, i) => i + 1)
  let re = []
  let nextK = k
  for (let i = n; i > 0; i--) {
    const factorialN = factorial(i - 1)
    const num = Math.ceil(nextK / factorialN)
    re.push(nums.splice(num - 1, 1))
    nextK = (nextK % factorialN) || factorialN
  }
  return re.join('')
}

function factorial (n) {
  if (n < 2) return 1
  return factorial(n - 1) * n
}