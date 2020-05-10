var maxAreaOfIsLand = function (grid) {
  let x = grid.length
  let y = grid.length
  let max = 0
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, countArea(grid, i, j, x, y))
      }
    }
  }
  return max
}

const countArea = (grid, i, j, x, y) => {
  if (i < 0 || i >= x || j < 0 || j >= y || grid[i][j] === 0) return 0
  grid[i][j] = 0
  let count = 1
  count += countArea(grid, i + 1, j, x, y)
  count += countArea(grid, i - 1, j, x, y)
  count += countArea(grid, i, j + 1, x, y)
  count += countArea(grid, i, j - 1, x, y)
  return count
}

var maxAreaOfIsLand = function (grid) {
  let x = grid.length
  let y = grid[0].length
  let max = 0
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, countArea(grid, i, j, x, y))
      }
    }
  }
  return max
}

const countArea = (grid, i, j, x, y) => {
  if (i < 0 || i >= x || j < 0 || j >= y || grid[i][j] === 0) return 0
  grid[i][j] = 0
  let count = 1
  count += countArea(grid, i + 1, j, x, y)
  count += countArea(grid, i - 1, j, x, y)
  count += countArea(grid, i, j + 1, x, y)
  count += countArea(grid, i, j - 1, x, y)
  return count
}