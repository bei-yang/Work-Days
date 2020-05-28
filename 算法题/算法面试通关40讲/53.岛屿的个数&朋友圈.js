/* 
  岛屿个数
*/
var numIslands = function (grid) {
  const row = grid.length
  if (!row) return 0
  const col = grid[0].length
  let landNum = 0
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const cur = grid[i][j]
      if (cur == 1) {
        landNum++
        inject(grid, i, j)
      }
    }
  }
  function inject (grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != 1) return
    grid[i][j] = 2
    inject(grid, i - 1, j)
    inject(grid, i + 1, j)
    inject(grid, i, j - 1)
    inject(grid, i, j + 1)
  }
  return landNum
}

/* 
  朋友圈
*/

var findCircleNum = function (M) {
  let n = M.length
  if (n == 0) return 0
  let count = 0
  let dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (M[i][j] == 1 && !visited[j]) {
        visited[j] = true
        dfs(j)
      }
    }
  }
  let visited = {}
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      count++
    }
  }
  return count
}

console.log(findCircleNum([[1, 1, 0],
[1, 1, 0],
[0, 0, 1]]))