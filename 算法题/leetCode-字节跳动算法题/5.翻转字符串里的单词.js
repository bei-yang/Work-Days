var reverseWords = function (s) {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      if (!(i > 0 && s[i - 1] == ' ')) {
        str += s[i]
      }
    } else {
      str += s[i]
    }
  }
  return str.split(' ').reverse().join(' ')
}

console.log(reverseWords('a good     ex'))





var reverseWords = function (s) {
  // return s.trim().split(/\s+/g).reverse().join('')

  return s.trim().split(/\s+/g).reverse().join('')
}

var reverseWords = function (s) {
  return s.trim().split(/\s+/g).reverse().join('')
}