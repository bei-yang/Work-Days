/* 
  岛屿个数
*/

function helper (grid, i, j, rows, cols) {
  if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') {
    return
  }
  grid[i][j] = '0'
  helper(grid, i + 1, j, rows, cols)
  helper(grid, i, j + 1, rows, cols)
  helper(grid, i - 1, j, rows, cols)
  helper(grid, i, j - 1, rows, cols)
}

var numIslands = function (grid) {
  let res = 0
  const rows = grid.length
  if (rows === 0) return 0
  const cols = grid[0].length
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        helper(grid, i, j, rows, cols)
        res++
      }
    }
  }
  return res
}

/* 
  朋友圈
*/

var findCircleNum = function (M) {
  let n = M.length
  if (n === 0) {
    return 0
  }
  let count = n
  let rank = new Array(n)
  let find = (p) => {
    while (p != parent[p]) {
      parent[p] = parent[parent[p]]
      p = parent[p]
    }
    return p
  }
  let union = (p, q) => {
    let rootP = find(p)
    let rootQ = find(q)
    if (rootP === rootQ) {
      return
    }
    if (rank[rootP] > rank[rootQ]) {
      parant[rootQ] = rootP
    } else if (rank[rootP] < rank[rootQ]) {
      parent[rootP] = rootQ
    } else {
      parent[rootQ] = rootP
      rank[rootP]++
    }
    count--
  }
  let parent = new Array(n)
  for (let i = 0; i < n; i++) {
    parent[i] = i
    rank[i] = 1
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        union(i, j)
      }
    }
  }
  return count
}

var findCircleNum = function (M) {
  let n = M.length
  if (n === 0) return 0
  let count = 0
  let dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1 && !visited[j]) {
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

var findCircleNum = function (M) {
  let n = M.length
  if (n === 0) return 0
  let count = 0
  let dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1 && !visited[j]) {
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

var findCircleNum = function (M) {
  let n = M.length
  if (n === 0) return 0
  let count = 0
  let dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1 && !visited[j]) {
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