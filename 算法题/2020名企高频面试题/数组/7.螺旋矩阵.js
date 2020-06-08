/* 螺旋矩阵
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]
示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7] */

var spiralOrder = function (matrix) {
  if (matrix.length === 0) return []
  let direction = 0
  let top = 0
  let left = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
  let i = 0
  let j = 0
  let result = []
  while (!isEnd) {
    move()
  }
  function move () {
    switch (direction % 4) {
      case 0:
        moveRight()
        turnDown()
        break
      case 1:
        moveDown()
        turnLeft()
        break
      case 2:
        moveLeft()
        turnUp()
        break
      case 3:
        moveUp()
        turnRight()
        break
      default:
        break
    }
  }
  function moveRight () {
    while (j <= right) {
      result.push(matrix[i][j])
      j++
    }
    j--
    top++
  }
  function turnDown () {
    direction++
    i++
    if (i > bottom) {
      isEnd = true
    }
  }
  function moveDown () {
    while (i <= bottom) {
      result.push(matrix[i][j])
      i++
    }
    i--
    right--
  }
  function turnLeft () {
    direction++
    j--
    if (j < left) {
      isEnd = true
    }
  }
  function moveLeft () {
    while (j >= left) {
      result.push(matrix[i][j])
      j--
    }
    j++
    bottom--
  }
  function turnUp () {
    direction++
    i--
    if (i < top) {
      isEnd = true
    }
  }
  function moveUp () {
    while (i >= top) {
      result.push(matrix[i][j])
      i--
    }
    i++
    left++
  }
  function turnRight () {
    direction++
    j++
    if (j > right) {
      isEnd = true
    }
  }
  return result
}