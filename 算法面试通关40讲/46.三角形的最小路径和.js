/* 
 120.triangle
*/

var minimumTotal = function (triangle) {
  for (var i = triangle.length - 2; i >= 0; i--) {
    for (var j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
}

console.log(minimumTotal([
  [2],
  [3, 4],
  [6, 5, 7],
  [4, 1, 8, 3]
]))

var minimumTotal = function (triangle) {
  for (var i = triangle.length - 1; i > 0; i--) {
    for (var j = 0; j < triangle[i].length; j++) {
      triangle[i][j] += Math.min(triangle[i + 1][j], triangle[i + 1][j + 1])
    }
  }
  return triangle[0][0]
}

