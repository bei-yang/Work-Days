// 时间复杂度 O(n+k)
// 空间复杂度 O(n+k)

function countingSort (A) {
  const max = Math.max(...A)
  const B = Array(max + 1).fill(0)
  const C = Array(A.length)

  A.forEach((_, i) => B[A[i]]++)

  for (let i = 1; i < B.length; i++) {
    B[i] = B[i - 1] + B[i]
  }

  for (let i = 0; i < A.length; i++) {
    const p = B[A[i]] - 1
    B[A[i]]--
    C[p] = A[i]
  }

  return C
}

console.log(countingSort([9,8,7,6]))


