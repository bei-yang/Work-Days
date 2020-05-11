// 正则
function format (num) {
  let reg = /\d{1,3}(?=(\d{3})+$)/g
  return (num + '').replace(reg, '$&,')
}

function cformat (num) {
  num = (num + '').split('').reverse().join('')
  let str = ''
  let length = num.length
  for (let i = 0; i < length; i++) {
    if ((i + 1) % 3 === 0) {
      str += num[i] + ','
      continue
    }
    str += num[i]
  }
  return str.split('').reverse().join('')
}

console.log(format(12345678))