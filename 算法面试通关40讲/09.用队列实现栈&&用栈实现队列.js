/* 
  用栈实现队列
*/

var MyQueue = function () {
  this.stack1 = []
  this.stack2 = []
}

MyQueue.prototype.push = function (x) {
  this.stack1.push(x)
}

MyQueue.prototype.pop = function () {
  if (this.stack2.length) {
    return this.stack2.pop()
  } else {
    if (this.stack1.length) {
      let len = this.stack1.length
      for (let i = 0; i < len; i++) {
        this.stack2.push(this.stack1.pop())
      }
      return this.stack2.pop()
    } else {
      return null
    }
  }
}

MyQueue.prototype.peek = function () {
  if (this.stack1.length === 0) {
    return this.stack2[this.stack2.length - 1]
  } else if (this.stack2.length === 0) {
    return this.stack1[0]
  }
}

MyQueue.prototype.empty = function () {
  if (this.stack1.length === 0 && this.stack2.length === 0) {
    return true
  } else {
    return false
  }
}