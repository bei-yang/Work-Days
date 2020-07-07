var simplifyPath = function (path) {
  const stach = []
  const pathArr = path.split('/')
  for (let item of pathArr) {
    if (item === '' || item === '.') {
      continue
    } else if (item === '..') {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return '/' + stack.join('/')
}

// 文件夹的进出和栈结构很相似

console.log(['c'].join('/'))

var simplifyPath = function (path) {
  const stack = []
  const pathArr = path.split('/')
  for (let item of pathArr) {
    if (item === '' || item === '.') {
      continue
    } else if (item === '..') {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return '/' + stack.join('/')
}

var simplifyPath = function (path) {
  const stack = []
  const pathArr = path.split('/')
  for (let item of pathArr) {
    if (item === '' || item === '.') {
      continue
    } else if (item === '..') {
      stack.pop()
    } else {
      stack.push(item)
    }
  }
  return '/' + stack.join('/' )
}