const obj = {}

function defineReactive (obj, key, val) {
  Object.defineProperty(obj, key, {
    get () {
      console.log(`get ${key}:${val}`)
      return val
    },
    set (newVal) {
      if (newVal !== val) {
        console.log(`set ${key}:${newVal}`)
        val = newVal
      }
    }
  })
}

defineReactive(obj, 'foo', 'foo')

obj.foo = 'test foo'

// 对象响应化：遍历每个key，定义getter、setter
function observe (obj) {
  if (typeof obj !== 'object' || obj == null) {
    return
  }
  Object.keys(obj).forEach(key => {
    defineReactive(obj, key, obj[key])
  })
}

const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 } }
observe(obj)
obj.foo = 'foooooooooooo'
obj.bar = 'barrrrrrrrrrr'
obj.baz.a = 10 // 嵌套对象no ok

function defineReactive (obj, key, val) {
  observe(val)
  Object.defineProperty(obj, key, {
    //...
  })
}


const arrayProto = Array.prototype
// 先克隆一份数组原型
export const arrayMethods = Object.create(arrayProto)
// 七个改变数组的方法
const methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]

// 拦截变化方法并发出事件
methodsToPatch.forEach(function (method) {
  // 缓存原方法
  const original = arrayProto[method]
  def(arrayMethods, method, function mutator (...args) {
    // 执行原始方法
    const result = original.apply(this, args)
    // 额外通知变更，只有这7个方法有这个待遇
    const ob = this.__ob__
    let inserted
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.slice(2)
        break
    }
    // 对新加入对象进行响应化处理
    if (inserted) ob.observerArray(inserted)
    // 通知改变
    ob.dep.notify()
    return result
  })
})



