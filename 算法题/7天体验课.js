var inorderTraversal = function (root) {
  if (root) {
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
  } else {
    return []
  }
}


var inorderTraversal = function (root) {
  if (root) {
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)]
  } else {
    return []
  }
}