/* 
  给定一个不重复的正整数集合，从中取N个数字，使得他们的和为M,写一个函数，求这个N个数字，如有多个，只需返回一个

  sumN([1,2,8,5,3],2,11)   //[3,8]
*/

function sumN (A, n, m, i = 0, decisions = []) {
  if (m === 0) {
    return decisions
  }
  if (i === A.length || n === 0 || m < 0) {
    return null
  }
 
  // return sumN(A, n - 1, m - A[i], i + 1, decisions.concat(A[i]))
  // || 
  return sumN(A, n - 1, m - A[i], i + 1, decisions.concat(A[i])) || sumN(A, n, m, i + 1, decisions)
}

console.log(sumN([1, 2, 8, 5, 3], 2, 11))