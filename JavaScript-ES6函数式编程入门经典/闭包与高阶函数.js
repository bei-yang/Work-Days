/*
 * @Descripttion: 闭包与高阶函数
 * @version: 0.0.1
 * @Author: 林慕
 * @Date: 2020-09-16 09:04:52
 * @LastEditors: 林慕
 * @LastEditTime: 2020-09-16 09:29:06
 * 
 */
/**
 * @description: once 函数
 * @param {Function} 
 * @return {Function} 
 */

const once = (fn) => {
  let done = false
  return function () {
    return done ? undefined : ((done = true), fn.apply(this, arguments))
  }
}

var doPayment = once(() => {
  console.log('payment is done')
})

// doPayment()

// doPayment()
/**
 * @description: 记忆化函数
 * @param {Function} 
 * @return {Function} 
 */
const memoized = (fn) => {
  const lookupTable = {}
  return (arg) => {
    if (arg === 0) {
      delete lookupTable
    }
    return lookupTable[arg] || (lookupTable[arg] = fn(arg))
  }
}

let fastFactorial = memoized((n) => {
  if (n === 0) return 1
  return n * fastFactorial(n - 1)
})

console.log(fastFactorial(5))
console.log(fastFactorial(3))