// var generateParenthesis = function (n) {
//   const list = []
//   const _gen = function (left, right, n, res) {
//     if (left === n && right === 0) {
//       list.push(res)
//     }
//     if (left < n) {
//       _gen(left + 1, right, n, re + '(')
//     }
//     if (left > right && right < n) {
//       _gen(left, right + 1, n, res + ')')
//     }
//   }
//   _gen(0, 0, n, '')
//   return list
// }

function generateParenthesis (n) {
  if (n === 1) return ['()']
  const list = []
  const _gen = function (left, right, n, res) {
    if (left === n && right === n) {
      return list.push(res)
    }
    if (left < n) {
      _gen(left + 1, right, n, res + '(')
    }
    if (left > right && right < n) {
      _gen(left, right + 1, n, res + ')')
    }
  }
  _gen(0, 0, n, '')
  return list
}

console.log(generateParenthesis(3))

function generateParenthesis (n) {
  if (n === 1) return ['()']
  const list = []
  const _gen = function (left, right, res) {
    if (left === n && right === n) {
      return list.push(res)
    }
    if (left < n) {
      _gen(left + 1, right, n, res + '(')
    }
    if (left > right && right < n) {
      _gen(left, right + 1, n, res + ')')
    }
  }
  _gen(0, 0, '')
  return list
}