// var search = function (nums, target) {
//   let left = 0
//   let right = nums.length - 1
//   let mid
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2)
//     if (target > nums[mid]) {
//       left = mid + 1
//     } else if (target < nums[mid]) {
//       right = mid - 1
//     } else {
//       return mid
//     }
//   }
//   return -1
// };


// function bsearch (arrs, target) {
//   let arr = arrs.sort((a, b) => a - b)
//   console.log(arr)
//   const { length } = arr
//   let max = length - 1
//   let min = 0
//   let mid
//   while (min <= max) {
//     mid = Math.floor((max + min) / 2)
//     if (target > arr[mid]) {
//       min = mid + 1
//     } else if (target < arr[mid]) {
//       max = mid - 1
//     } else {
//       return mid
//     }
//   }
//   return -1
// }
// console.log(bsearch([4, 5, 6, 7, 0, 1, 2], 0))

var search = function (nums, target) {

}

console.log([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14].join('').indexOf('25'))