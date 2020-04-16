var hasCycle = function (head) {
  if (!head || !head.next) return false
  let fast = head.next.next
  let slow = head
  while (fast !== slow) {
    if (!fast || !fast.next) {
      return false
    }
    fast = fast.next.next
    slow = slow.next
  }
  return true
}

