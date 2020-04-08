/* 
  冒泡排序
*/

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}


/* 
  归并排序
*/

// function mergeSort (arr) {
//   if (arr.length < 2) return arr
//   let mid = Math.floor(arr.length / 2)
//   let left = arr.slice(0, mid)
//   let right = arr.slice(mid)
//   return merge(mergeSort(left), mergeSort(right))
// }

// function merge (left, right) {
//   let arr=[]
//   while (left.length && right.length) {
//     if (left[0] > right[0]) {
//       arr.push(right.shift())
//     } else {
//       arr.push(left.shift())
//     }
//   }
//   while (left.length) {
//     arr.push(left.shift())
//   }
//   while (right.length) {
//     arr.push(right.shift())
//   }
//   return arr
// }


/* 
  归并排序

  时间复杂度：O(nlogn)
*/


function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  }
  let mid = Math.floor(arr.length / 2)
  let left = arr.slice(0, mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let arr = []
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      arr.push(right.shift())
    } else {
      arr.push(left.shift())
    }
  }
  while (left.length) {
    arr.push(left.shift())
  }
  while (right.length) {
    arr.push(right.shift())
  }
  return arr
}



/* 
  快速排序

  时间复杂度   O(nlogn)
*/

function quickSort (arr) {
  if (arr.length < 2) return arr
  let left = []
  let right = []
  let middle = arr.splice(Math.floor(arr.length / 2), 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < middle) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(middle).concat(quickSort(right))
}


/* 

  快速排序
*/

function quickSort (arr) {
  if (arr.length < 2) return arr
  let left = []
  let right = []
  let middle = arr.splice(Math.floor(arr.length / 2), 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > middle) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(middle).concat(quickSort(right))
}

// console.log(quickSort([6, 5, 4, 3, 2, 1, 9, 8, 7]))

/* 
  二分查找法

  时间复杂度  O(logn)
*/

function binarySearch (arr, target) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (target < arr[mid]) {
      right = mid - 1
    } else if (target > arr[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
}
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6))


/* 

  二分查找法
*/

// function binarySearch(arr,target){
//   let left=0
//   let right=arr.length-1
//   while(left<=right){
//     let mid=Math.floor(arr.length/2)
//     if(target<arr[mid]){
//       right=mid-1
//     }else if(target>arr[mid]){
//       left=mid+1
//     }else{
//       return mid
//     }
//   }
//   return -1
// }


/* 
  解析URL对象
*/

// function parse (url) {
//   return url.split('?')[1].split('&').reduce((o, kv) => {
//     let [key, value] = kv.split('=')
//     if (!value) {
//       return o
//     }
//     o[key] = value
//     return o
//   }, {})
// }

console.log(parse('http://123.com?123=123&4=4&5=5&6=6'))


function parse (url) {
  return url.split('?')[1].split('&').reduce((o, kv) => {
    let [key, value] = kv.split('=')
    if (!value) {
      return o
    }
    o[key] = value
    return o
  }, {})
}



function parse (url) {
  return url.split('?').split('=').reduce((o, kv) => {
    let [key, value] = o.split('=')
    if (!value) {
      return o
    }
    o[key] = value
    return o
  }, {})
}