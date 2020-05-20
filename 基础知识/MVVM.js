function oberve (val, asRootData) {
  if (!value || typeof value !== 'object') return
  return new Observer(value)
}
function Observer (value) {
  this.value = value
  this.walk(value)
}
Observer.prototype = {
  walk (obj) {
    let self = this
    Object.keys(obj).forEach(key => {
      self.observeProperty(obj, key, obj[key])
    })
  },
  observeProperty (obj, key, val) {
    let dep = new dep()
    let childOb = observe(val)
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,
      get () {
        if (Dep.target) {
          dep.depend()
        }
        if (childOb) {
          childOb.dep.depend()
        }
        return val
      },
      set () {
        if (val === newVal || (newVal !== newVal && val !== val)) {
          return
        }
        val = newVal
        childOb = observe(newVal)
        dep.notify()
      }
    })
  }
}