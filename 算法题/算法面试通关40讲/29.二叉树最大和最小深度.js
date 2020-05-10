var maxDepth = function (root) {
  if (!root) {
    return 0
  } else {
    const left = maxDepth(root.left)
    const right = maxDepth(root.right)
    return Math.max(left, right) + 1
  }
}


var minDepth = function (root) {
  if (!root) return 0
  let left = minDepth(root.left)
  let right = minDepth(root.right)
  return (left === 0 || right === 0) ? (left + right + 1) : Math.min(left, right) + 1
}

