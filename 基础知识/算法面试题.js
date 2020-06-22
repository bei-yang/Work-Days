// 冒泡排序

const bubbleFunc = function (arr) {
  const length = arr.length
  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

console.log('冒泡排序', bubbleFunc([6, 5, 4, 3, 2, 1]))

//归并排序

const mergeSort = function (arr) {
  const len = arr.length
  if (len < 2) return arr
  let middle = Math.floor(len / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
const merge = function (left, right) {
  let result = []
  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      result.push(right.shift())
    } else {
      result.push(left.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

console.log('归并排序', mergeSort([6, 5, 4, 3, 21, 1]))

// 快速排序

function quickSort (arr) {
  if (arr.length < 2) return arr
  let left = []
  let right = []
  let current = arr.splice(0, 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > current) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(current).concat(quickSort(right))
}

console.log('快速排序', quickSort([6, 5, 3, 1, 2, 4, 5, 6]))

// 二分查找

const binarySearch = function (arr, target) {
  let max = arr.length - 1
  let min = 0
  while (min <= max) {
    let mid = Math.floor((max + min) / 2)
    if (target < arr[mid]) {
      max = mid - 1
    } else if (target > arr[mid]) {
      min = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

// 解析URL Params为对象
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled'

const parseParam = function (url) {
  let arr = url.split('?')[1].split('&')
  let obj = {}
  for (let i = 0, len = arr.length; i < len; i++) {
    let _arr = arr[i].split('=')
    obj[_arr[0]] = _arr[1]
  }
  return obj
}

console.log('把URL转为对象', parseParam(url))

// 模板引擎实现

let template = '我是{{name}},年龄{{age}},性别{{sex}}'
let data = {
  name: '姓名',
  age: '18'
}

const render = function (template, data) {
  const reg = /\{\{(\w+)\}\}/
  if (reg.test(template)) {
    let name = reg.exec(template)[1]
    template = template.replace(reg, data[name])
    return render(template, data)
  }
  return template
}

console.log('模板引擎：', render(template, data))

// 转为驼峰命名

var s1 = 'get-element-by-id'

const f = function (s) {
  return s.replace(/-\w/g, (x) => x.slice(1).toUpperCase())
}

console.log('转为驼峰命名：', f(s1))