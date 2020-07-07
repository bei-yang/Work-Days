


var restoreIpAddresses = function (s) {
  let res = []
  if (s.length < 4 || s.length > 12) return res // 边界判断
  dfs(res, s, '', 0)
  return res

  function dfs (res, s, sub, index) {

    if (index === 4 && s.length === 0) res.push(sub.substring(1))

    if (index === 4 || s.length === 0) return

    dfs(res, s.substring(1), sub + '.' + s.substring(0, 1), index + 1) // 一位数

    if (s.charAt(0) !== '0' && s.length > 1) { // 两位数
      dfs(res, s.substring(2), sub + '.' + s.substring(0, 2), index + 1)

      if (s.length > 2 && parseInt(s.substring(0, 3)) <= 255) { // 三位数
        dfs(res, s.substring(3), sub + '.' + s.substring(0, 3), index + 1)
      }
    }
  }
}

console.log(restoreIpAddresses('25525511135'))


var restoreIpAddresses = function (s) {
  let res = []
  if (s.length < 4 || s.length > 12) return res
  dfs(res, s, '', 0)
  return res

  function dfs (res, s, sub, index) {
    if (index === 4 && s.length === 0) res.push(sub.substring(1))
    if (index === 4 || s.length === 0) return
    dfs(res, s.substring(1), sub + '.' + s.substring(0, 1), index + 1) // 一位数
    if (s.charAt(0) !== '0' && s.length > 1) {
      dfs(res, s.substring(2), sub + '.' + s.substring(0, 2), index + 1)
      if (s.charAt(0) !== '0' && s.length > 1) {
        dfs(res, s.substring(2), sub + '.' + s.substring(0, 2), index + 1)
        if (s.length > 2 && parseInt(s.substring(0, 3) <= 255)) {
          dfs(res, s.substring(3), sub + '.' + s.substring(0, 3), index + 1)
        }
      }
    }
  }
}

function dfs (res, s, sub, index) {
  if (index === 4 && s.length === 0) res.push(sub.substring(1))
  if (index === 4 || s.length === 0) return
  dfs(res, s.substring(1), sub + '.' + s.substring(0, 1), index + 1)
  if (s.charAt(0) !== '0' && s.length > 1) {
    dfs(res, s.substring(2), sub + '.' + s.substring(0, 2), index + 1)
    if (s.charAt(0) !== '0' && s.length > 1) {
      dfs(res, s.substring(2), sub + '.' + s.substring(0, 2), index + 1)
      if (s.length > 2 && parseInt(s.substring(0, 3)) < 255) {
        dfs(res, s.substring(3), sub + '.' + s.substring(0, 3), index + 1)
      }
    }
  }
}

var restoreIpAddresses = function (s) {
  let res = []
  if (s.length < 4 || s.length > 12) return res
  dfs(res, s, '', 0)
  return res

  function dfs (res, s, sub, index) {
    if (index === 4 && s.length === 0) res.push(s.substring(1))
    if (index === 4 || s.length === 0) return
    dfs(res, s.substring(1), sub + '.' + s.substring(0, 1), index + 1)
    if (s.charAt(0) !== '0' && s.length > 1) {
      dfs(res, s.substring(2), sub + '.' + s.substring(0, 2), index + 1)
      if (s.length > 2 && parseInt(s.substring(0, 3)) <= 255) {
        dfs(res, s.substring(3), sub + '.' + s.substring(0, 3), index + 1)
      }
    }
  }
}

