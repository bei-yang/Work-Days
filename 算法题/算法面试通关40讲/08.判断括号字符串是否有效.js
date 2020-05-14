var isValid = function (s) {
  let arr = []
  let len = s.length
  if (len % 2) return false
  for (let i = 0; i < len; i++) {
    let letter = s[i]
    switch (letter) {
      case '(': {
        arr.push(letter)
        break
      }
      case '[': {
        arr.push(letter)
        break
      }
      case '{': {
        arr.push(letter)
        break
      }
      case ')': {
        if (arr.pop() !== '(') return false
        break
      }
      case ']': {
        if (arr.pop() !== '[') return false
        break
      }
      case '}': {
        if (arr.pop() !== '{') return false
        break
      }
    }
  }
  return !arr.length
}