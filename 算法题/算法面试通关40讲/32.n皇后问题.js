var solveNQueens = function (n) {
  let result = []
  function dfs (cols) {
    let row = cols.length
    if (row === n) {
      return result.push(cols.map(col => {
        '.'.repeat(n - col - 1)
      }))
    }
    for (let col = 0; col < n; col++) {
      if (cols.some((exCol, exRow) => (
        exCol === col || exRow - exCol === row - col || exRow + exCol === row + col
      ))) {
        continue
      }
      dfs(cols.concat(col))
    }
  }
  dfs([])
  return result
}

var solveNQueens = function (n) {
  const res = []
  const cols = new Set()
  const pies = new Set()
  const nas = new Set()
  const recurison = function (row, queens) {
    if (row >= n) {
      res.push(queens.slice(0))
      return
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || pies.has(col + row) || nas.has(col - row)) {
        continue
      }
      cols.add(col)
      pies.add(col + row)
      nas.add(col - row)
      queens.push(col)
      recurison(row + 1, queens)
      queens.pop()
      cols.delete(col)
      pies.delete(col + row)
      nas.delete(col - row)
    }
  }
  const generateCheckerboard = function () {
    return res.map(queens => {
      return queens.map(q => {
        return Array(n).fill().map((k, i) => {
          return i === q ? 'Q' : '.'
        }).join('')
      })
    })
  }
  recurison(0, [])
  return generateCheckerboard()
}


var solveNQueens3 = function (n) {
  let result = [];
  function dfs (cols) {
    console.log(1, cols)
    let row = cols.length;
    console.log(2, row)
    if (row === n) return result.push(cols.map(col => '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1)));
    for (let col = 0; col < n; col++) {
      console.log(3, col)
      if (cols.some((exCol, exRow) => (exCol === col || exRow - exCol === row - col || exRow + exCol === row + col))) continue;
      console.log(4, cols.concat(col))
      dfs(cols.concat(col))
    }
  }
  dfs([]);
  return result;
};

console.log(solveNQueens3(4))