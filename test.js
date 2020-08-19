// // 本题为考试单行多行输入输出规范示例，无需提交，不计分。
// while(line=readline()){
//     var lines = line.split(" ");
//     var a = parseInt(lines[0]);
//     var b = parseInt(lines[1]);
//     print(a+b);
// }

// // 本题为考试多行输入输出规范示例，无需提交，不计分。
// var n = parseInt(readline());
// var ans = 0;
// for(var i = 0;i < n; i++){
//     lines = readline().split(" ")
//     for(var j = 0;j < lines.length; j++){
//         ans += parseInt(lines[j]);
//     }
// }
// print(ans);

// let arr = ['1G', '2M']

// function transferWord (str, type = 'M') {
//   let arr = str.split(type)
//   console.log(666, arr)
//   let num = 0
//   // M的处理
//   for (let i = 0, len = arr.length; i < len; i++) {
//     if (!arr[i]) continue
//     if (!Number(arr[i])) {
//       return transferWord(arr[i], type === 'M' ? 'G' : 'T')
//     } else {
//       let obj = {
//         'M': () => {
//           num += Number(arr[i])
//         },
//         'G': () => {
//           num += Number(arr[i]) * 1024
//         },
//         'T': () => {
//           num += Nuber(arr[i]) * 1024 * 1024
//         }
//       }
//       obj[type]()
//     }
//   }
//   console.log(999, num)
//   return num
// }


// function main (arr) {
//   arr.sort((a, b) => {
//     return transferWord(a) - transferWord(b)
//   })
//   return arr
// }

// let _arr = main(arr)

// for (let i = 0; i < _arr.length; i++) {
//   console.log(_arr[i])
// }

// let pl = new Array()
// for (let i = 2, index = 0; index < 100; i++) {
//   if (p(i) == 1) {
//     pl.push(i)
//     index++
//   }
// }

// function p (n) {
//   if (n < 2) {
//     return 0
//   }
//   if (n == 2) {
//     return 1
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) { return 0 }
//   }
//   return 1
// }

// function f (n) {
//   let pIndex = 0
//   let ret = ''

//   for (; pIndex < 100;) {
//     if (n % pl[pIndex] == 0) {
//       ret += ' ' + pl[pIndex]
//       n /= pl[pIndex]
//     } else {
//       if (p(n)) {
//         ret += ' ' + n
//         return ret
//       }
//       pIndex++
//     }
//   }
//   return ret
// }

// console.log(f(15).substring(1))



// function f (arr, res = []) {
//   let len = arr.length
//   if (len === 0) return ''
//   if (len === 1) return arr[0]
//   for (let i = 0; i < len; i++) {
//     res.concat(f(arr.slice(i + 1)))
//   }
//   return res
// }

// console.log(f([a, b, c]))






const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise (executor) {
  let self = this
  self.status = PENDING
  self.value = null
  self.onResolvedCallbacks = []
  self.onRejectedCallbacks = []
  function resolve (value) {
    if (value !== null && value.then && typeof value.then === 'function') {
      return value.then(resolve, reject)
    }
    setTimeout(() => {
      if (self.status === PENDING) {
        self.status = FULFILLED
        self.value = value
        self.onResolvedCallbacks.forEach((cb) => cb(self.value))
      }
    })
  }
  function reject (reason) {
    setTimeout(() => {
      if (self.status === PENDING) {
        self.status = REJECTED
        self.value = reason
        self.onRejectedCallbacks.forEach((cb) => cb(self.value))
      }
    })
  }
  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => { return v }
  onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }
  let self = this
  let promise2
  if (self.status === PENDING) {
    return promise2 = new Promise((resolve, reject) => {
      self.onResolvedCallbacks.push(function () {
        try {
          let x = onFulfilled(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
      self.onRejectedCallbacks.push(function () {
        try {
          let x = onRejected(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    })
  }
  if (self.status === FULFILLED) {
    return promise2 = new Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          let x = onFulfilled(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    })
  }
  if (self.status === REJECTED) {
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      })
    })
  }
}

function resolvePromise (promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('循环引用'))
  }
  let called = false
  if (x instanceof Promise) {
    if (x.status === PENDING) {
      x.then((y) => {
        resolvePromise(promise2, y, resolve, reject)
      }, reject)
    } else {
      x.then(resolve, reject)
    }
  } else if (x !== null && (typeof x === 'object') || (typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, function (y) {
          if (called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, function (err) {
          if (called) return
          called = true
          reject(err)
        })
      } else {
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

Promise.prototype.catch = function (onRejected) {
  this.then(null, onRejected)
}


Promise.prototype.all = function (promises) {
  const gen = function (times, cb) {
    let result = []
    let count = 0
    return function (i, data) {
      result[i] = data
      if (++count === times) {
        cb(result)
      }
    }
  }
  return new Promise((resolve, reject) => {
    let done = gen(promises.length, resolve)
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        done(i, data)
      }, reject)
    }
  })
}

Promise.prototype.all = function (promises) {
  const gen = function (times, cb) {
    let result = []
    let count = 0
    return function (i, data) {
      result[i] = data
      if (++count === times) {
        cb(result)
      }
    }
  }
  return new Promise((resolve, reject) => {
    let done = gen(promsies.length, resolve)
    for (let i = 0; i < promsies.length; i++) {
      promises[i].then(data => {
        done(i, data)
      }, reject)
    }
  })
}

Promise.prototype.all = function (promises) {
  const gen = function (times, cb) {
    let result = []
    let count = 0
    return function (i, data) {
      result[i] = data
      if (++count === times) {
        cb(result)
      }
    }
  }
  return new Promise((resolve, reject) => {
    let done = gen(promises.length, resolve)
    for (let i = 0, len = promises.length; i < len; i++) {
      promises[i].then(data => {
        done(i, data)
      }, reject)
    }
  })
}

Promise.prototype.all = function (promises) {
  const gen = function (times, cb) {
    let result = []
    let count = 0
    return function (i, data) {
      result[i] = data
      if (++count === times) {
        cb(result)
      }
    }
  }
  return new Promise((resolve, reject) => {
    let done = gen(promises.length, resolve)
    for (let i = 0, len = promises.length; i < len; i++) {
      promsies[i].then(data => {
        done(i, data)
      }, reject)
    }
  })
}

Promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

Promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}



function test () {
  this.a = 1
  test.prototype.a = 1
}

// console.log(new test().a)


console.log('1');

setTimeout(function () {
  console.log('2');
  process.nextTick(function () {
    console.log('3');
  })
  new Promise(function (resolve) {
    console.log('4');
    resolve();
  }).then(function () {
    console.log('5')
  })
})
process.nextTick(function () {
  console.log('6');
})
new Promise(function (resolve) {
  console.log('7');
  resolve();
}).then(function () {
  console.log('8')
})

setTimeout(function () {
  console.log('9');
  process.nextTick(function () {
    console.log('10');
  })
  new Promise(function (resolve) {
    console.log('11');
    resolve();
  }).then(function () {
    console.log('12')
  })
})


// 1，7，6，8，2，4，3，5，9，11，10，12

function minCoinChange (coins, amount) {
  const cache = []
  const makeChange = value => {
    if (!value) {
      return []
    }
    if (cache[value]) {
      return cache[value]
    }
    let min = []
    let newMin
    let newAmount
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      if (newAmount >= 0 && (newMin.length < min.length - 1 ||))
    }
  }
}