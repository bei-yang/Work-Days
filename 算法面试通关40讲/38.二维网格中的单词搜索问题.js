/* 
212. 单词搜索 II

给定一个二维网格 board 和一个字典中的单词列表 words，找出所有同时在二维网格和字典中出现的单词。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。

示例:

输入: 
words = ["oath","pea","eat","rain"] and board =
[
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]

输出: ["eat","oath"]
说明:
你可以假设所有输入都由小写字母 a-z 组成。

提示:

你需要优化回溯算法以通过更大数据量的测试。你能否早点停止回溯？
如果当前单词不存在于所有单词的前缀中，则可以立即停止回溯。什么样的数据结构可以有效地执行这样的操作？散列表是否可行？为什么？ 前缀树如何？如果你想学习如何实现一个基本的前缀树，请先查看这个问题： 实现Trie（前缀树）。
*/

var findWords = function (board, words) {
  class TrieNode {
    constructor() {
      this.END = false
      this.children = {}
    }
  }
  let root = null
  let Trie = function () {
    root = new TrieNode()
  }
  Trie.prototype.insert = function (word) {
    let currNode = root
    for (let i = 0; i < word.length; i++) {
      if (currNode.children[word[i]] === undefined) {
        currNode.children[word[i]] = new TrieNode()
      }
      currNode = currNode.children[word[i]]
    }
    currNode.END = true
  }
  let m = board.length
  let n = board[0].length
  let wordsTrie = new Trie()
  for (let i = 0; i < words.length; i++) {
    wordsTrie.insert(words[i])
  }
  let boardDFS = (i, j, curStr, currNode) => {
    if (currNode.END) {
      result.push(curStr)
      currNode.END = false
    }
    if (i < 0 || j < 0 || i === m || j === n) {
      return
    }
    const restore = board[i][j]
    if (restore === '#' || !currNode.children[restore]) {
      return
    }
    board[i][j] = '#'
    curStr += restore
    boardDFS(i - 1, curStr, currNode, children[restore])
    boardDFS(i + 1, curStr, currNode, children[restore])
    boardDFS(i, j - 1, curStr, currNode, children[restore])
    boardDFS(i, j + 1, curStr, currNode, children[restore])
    board[i][j] = restore
  }
  let result = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      boardDFS(i, j, '', root)
    }
  }
  return result
}

var exist = function (board, word) {
  const rowNum = board.length
  const colNum = board[0].length

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      if (board[i][j] === word[0]) {
        const isExist = _exist(board, word, i, j, {})
        if (isExist) return true
      }
    }
  }

  return false
}

function _exist (board, word, row, col, visited) {
  if (!word.length) {
    return true
  }
  const key = `${row}-${col}`
  if (row >= board.length || row < 0 || col >= board[0].length || col < 0 || visited[key] || board[row][col] !== word[0]) {
    return false
  }
  visited[key] = true
  word = word.slice(1)
  const success = _exist(board, word, row + 1, col, visited) || _exist(board, word, row - 1, col, visited) || _exist(board, word, row, col + 1, visited) || _exist(board, word, row, col - 1, visited)
  visited[key] = success
  return success
}