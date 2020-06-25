// 千分位格式化

function format (num) {
    let str = num + ''
    let arr = str.split('.')
    // console.log(arr)
    let leftReg = /\d{1,3}(?=(\d{3})+$)/g
    let rightReg = /\d{3}/g
    let left = arr[0].replace(leftReg, '$&,')
    let right = null
    arr.length > 1 && (right = arr[1].replace(rightReg, '$&,'))
    // console.log(left, right)
    return left + (right ? ('.' + right) : '')
  return String(num).replace(/\d{1,3}(?=(\d{3})+(\.|$))/g, '$&,')
}
console.log(format(1267.123456789891))
console.log(format(1234567))
console.log(format(0.1234567))