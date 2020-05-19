

const levelOrder = root => {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    let arr = []
    let temp = []
    while (queue.length) {
      let curr = queue.shift()
      arr.push(curr.val)
      if (curr.left) temp.push(curr.left)
      if (curr.right) temp.push(curr.right)
    }
    queue = temp
    res.push(arr)
  }
  return res
}

const levelOrder = root => {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    let arr = []
    let temp = []
    while (queue.length) {
      let curr = queue.shift()
      arr.push(curr.val)
      if (curr.left) temp.push(curr.left)
      if (curr.right) temp.push(curr.right)
    }
    queue = temp
    res.push(arr)
  }
  return res
}

const levelOrder = root => {
  if (!root) return []
  let res = []
  let queue = [root]
  while (queue.length) {
    let arr = []
    let temp = []
    while (queue.length) {
      let curr = queue.shift()
      arr.push(curr.val)
      if (curr.left) temp.push(curr.left)
      if (curr.right) temp.push(curr.right)
    }
    queue = temp
    res.push(arr)
  }
  return res
}
