function quickSort (arr) {
  let { length } = arr
  if (length < 2) return arr
  let left = [],
    right = [],
    current = arr.splice(0, 1)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < current) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return quickSort(left).concat(current, quickSort(right))
}

console.log(quickSort([9, 8, 7, 6, 5, 4, 3, 2, 1]))

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
  return quickSort(left).concat(current, quickSort(right))
}

