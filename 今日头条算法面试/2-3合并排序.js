// function mergeSort (arr) {
//   const { length } = arr
//   if (length < 2) {
//     return arr
//   }
//   let middle = Math.floor(length / 2)
//   let left = arr.slice(0, middle)
//   let right = arr.slice(middle)
//   return merge(mergeSort(left), mergeSort(right))
// }

// function merge (left, right) {
//   let arr = []
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


console.log(mergeSort([6, 5, 4, 3, 2, 1, 9, 8, 7]))

function mergeSort (arr) {
  const { length } = arr
  if (length < 2) return arr
  let middle=Math.floor(length/2),
      left=arr.slice(0,middle),
      right=arr.slice(middle)
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let arr=[]
  while(left.length&&right.length){
    if(left[0]>=right[0]){
      arr.push(right.shift())
    }else{
      arr.push(left.shift())
    }
  }
  while(left.length) arr.push(left.shift())
  while(right.length) arr.push(right.shift())
  return arr
}


