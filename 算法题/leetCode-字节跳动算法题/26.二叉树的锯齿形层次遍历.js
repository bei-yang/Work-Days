var arr=[]
arr.push(root)
while(arr.length>0){
  var len=arr.length
  while(len>0){
    var now=arr.shift()
    if(now.left!=null){
      arr.push(now.left)
    }
    if(now.right!=null){
      arr.push(now.right)
    }
    len--
  }
}


var zigzaLevelOrder=function(root){
  if(root===null) return []
  var arr=[root]
  var res=[]
  var go=true
  while(arr.length>0){
    var n=arr.length
    var now=[]
    if(go){
      while(n-->0){
        var node=arr.shift()
        now.push(node.val)
        if(node.left!=null) arr.push(node.left)
        if(node.right!=null) arr.push(node.right)
      }
      res.push(now)
    }else{
      while(n-->0){
        var node=arr.pop()
        now.push(node.val)
        if(node.right!=null) arr.unshift(node.right)
        if(node.left!=null) arr.unshift(node.left)
      }
      res.push(now)
    }
    go=!go
  }
  return res
}