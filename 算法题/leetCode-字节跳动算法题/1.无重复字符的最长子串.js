var lengthOfLongestSubstring = function (s) {
  let num = 0, res = 0, m = ''
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


