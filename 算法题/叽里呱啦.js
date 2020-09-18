/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: 林慕
 * @Date: 2020-09-15 17:47:16
 * @LastEditors: 林慕
 * @LastEditTime: 2020-09-17 09:46:27
 */

const deepCopy = function (source, target) {
  var names = Object.getOwnPropertyNames(source);
  for (var i = 0; i < names.length; i++) {
    var desc = Object.getOwnPropertyDescriptor(source, names[i]);
    if (typeof (desc.value) === "object" && desc.value !== null) {
      var obj;
      if (Array.isArray(desc.value)) {
        obj = [];
      } else {
        obj = {};
      }
      Object.defineProperty(target, names[i], {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        value: obj,
        writable: desc.writable
      });
      deepCopy(obj, desc.value);
    } else {
      Object.defineProperty(target, names[i], desc);
    }
  }
  return target;
}

const fn = function (arr) {
  if (!arr.length) return
  let res = ''
  let newArr = arr.sort((a, b) => a - b)
  let beforeItem = arr[0]
  let len = newArr.length
  for (let i = 0; i < len; i++) {
    if (i > 0 && arr[i] - arr[i - 1] > 1) {
      if (beforeItem === arr[i - 1]) {
        res += `${beforeItem},`
      } else {
        res += `${beforeItem}~${arr[i-1]},`
      }
      beforeItem = arr[i]
    }
    if (i > 0 && i === len - 1 && arr[i] - arr[i - 1] > 1) {
      if (beforeItem === arr[i]) {
        res += `${beforeItem},`
      } else {
        res += `${beforeItem}~${arr[i-1]},`
      }
    }
    if (i > 0 && i === len - 1 && arr[i] - arr[i - 1] === 1) {
      console.log('before:', beforeItem, arr[i - 1])
      if (beforeItem === arr[i]) {
        res += `${beforeItem},`
      } else {
        res += `${beforeItem}~${arr[i]},`
      }
    }
  }
  return res.slice(0, res.length - 1)
}

console.log(fn([1, 2, 3, 5, 7, 8, 10]))