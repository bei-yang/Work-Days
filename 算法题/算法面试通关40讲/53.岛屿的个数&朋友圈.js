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