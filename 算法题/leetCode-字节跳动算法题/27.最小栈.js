var MinStack = function () {
  this.stack = []
  this.minStack = [Infinity]
}
MinStack.prototype.push = function (x) {
  this.stack.push(x)
  this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], x))
}
MinStack.prototype.pop = function () {
  this.stack.pop()
  this.minStack.pop()
}
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}