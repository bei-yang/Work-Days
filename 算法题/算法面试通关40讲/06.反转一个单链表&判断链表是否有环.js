var reverseList = function (head) {
  let [prev, cur] = [null, head]
  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next]
  }
  return prev
}

var swapPairs = function (head) {
  let shaob = new ListNode(0)
  shaob.next = head
  let shao = shaob
  while (shao.next != null && shao.next.next != null) {
    let start = shao.next
    let end = shao.next.next
    shao.next = end
    start.next = end.next
    end.next = start
    shao = start
  }
  return shaob.next
}

