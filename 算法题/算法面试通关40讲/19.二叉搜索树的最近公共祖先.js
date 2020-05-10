var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return root
  }
  if (p.val < root.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  }
  if (p.val > root.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  }
  return root
}

var lowestCommonAncestor=function (root,p,q){
  if(root===null){
    return root
  }
  if(root.val>p.val&&root.val>q.val){
    return lowestCommonAncestor(root.left,p,q)
  }
  if(root.val<p.val&&root.val<q.val){
    return lowestCommonAncestor(root.right,p,q)
  }
  return root
}