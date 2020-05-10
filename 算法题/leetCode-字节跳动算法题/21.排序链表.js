var sortList = function (head) {
  const dummy = new ListNode()
  dummy.next = head
  let slow = dummy
  let quick = dummy
  while (quick.next) {
    quick = quick.next
    slow = slow.next
    quick.next && (quick = quick.next)
  }
  if (slow === quick) return dummy.next
  let rightList = slow.next
  slow.next = null
  let leftList = dummy
  return merge(sortList(leftList.next), sortList(rightList))
}

var merge = function (leftList, rightList) {
  const dummy = new ListNode(0)
  dummy.next = leftList
  let lNode = dummy
  let rNode = rightList

  while (lNode && rNode) {
    while (lNode.next && lNode.next.val < rNode.val) {
      lNode = lNode.next
    }
    let rNext = rNode.next
    rNode.next = lNode.next
    lNode.next = rNode
    rNode = rNext
  }
  return dummy.next
}