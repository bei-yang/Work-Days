// 用法 new Compile(el,vm)
class Compile {
  constructor(el, vm) {
    // 要遍历的宿主节点
    this.$el = document.querySelector(el)
    this.$vm = vm
    // 开始编译
    if (this.$el) {
      // 转换内部内容为片段 Fragment
      this.$fragment = this.node2Fragment(this.$el)
      // 执行编译
      this.compile(this.$fragment)
      // 将编译完的 html 结果追加至 $el
      this.$el.appendChild(this.$fragment)
    }
  }
  // 将宿主元素中代码片段拿出来遍历，这样做比较高效
  node2Fragment (el) {
    const frag = document.createDocumentFragment()
    // 将 el 中所有子元素搬家至 frag 中
    let child
    while (child = el.firstChild) {
      frag.appendChild(child)
    }
    return frag
  }
  // 编译过程
  compile (el) {
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      // 类型判断
      if (this.isElement(node)) {
        // 元素
        console.log('编译元素' + node.nodeName)
        // 查找k-/@/:
        const nodeAttrs = node.attributes
        Array.from(nodeAttrs).forEach((attr) => {
          const attrName = attr.name // 属性名
          const exp = attr.value  // 属性值
          if (this.isDirective(attrName)) {
            // k-text
            const dir = attrName.substring(2)
            // 执行指令
            this[dir] && this[dir](node, this.$vm, exp)
          }
          if (this.isEvent(attrName)) {
            const dir = attrName.substring(1) // @click
            this.eventHandler(node, this.$vm, exp, dir)
          }
        })
      } else if (this.isInterpolation(node)) {
        // 插值文本
        console.log('编译文本' + node.textContent)
        this.compileText(node)
      }
      // 递归子节点
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }
  compileText (node) {
    console.log(RegExp.$1)
    // node.textContent = this.$vm.$data[RegExp.$1]
    this.update(node, this.$vm, RegExp.$1, 'text')
  }
  // 更新函数
  update (node, vm, exp, dir) {
    const updaterFn = this[dir + 'Updater']
    // 初始化
    updaterFn && updaterFn(node, vm[exp])
    // 依赖收集
    new Watcher(vm, exp, function (value) {
      updaterFn && updaterFn(node, value)
    })
  }
  html (node, vm, exp) {
    this.update(node, vm, exp, 'html')
  }
  htmlUpdater (node, value) {
    node.innerHTML = value
  }
  text (node, vm, exp) {
    this.update(node, vm, exp, 'text')
  }
  // 双绑
  model (node, vm, exp) {
    // 指定 input 的 value 属性
    this.update(node, vm, exp, 'model')
    // 视图对模型响应
    node.addEventListener('input', e => {
      vm[exp] = e.target.value
    })
  }
  modelUpdater (node, value) {
    node.value = value
  }
  textUpdater (node, value) {
    node.textContent = value
  }
  // 事件处理器
  eventHandler (node, vm, exp, dir) {
    let fn = vm.$options.methods && vm.$options.methods[exp]
    if (dir && fn) {
      node.addEventListener(dir, fn.bind(vm))
    }
  }
  isDirective (attr) {
    return attr.indexOf('k-') === 0
  }
  isEvent (attr) {
    return attr.indexOf('@') === 0
  }
  isElement (node) {
    return node.nodeType === 1
  }
  // 插值文本
  isInterpolation (node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}