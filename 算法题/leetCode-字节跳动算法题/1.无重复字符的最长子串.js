var lengthOfLongestSubstring = function (s) {
  let num = 0,
    res = 0,
    m = ''
  for (n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
};



var lengthOfLongestSubstring = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}

var lengthOfLongestSubstring = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}

var leg = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}





const lengthOfLongestSubstring = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (let n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}

const lengthof = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (let n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length
    }
  }
  return res
}

const lengthof = function (s) {
  let num = 0
  let res = 0
  let m = ''
  for (let n of s) {
    if (m.indexOf(n) === -1) {
      m += n
      num++
      res = Math.max(num, res)
    } else {
      m += n
      m = m.slice(m.indexOf(n) + 1)
      num = m.length

    }
  }
}

/**
 * @description: 位运算
 * @param {type} 
 * @return {type} 
 */

 