/* 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6 */

let mergeKlists=function(lists){
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