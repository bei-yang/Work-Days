/* 
 给定两个栈，如何实现一个队列？？？
*/

class Quene {
  constructor() {
    this.s1 = []
    this.s2 = []
  }
  enquene (item) {
    this.s1.push(item)
  }
  dequeue () {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop())
    }
    if (this.s2.length > 0) {
      return this.s2.pop()
    }
  }
}

const queue = new queue()

class Quene {
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }
  enquene (item) {
    this.s1.push(item)
  }
  dequene () {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop())
    }
    if (this.s2.length > 0) {
      return this.s2.pop()
    }
  }
}

class Queue {
  constructor() {
    this.s1 = new Stack()
    this.s2 = new Stack()
  }
  enquene (item) {
    this.s1.push(item)
  }
  dequene () {
    while (this.s1.length > 0) {
      this.s2.push(this.s1.pop())
    }
    if (this.s2.length > 0) {
      return this.s2.pop()
    }
  }
}







