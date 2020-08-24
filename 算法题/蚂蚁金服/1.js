function sortVersion(list) {
  return list.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')
    let i = 0
    while (true) {
      let a1 = arr1[i]
      let b1 = arr2[i++]
      if (a1 === b1) continue
      if (!a1 || !b1) return arr1.length - arr2.length
      return a1 - b1
    }
  })
}

function sortVersion(list) {
  return list.sort((a, b) => {
    const arr1 = a.split('.')
    const arr2 = b.split('.')
    let i = 0
    while (true) {
      let a1 = arr1[i]
      let b1 = arr2[i++]
      if (a1 === b1) continue
      if (!a1 || !b1) return arr1.length - arr2.length
      return a1 - b1
    }
  })
}


console.log(sortVersion(['1.0.0', '2.12.1', '1.2.3.4.5.6.7', '0.18.1']))

class Depository {
  constructor(options) {
    // 初始货物
    this.options = options
  }
  transferIn(cargo, options = this.options) {
    for (let prop in cargo) {
      if (options[prop]) {
        if (typeof (options[prop]) === 'object' && typeof (cargo[prop]) !== 'object') {
          return `${cargo[prop]} + '有子类型，请输入正确的子类型'`
        }
        if (typeof (options[prop]) !== 'object') {
          options[prop] += cargo[prop]
        } else {
          options[prop] = this.transferIn(cargo[prop], options[prop])
        }
      } else {
        options[prop] = cargo[prop]
      }
    }
    return options
  }
  transferOut(cargo, options = this.options) {
    for (let prop in cargo) {
      if (options[prop]) {
        if (typeof (options[prop]) === 'object' && typeof (cargo[prop]) !== 'object') {
          return `${cargo[prop]} + '有子类型，请输入正确的子类型'`
        }
        if (typeof (options[prop]) !== 'object') {
          options[prop] -= cargo[prop]
          if (options[prop] < 0) return `${prop}爆仓了`
        } else {
          options[prop] = this.transferOut(cargo[prop], options[prop])
        }
      } else {
        return `${cargo[prop]}当前商品不存在`
      }
    }
    return options
  }
}

let product = {
  productA: {
    a: 1,
    b: 2,
    c: {
      c1: 1,
      c2: 3
    }
  },
  productB: {
    e: 6
  }
}
let test = new Depository(product)

console.log(test.transferIn({
  productA: {
    a: 3,
    c: {
      c1: 1,
      c2: 1,
      c3: 1
    }
  }
}))

console.log(test.transferOut({
  productA: {
    a: 7
  }
}))