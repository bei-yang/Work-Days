let KVue

// 实现 Store 类
class Store {
  constructor(options) {
    // 保存 mutations
    this._mutations = options.mutations

    // 保存 actions
    this._actions = options.actions

    // 绑定 this 到 store 实例
    // 绑定 commit 上下⽂否则 action 中调⽤ commit 时可能出问题!!
    // 同时也把 action 绑了，因为 action 可以互调
    const store = this
    const { commit, action } = store
    this.commit = function boundCommit (type, payload) {
      commit.call(store, type, payload)
    }
    this.action = function boundAction (type, payload) {
      return action.call(store, type, payload)
    }

    // getters
    // 1. 遍历用户传入 getters 所有 key,动态赋值，其值应该是函数执行结果
    // 2. 确保它是响应式的，Object.defineProperty(this.getters,key,{get(){}})
    // 3. 缓存结果，可以利用 computed    
    let computed = {}
    options.getters && this.handleGetters(options.getters, computed)

    // 响应式的 state
    this._vm = new KVue({
      data: {
        $$state: options.state
      },
      computed
    })
  }

  handleGetters (getters, computed) {
    this.getters = {}
    Object.keys(getters).forEach(key => {
      computed[key] = () => getters[key](this.state)
      Object.defineProperty(this.getters, key, {
        get: () => getters[key](this.state),
        enumerable: true,
      })
    })
  }

  get state () {
    return this._vm._data.$$state
  }
  set state (v) {
    console.error('请重新设置' + v + '的名称')
  }

  // commit(type,payload):执行 mutation，修改状态
  commit (type, payload) {
    // 根据 type 获取对应的 mutations
    const entry = this._mutations[type]
    if (!entry) {
      console.error('这是未知的 mutation 类型')
      return
    }
    entry(this.state, payload)
  }

  // dispatch(type,payload)
  dispatch (type, payload) {
    const entry = this._actions[type]

    if (!entry) {
      console.error('这是未知的 action 类型')
      return
    }

    return entry(this, payload)
  }
}

// 实现插件
function install (Vue) {
  KVue = Vue

  // 混入
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    }
  })
}

// 此处导出的对象理解为 Vuex
export default { Store, install }