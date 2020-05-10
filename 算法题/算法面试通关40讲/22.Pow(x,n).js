var myPow = function (x, n) {
  if (n === 0) return 1
  if (n === 1) return x
  if (n === -1) return 1 / x
  let newN = Math.floor(n / 2)
  if (n % 2 === 1) return myPow(x, newN) * myPow(x, newN) * x
  return myPow(x, newN) * myPow(x, newN)
}

console.log(myPow(34.00515, -3))