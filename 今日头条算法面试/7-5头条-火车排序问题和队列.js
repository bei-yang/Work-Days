function isTrans (o, t) {
  const q = []
  for (let x of t) { // x代表重排后的车厢
    console.log('1---', q, x)
    if (q[q.length - 1] === x) { // 判断队列的最后一个是否相等，如果相等
      q.pop()
    }
    let y = null
    console.log('2---', o.length, y)
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift(y)
      console.log('2.5---', q)
    }
  }
  console.log('3---', q.length)
  return q.length === 0
}

console.log(isTrans([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]))

function isTrans (o, t) {
  const q = []
  for (let x of t) {
    if (q[q.length - 1] === x) {
      q.pop()
    }
    let y = null
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift(y)
    }
  }
  return q.length === 0
}

function isTrans (o, t) {
  const q = []
  for (let x of t) {
    if (q[q.length - 1] === x) {
      q.pop()
    }
    let y = null
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift(y)
    }
  }
}

function isTrans (o, t) {
  const q = []
  for (let x of t) {
    if (q[q.length - 1] === x) {
      q.pop()
    }
    let y = null
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift(y)
    }
  }
  return q.length === 0
}

function isTrans (o, t) {
  const q = []
  for (let x of t) {
    if (q[q.length - 1] === x) {
      q.pop()
    }
    let y = null
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift(y)
    }
  }
  return q.length === 0
}

function isTrans (o, t) {
  const q = []
  for (let x of t) {
    if (q[q.length - 1] === x) {
      q.pop()
    }
    let y = null
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift(y)
    }
  }
  return q.length === 0
}


function isTrans (o, t) {
  const q = []
  for (x of t) {
    if (q[q.length - 1] === x) {
      q.pop()
    }
    let y = null
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift(y)
    }
  }
  return q.length === 0
}

function isTrans (o, t) {
  const q = []
  for (let x of t) {
    if (q[q.length - 1] === x) {
      q.pop()
    }
    let y = null
    while (o.length > 0 && (y = o.shift()) !== x) {
      q.unshift()
    }
  }
}

