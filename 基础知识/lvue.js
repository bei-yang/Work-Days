class KVue {
  constructor(options) {
    this.$options = options // 挂载实例
    this.$data = options.data  // 数据响应化
    // 监听拦截数据
    this.observe(this.$data)

    // // 模拟一个 watcher 创建
    // new Watcher()
    // this.$data.a
    // new Watcher()
    // this.$data.c.d
    // // 模拟结束
    new Compile(options.el, this)
    // created 执行
    if (options.created) {
      options.created.call(this)
    }
  }
  observe (value) {
    if (!value || typeof value !== 'object') {
      return
    }
    // 遍历该对象
    Object.keys(value).forEach(key => {
      this.defineReactive(value, key, value[key])
      // 代理 data 中的属性到 vue 实例上
      this.proxyData(key)
    })
  }
  // 数据响应化
  defineReactive (obj, key, val) {

    this.observe(val) // 递归解决数据的嵌套

    const dep = new Dep()

    Object.defineProperty(obj, key, { // 数据劫持
      configurable: true,
      enumerable: true,
      get () {
        Dep.target && dep.addDep(Dep.target)
        return val
      },
      set (newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        console.log(`${key}属性更新了:${val}`)
        dep.notify()
      }
    })
  }
  proxyData (key) {
    Object.defineProperty(this, key, {
      configurable: true,
      enumerable: true,
      get () {
        return this.$data[key]
      },
      set (newVal) {
        this.$data[key] = newVal
      }
    })
  }
}
// Dep：用来管理 Watcher
class Dep {
  constructor() {
    this.deps = [] // 这里存放若干依赖（watcher），一个依赖对应一个属性，依赖就是视图上的引用
  }
  addDep (dep) {
    this.deps.push(dep)
  }
  notify () {
    this.deps.forEach(dep => dep.update())
  }
}
// Watcher:
class Watcher {
  constructor(vm, key, cb) {
    this.vm = vm
    this.key = key
    this.cb = cb
    // 将当前 Watcher 实例指定到 Dep 静态属性 target
    Dep.target = this
    this.vm[this.key]  // 触发 getter、添加依赖
    Dep.target = null
  }
  update () {
    console.log('Watcher监听的属性更新了')
    this.cb.call(this.vm, this.vm[this.key])
  }
}

// 为什么依赖收集？



// vue 编译过程是怎样的？
/*
  vue 文件 HTML 不识别，通过编译的这个过程可以进行依赖收集，依赖收集后数据模型和 data 就产生了绑定，产生了依赖关系，如果模型发生改变的时候，我们就可以通知依赖的地方，让他们发生更新

  这就是执行编译的目的，我们把界面全部编译更新后，这就是模型更新视图
*/
// 双向绑定的原理是什么？
/*
  我们会使用 v-model
  编译的时候可以解析 v-model ，我们把 v-model 加了个事件监听，如 input 发生变化，就可以让在 vue 实例上，vue 已经实现了响应式，会触发 setter 函数，对数据和视图进行更新。
*/

// 如何监听数组 push
/*
  数组增删改查没有实现触发 setter
*/
// 组件的实现