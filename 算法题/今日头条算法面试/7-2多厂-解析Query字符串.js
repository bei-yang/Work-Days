/* 
  写一个程序，解析下面的queryString，返回对象

  a.name=ramroll&a.dress&x=1&y=
*/

function parse (str) {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=')
    if (!value) {
      return o
    }
    // o[key] = value
    deep_set(o, key.split(/[\[\]]/g).filter(x => x), value)
    return o
  }, {})
}

function deep_set (o, path, value) {
  let i = 0
  console.log(1, o, path, value)
  for (; i < path.length - 1; i++) {
    console.log(2, o[path[i]])
    if (o[path[i]] === undefined) {
      console.log(3, path[i + 1])
      if (path[i + 1].match(/^\d+$/)) {
        o[path[i]] = []
      } else {
        o[path[i]] = {}
      }
      console.log(4, o[path[i]])
    }
    console.log(5, o, o[path[i]])
    o = o[path[i]]
  }
  o[path[i]] = decodeURIComponent(value)
  console.log(6, o[path[i]])
}


// console.log(parse('a=aaaa&b=bbbb&c=cccc'))
// console.log(parse('a&b&c'))
// console.log(parse('a[name]=fox&a[con]=tec&b=bbbb'))
// console.log(parse('color=deep@20Blue'))
console.log(parse('a[0]=1&a[1]=2'))

function parse (str) {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=')
    if (!value) {
      return o
    }
    o[key] = value
    return o
  }, {})
}

function parse (str) {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=')
    if (!value) {
      return key
    }
    // o[key] = value
    deep_set(o, key.split(/[\[\]]/g).filter(x => x), value)

    return o
  }, {})
}

function deep_set (o, path, value) {
  let i = 0
  for (; i < path.length - 1; i++) {
    if (o[path[i]] === undefined) {
      if (path[i + 1].match(/^\d+$/)) {
        o[path[i]] = []
      } else {
        o[path[i]] = {}
      }
    }
    o = o[path[i]]
  }
  o[path[i]] = value
}

function parse (str) {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=')
    if (!value) {
      return o
    }
    // o[key]=value
    deep_set(o, key.split(/[\[\]]/).filter(x => x), value)
    return o
  }, {})
}

function deep_set (o, path, value) {
  let i = 0
  for (; i < path.length - 1; i++) {
    if (o[path[i]] === undefined) {
      if (path[i + 1].match(/^\d+$/)) {
        o[path[i]] = []
      } else {
        o[path[i]] = {}
      }
    }
    o = o[path[i]]
  }
  o[path[i]] = value
}