// 插件

let KVue

// 1. 实现一个install方法
class VueRouter {
  constructor(options) {
    this.$options = options

    // 响应式数据
    const initial = window.location.hash.slice(1) || '/'
    KVue.util.defineReactive(this, 'current', initial)

    // this.current = '/'

    // 监听事件
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))

    // 缓存path和route映射关系
    this.routeMap = {}
    this.$options.routes.forEach(route => {
      this.routeMap[route.path] = route
    })
  }

  onHashChange () {
    this.current = window.location.hash.slice(1)
    console.log(this.current)
  }
}

// 形参是Vue构造函数
KVueRouter.install = function (Vue) {
  // 保存构造函数（独立的包，不希望将vue也打包进去）
  KVue = Vue

  // 1. 挂载$router
  Vue.mixin({
    beforeCreate () {
      // 全局混入，将来在组件实例化的时候才执行
      // 此时Vue实例已经存在了
      // this指的是组件实例
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
      }
    }
  })

  // 2. 实现两个全局组件
  Vue.component('router-link', {
    props: {
      to: {
        type: String,
        required: true
      }
    },
    // h是createElement函数
    render (h) {
      // <a href='#/xxx'></a>
      // h(tag,props,children)
      // jsx语法也可以用
      // return <a href={'#' + this.to}>{this.$slots.default}</a>
      return h(
        'a',
        {
          attrs: {
            href: '#' + this.to
          }
        },
        this.$slots.default
      )
    }
  })
  // rouetr-view 是一个容器
  Vue.component('router-view', {
    render (h) {
      // 1. 获取路由器实例
      // const routes = this.$router.$options.routes
      // const current = this.$router.current
      // const route = routes.find(route => route.path === current)
      // const comp = route ? route.component : null

      const { routeMap, current } = this.$router
      const comp = routeMap[current] ? routeMap[current].component : null

      // 获取路由表 eg:'/'===home组件
      // return h('div','view')
      return h(comp)
    }
  })
}

export default KVueRouter





function observe (obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }

  new Observer(obj)
}

function defineReactive (obj, key, val) { }

class KVue {
  constructor(options) {
    this.$options = options
    this.$data = options.data

    observe(this.$data)
  }
}

class Observer {
  constructor(value) {
    this.value = value
    this.walk(value)
  }
  walk (obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}



class Compile {
  constructor(el, vm) {
    this.$vm = vm
    this.$el = document.querySelector(el)

    if (this.$el) {
      // 编译模板
      this.compile(this.$el)
    }
  }
  compile (el) {
    // 递归遍历el
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      // 判断其类型
      if (this.isElement(node)) {
        console.log('编译元素：', node.nodeName)
      } else if (this.isInterpolation(node)) {
        console.log('编译插值文本：', node.textContent)
      }
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node)
      }
    })
  }

  // 元素
  isElement (node) {
    return node.nodeType === 1
  }

  // 判断是否是插值表达式{{xxx}}
  isInterpolation (node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }
}


// 冬瓜冬瓜我是西瓜