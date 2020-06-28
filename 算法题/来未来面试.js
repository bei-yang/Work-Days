// // 千分位格式化

// function format (num) {
//   let res
//   let str = num + ''
//   let arr = str.split('.')
//   let leftReg = /\d{1,3}(?=(\d{3})+$)/g
//   let rightReg = /\d{3}/g
//   let left = arr[0].replace(leftReg, '$&,')
//   let right = null
//   arr.length > 1 && (right = arr[1].replace(rightReg, '$&,'))
//   res = left + (right ? ('.' + right) : '')
//   if (res[res.length - 1] === ',') {
//     return res.slice(0, res.length - 1)
//   } else {
//     return res
//   }
// }
// // console.log(format(1267.123456789891))
// // console.log(format(1234567))
// // console.log(format(0.1234567))

// // 洋葱模型调用
// async function applyChain (middlewares) {
//   // 请实现此方法
//   const compose = function (middlewares) {
//     return middlewares.reduce((last, cur) =>
//       next =>
//         last(() =>
//           cur(next)
//         )
//     )(() => { })
//   }

//   compose(
//     middlewares.map((item) =>
//       function (next) {
//         console.log(`>>> ${item} before`)
//         next()
//         console.log(`>>> ${item} after`)
//       }
//     )
//   )
// }

// applyChain(['aaa', 'bbb', 'ccc'])


// function jsonp (url, opts) {
//   return new Promise((resolve, reject) => {
//     let count = 0;
//     const {
//       prefix = '__jp',
//       param = 'callback',
//       timeout = 60000,
//       data = {}
//     } = opts;
//     let name = prefix + count++;
//     let timer;
//     function cleanup () { // 清除函数
//       if (script.parentNode) {
//         script.parentNode.removeChild(script);
//         window[name] = null;
//         if (timer) {
//           clearTimeout(timer);
//         }
//       }
//     }
//     if (timeout) { // 超时
//       timer = setTimeout(() => {
//         cleanup();
//         reject('timeout');
//       }, timeout);
//     }
//     window[name] = res => {
//       if (window[name]) {
//         cleanup();
//       }
//       resolve(res);
//     }
//     let str = '';
//     for (const key in data) {
//       const value = data[key] !== undefined ? data[key] : '';
//       str += `&${key}=${encodeURIComponent(value)}`;
//     }
//     url = url + (url.indexOf('?') > 0 ? '' : '?') + str.substr(1);
//     url = `${url}&${param}=${name}`;
//     const script = document.createElement('script');
//     script.src = url;
//     document.head.appendChild(script);
//   })
// }

// jsonp('https://t.alicdn.com/t/gettime', {
//   data: { id: 10001 },
// }).then((data) => {
//   console.log('>>>>>', data);
// });

// // 转为驼峰

// const wordTransfer = function (s) {
//   return s.replace(/_\w/g, function (x) {
//     return x.slice(1).toUpperCase()
//   })
// }

// function camelcaseList (objList) {
//   let arr=[]
//   const transfer = function (s) {
//     return s.replace(/_\w/g, function (x) {
//       return x.slice(1).toUpperCase()
//     })
//   }
//   objList.forEach(item => {
//     let obj = {}
//     for (let prop in item) {
//       obj[transfer(prop)] = item[prop]
//     }
//     arr.push(obj)
//   });
//   return arr
// }

// console.log(camelcaseList([{
//   "user_id": 10001,
//   "user_name": "张三",
//   "user_gender": "M",
//   "user_auth_level": 100
// }, {
//   "user_id": 10002,
//   "user_name": "李小花",
//   "user_gender": "F",
//   "user_auth_level": 200
// }]))

function print (list) {
  let tree = {}
  const buildTree = function (list) {
    let temp = {}
    for (let i in list) {
      temp[list[i].id] = list[i]
    }
    for (let i in temp) {
      if (Number(temp[i].parentId)) {
        if (!temp[temp[i].parentId].children) {
          temp[temp[i].parentId].children = new Object()
        }
        temp[temp[i].parentId].children[temp[i].id] = temp[i]
      } else {
        tree[temp[i].id] = temp[i]
      }
    }
  }
  const printItem = function (tree, level = '') {
    console.log(2, tree)
    for (let i in tree) {
      console.log(level + tree[i].name)
      if (tree[i].children) {
        level += '  '
        printItem(tree[i].children)
      }
    }
  }
  buildTree(list)
  console.log(1, tree)
  printItem(tree)
}

console.log('answer:', print([
  { id: 1001, parentId: 0, name: 'AA' },
  { id: 1002, parentId: 1001, name: 'BB' },
  { id: 1006, parentId: 1002, name: 'FF' },
  { id: 1007, parentId: 1002, name: 'GG' },
  { id: 1008, parentId: 1004, name: 'HH' },
  { id: 1003, parentId: 1001, name: 'CC' },
  { id: 1004, parentId: 1003, name: 'DD' },
  { id: 1005, parentId: 1003, name: 'EE' },
  { id: 1009, parentId: 1005, name: 'II' }
]))


function print (list) {
  const buildTree = function (list) {
    let tree = {}
    let temp = {}
    for (let i in list) {
      temp[list[i].id] = list[i]
    }
    for (let i in temp) {
      if (Number(temp[i].parentId)) {
        if (!temp[temp[i].parentId].children) {
          temp[temp[i].parentId].children = new Object()
        }
        temp[temp[i].parentId].children[temp[i].id] = temp[i]
      } else {
        tree[temp[i].id] = temp[i]
      }
    }
    return tree
  }
  const printItem = function (tree, level='') {
    for (let i in tree) {
      console.log(level + tree[i].name)
      if (tree[i].children) {
        printItem(tree[i].children,level+'  ')
      }
    }
  }
  printItem(buildTree(list))
}

print([
  { id: 1001, parentId: 0, name: 'AA' },
  { id: 1002, parentId: 1001, name: 'BB' },
  { id: 1006, parentId: 1002, name: 'FF' },
  { id: 1007, parentId: 1002, name: 'GG' },
  { id: 1008, parentId: 1004, name: 'HH' },
  { id: 1003, parentId: 1001, name: 'CC' },
  { id: 1004, parentId: 1003, name: 'DD' },
  { id: 1005, parentId: 1003, name: 'EE' },
  { id: 1009, parentId: 1005, name: 'II' }
])