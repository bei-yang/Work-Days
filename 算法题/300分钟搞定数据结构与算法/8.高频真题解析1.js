/* 例题分析一
LeetCode 第 03 题：给定一个字符串，请你找出其中不含有重复字符的最长子串的长度。

示例 1
输入："abcabcbb"
输出：3
解释：因为无重复字符的最长子串是"abc"，其长度为3。


示例 2
输入："bbbbb"
输出：1
解释：因为无重复字符的最长子串是 "b"，其长度为 1。

示例 3
输入："pwwkew"
输出：3
解释：因为无重复字符的最长子串是 "wke"，其长度为 3。
注意：答案必须是子串的长度，"pwke" 是一个子序列，不是子串。 */

var lengthOfLongest = function (s) {
  let max = 0
  let res = 0
  let current = ''
  let length = s.length
  for (let i = 0; i < length; i++) {
    if (current.indexOf(s[i]) === -1) {
      current += s[i]
      max++
      res = Math.max(res, max)
    } else {
      current += s[i]
      current = current.slice(current.indexOf(s[i]) + 1)
      max = current.length
    }
  }
  return res
}

// console.log(lengthOfLongest("pwwkew"))

// console.log(5/2)

var findMedianSortedArrays = function (nums1, nums2) {
  let len1 = nums1.length
  let len2 = nums2.length
  let mid = len1 + len2 >> 1
  let i = 0
  let j = 0
  let cur
  let n1
  let n2
  while (i < len1 || j < len2) {
    if (j === len2 || nums1[i] < nums2[i]) {
      cur = nums1[i]
      i++
    } else {
      cur = nums2[j]
      j++
    }
    if (i + j === mid) {
      n1 = cur
    }
    if (i + j === mid + 1) {
      n2 = cur
      break
    }
  }
  return (len1 + len2) % 2 === 0 ? (n1 + n2) / 2 : n2
};
console.log(findMedianSortedArrays([1, 3], [2, 4]))

var mergeKLists = function(lists) {
  let len=lists.length
  if(len===0) return null
  if(len===1) return lists[0]
  let arr=[]
  for(let i=0;i<len;i++){
    let temp=lists[i]
    while(temp){
      arr.push(temp.val)
      temp=temp.next
    }
  }
  arr.sort((a,b)=>a-b)
  let heap=new ListNode()
  let cur=heap
  for(let i=0,len=arr.length;i<len;i++){
    let node=new ListNode(arr[i])
    cur.next=node
    cur=cur.next
  }
  return heap.next
}