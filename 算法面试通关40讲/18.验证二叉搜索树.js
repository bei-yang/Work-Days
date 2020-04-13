var isValidBST = function (root, pre = null, next = null) {
  if (!root) return true
  if (pre && pre.val >= root.val) return false
  if (next && next.val <= root.val) return false
}