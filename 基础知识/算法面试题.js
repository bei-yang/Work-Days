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

// const quickSort = function (arr) {
//   let len = arr.length
//   if (len < 2) return arr
//   let left = []
//   let right = []
//   let current = arr.splice(0, 1)
//   for (let i = 0; i < len; i++) {
//     if (arr[i] < current) {
//       left.push(arr[i])
//     } else {
//       right.push(arr[i])
//     }
//   }
//   return quickSort(left).concat(current, quickSort(right))
// }


function quickSort (arr) {
  if (arr.length <= 1) {
    return arr;  //递归出口
  }
  var left = [],
    right = [],
    current = arr.splice(0, 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])  //放在左边
    } else {
      right.push(arr[i]) //放在右边
    }
  }
  return quickSort(left).concat(current, quickSort(right));
}
console.log('快速排序', quickSort([6, 5, 3, 1, 2, 4, 5, 6]))