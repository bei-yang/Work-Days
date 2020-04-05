function lastWordLength (str) {
  if (str.trim().indexOf(' ') === -1) return str.length
  let arr = str.split(' ')
  return arr[arr.length - 1].length
}


console.log(lastWordLength('XSUWHQ'))