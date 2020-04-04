function bsearch (arr, target) {
  const length = arr.length
  let max = length - 1
  let min = 0
  let mid
  while (min <= max) {
    mid = Math.floor((max + min) / 2)
    if (target > arr[mid]) {
      min = mid + 1
    } else if (target < arr[mid]) {
      max = mid - 1
    } else {
      return mid
    }
  }
  return -1
}

console.log(bsearch([1, 2, 4, 5], 5))