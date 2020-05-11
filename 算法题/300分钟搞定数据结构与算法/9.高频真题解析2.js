/* LeetCode 第 56 题：给出一个区间的集合，请合并所有重叠的区间。
示例 1
输入: [[1,3], [2,6], [8,10], [15,18]]
输出: [[1,6], [8,10], [15,18]]

解释: 区间 [1,3] 和 [2,6] 重叠，将它们合并为 [1,6]。

示例 2

输入: [[1,4], [4,5]]
输出: [[1,5]]

解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。 */

var merge = function (intervals) {
  if (intervals.length === 0) {
    return []
  }
  var res = []
  intervals.sort((a, b) => a[0] - b[0])
  res.push(intervals[0])
  for (var i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > res[res.length - 1][1]) {
      res.push(intervals[i])
    } else if (intervals[i][1] > res[res.length - 1][1]) {
      res[res.length - 1][1] = intervals[i][1]
    }
  }
  return res
}

/* 435. 无重叠区间
给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。

注意:

可以认为区间的终点总是大于它的起点。
区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
示例 1:

输入: [ [1,2], [2,3], [3,4], [1,3] ]

输出: 1

解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2:

输入: [ [1,2], [1,2], [1,2] ]

输出: 2

解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
示例 3:

输入: [ [1,2], [2,3] ]

输出: 0

解释: 你不需要移除任何区间，因为它们已经是无重叠的了。 */

var eraseOverLapIntervals = function (intervals) {
  let len = intervals.length
  if (len <= 2) return 0
  let count = 1
  intervals.sort((a, b) => a[1] - b[1])
  let prev = 0
  for (let i = 0; i < len; i++) {
    if (intervals[prev][1] <= intervals[i][0]) {
      count += 1
      prev = i
    }
  }
  return len - count
}

/* LeetCode  第 269 题，火星字典：现有一种使用字母的全新语言，这门语言的字母顺序与英语顺序不同。假设，您并不知道其中字母之间的先后顺序。但是，会收到词典中获得一个不为空的单词列表。因为是从词典中获得的，所以该单词列表内的单词已经按这门新语言的字母顺序进行了排序。您需要根据这个输入的列表，还原出此语言中已知的字母顺序。

示例 1
输入:
[ "wrt", "wrf","er","ett", "rftt"]

输出: "wertf"

示例 2
输入:
[ "z", "x"]
输出: "zx"

示例 3
输入:
[ "z",  "x","z"] 

输出: "" 
解释: 此顺序是非法的，因此返回 ""。 */

var alienOrder = function (words) {
  const [letters, letter2Index] = makeNodes(words)
  const n = letters.length
  const edges = []
  getEdges(words, edges)
  const indeg = Array.from({ length: n }, () => 0)
  const next = Array.from({ length: n }, () => [])
  for (let [a, b] of edges) {
    a = letter2Index.get(a)
    b = letter2Index.get(b)
    ++indeg[b]
    next[a].push(b)
  }
  const queue = new queue()
  let res = ''
  for (let i = 0; i < n; ++i) {
    if (indeg[i] === 0) {
      queue.push(i)
    }
  }
  while (!queue.empty()) {
    const i = queue.popFront()
    res += letters[i]
    for (const j of next[i]) {
      --indeg[j]
      if (indeg[j] === 0) {
        queue.push(j)
      }
    }
  }
  return res.length < n ? '' : res
}
function makeNodes (words) {
  let letters = new Set()
  for (const word of words) {
    for (const letter of word) {
      letters.add(letter)
    }
  }
  letters = Array.from(letters)
  const letter2Index = new Map()
  for (let i = 0; i < letters.length; ++i) {
    letter2Index.set(letters[i], i)
  }
  return [letters, letter2Index]
}
function getEdges (words, res) {
  for (let i = 1; i < words.length; ++i) {
    const wordA = words[i - 1]
    const wordB = words[i]
    for (let j = 0; j < wordA.length && j < wordB.length; ++j) {
      if (wordA[j] !== wordB[j]) {
        res.push([wordA[j], wordB[j]])
        break
      }
    }
  }
}
class Queue {
  constructor() {
    this.arr = []
  }
  push (x) {
    this.arr.push(x)
  }
  popFront () {
    return this.arr.shift()
  }
  empty () {
    return this.arr.length === 0
  }
}


var isMatch = function (s, p) {
  return new RegExp('^' + p + '$').test(s)
};

var largestRectangleArea=function(heights){
  var maxarea=0
  var stack=[]
  heights.push(0)
  heights.unshift(0)
  for(var i=0;i<heights.length;i++){
    while(stack.length>0&&heights[stack[stack.length-1]]>heights[i]){
      maxarea=Math.max(maxarea,heights[stack.pop()]*(i-stack[stack.length-1]-1))
    }
    stack.push(i)
  }
  return maxarea
}

var largestRectangleArea=function(heights){
  function calcArea(start,end){
    if(start>end){
      return 0
    }
    var minIndex=start
    for(var i=start;i<=end;i++){
      if(heights[minIndex]>heights[i]){
        minIndex=i
      }
    }
    return Math.max(heights[minIndex]*(end-start+1),Math.max(calcArea(start,minIndex-1),calcArea(minIndex+1,end)))
  }
  return calcArea(0,heights.length-1)
}