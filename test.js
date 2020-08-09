// // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }

// // 本题为考试多行输入输出规范示例，无需提交，不计分。
// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     for(var j = 0;j < lines.length; j++){
//         ans += parseInt(lines[j]);
//     }
// }
// print(ans);

// let arr = ['1G', '2M']

// function transferWord (str, type = 'M') {
//   let arr = str.split(type)
//   console.log(666, arr)
//   let num = 0
//   // M的处理
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (!arr[i]) continue
//     if (!Number(arr[i])) {
//       return transferWord(arr[i], type === 'M' ? 'G' : 'T')
//     } else {
//       let obj = {
//         'M': () => {
//           num += Number(arr[i])
//         },
//         'G': () => {
//           num += Number(arr[i]) * 1024
//         },
//         'T': () => {
//           num += Nuber(arr[i]) * 1024 * 1024
//         }
//       }
//       obj[type]()
//     }
//   }
//   console.log(999, num)
//   return num
// }


// function main (arr) {
//   arr.sort((a, b) => {
//     return transferWord(a) - transferWord(b)
//   })
//   return arr
// }

// let _arr = main(arr)

// for (let i = 0; i < _arr.length; i++) {
//   console.log(_arr[i])
// }

// let pl = new Array()
// for (let i = 2, index = 0; index < 100; i++) {
//   if (p(i) == 1) {
//     pl.push(i)
//     index++
//   }
// }

// function p (n) {
//   if (n < 2) {
//     return 0
//   }
//   if (n == 2) {
//     return 1
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) { return 0 }
//   }
//   return 1
// }

// function f (n) {
//   let pIndex = 0
//   let ret = ''

//   for (; pIndex < 100;) {
//     if (n % pl[pIndex] == 0) {
//       ret += ' ' + pl[pIndex]
//       n /= pl[pIndex]
//     } else {
//       if (p(n)) {
//         ret += ' ' + n
//         return ret
//       }
//       pIndex++
//     }
//   }
//   return ret
// }

// console.log(f(15).substring(1))



function f (arr, res = []) {
  let len = arr.length
  if (len === 0) return ''
  if (len === 1) return arr[0]
  for (let i = 0; i < len; i++) {
    res.concat(f(arr.slice(i + 1)))
  }
  return res
}

console.log(f([a, b, c]))