// var multiply = function (num1, num2) {
//   const left = '0'.charCodeAt(0)
//   const num1Arr = (num1.length > num2.length ? num2 : num1).split('').map(item => item.charCodeAt(0) - left)
//   const num2Arr = (num1.length > num2.length ? num1 : num2).split('').map(item => item.charCodeAt(0) - left)
//   let res = []
//   for (let i = num1Arr.length - 1; i > -1; i--) {
//     for (let j = num2Arr.length - 1; j > -1; j--) {
//       const resArr = (num1Arr[i] * num2Arr[j]).toString().split('')
//       resArr.reverse()
//       const index = num2Arr.length - 1 - j + num1Arr.length - 1 - i
//       let next = 0
//       let k = 0
//       while (k < resArr.length || next !== 0) {
//         let sum = (res[index + k] | 0) + next
//         if (k < resArr.length) {
//           sum += +resArr[k]
//         }
//         res[index + k] = sum % 10
//         next = sum / 10 >= 1 ? 1 : 0
//         k++
//       }
//     }
//   }
//   while (res.length > 1 && res[res.length - 1] === 0) {
//     res.pop()
//   }
//   return res.reverse().join('')
// }

var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  let len1 = num1.length
  let len2 = num2.length
  let res = new Array(len1 + len2).fill(0)
  for (let i = len1 - 1; i >= 0; i--) {
    for (let j = len2 - 1; j >= 0; j--) {
       const mu1 = num1[i] * num2[j]
      const p1 = i + j
      const p2 = i + j + 1
      const sum = mu1 + res[p2]
      res[p1] += Math.floor(sum / 10)
      res[p2] = sum % 10
    }
  }
  if (res[0] === 0) res.shift()
  return res.join('')
}

console.log(multiply('123', '456'))