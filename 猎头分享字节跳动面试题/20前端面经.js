// function sum (x) {
//   console.log('x:', ...arguments)
//   if (arguments.length === 1) return x
//   let arr = [...arguments]
//   let sum = arr.reduce((pre, item) => {
//     return pre + item
//   })
//   return sum
// }

function sum (...args) {
  if ([...args].length == 1) {
    let sum2 = [...args][0];
    var suum = function (y) {
      sum2 += y;
      // console.log(`output ${sum2}`)
      return suum;
    }
    //suum.valueOf = function () {
    suum.toString = function () {
      return sum2;
    }
    return suum;
  } else {
    let sum1 = 0;
    for (var i = 0; i < [...args].length; i++) {
      sum1 += [...args][i];
    }
    return sum1
  }
}

console.log(sum(1)(2)(3))