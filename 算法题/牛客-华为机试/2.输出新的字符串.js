function changeStr (str) {
  if (str.length < 8) {
    console.log(str + new Array(8 - str.length).fill(0).join(''))
  } else {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
      newStr += str[i]
      if (newStr.length === 8) {
        console.log(newStr)
        newStr = ''
      }
    }
  }
}

let str1 = 'urivthvtlqqerctlxmjvkgvfclaaduwmaadedpadanl'
let str2 = 'batkqdhjnrwtsmzidswdnenqpsblsszldyttytrgenaizwehntqiaaufble'
// changeStr(str1)
// changeStr(str2)

console.log('uqic^g`(s&jnl(m#vt!onwdj(ru+os&wx'.split('').map(item => {
  // console.log('uqic^g`(s&jnl(m#vt!onwdj(ru+os&wx'.split(''))
  // console.log(item.charCodeAt() > 0 && item.charCodeAt() < 127)
  // // item.charCodeAt() > 0
  console.log(item.charCodeAt())
  if (item.charCodeAt() > 0 && item.charCodeAt() < 127) {
    return item
  }
}).length)