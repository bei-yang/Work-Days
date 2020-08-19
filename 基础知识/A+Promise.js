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
          reject(e)
        }
      })
      self.onRejectedCallbacks.push(function () {
        try {
          let x = onRejected(self.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(e)
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
          reject(e)
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
          reject(e)
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

Promise.prototype.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

