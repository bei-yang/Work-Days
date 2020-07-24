

const f = s => {
  return s.replace(/-\w/g, (x) => x.slice(1).toUpperCase())
}


console.log(f('t-d-e-t-a-sdddd'))



const f = s => {
  return s.replace(/-\w/g, x => s.slice(1).toUpperCase())
}

const f = s => {
  return s.replace(/-\w/g, x => x.slice(1).toUpperCase())
}

const f = s => {
  return s.replace(/-\w/g, x => x.slice(1).toUpperCase())
}

const f = s => {
  return s.replace(/-\w/g, x => x.slice(1).toUpperCase())
}

const debounce = (cb, delay) => {
  var t = null
  return function () {
    clearTimeout(t)
    t = setTimeout(cb, delay)
  }
}

const throttle = function (cb, duration) {
  let lastTime = new Date().getTime()
  return function () {
    let now = new Date().getTime()
    if (now - lastTime > duration) {
      cb()
      lastTime = now
    }
  }
}

const throttle = function (cb, duration) {
  let lastTime = new Date().getTime()
  return function () {
    let now = new Date().getTime()
    if (now - lastTime > duration) {
      cb()
      lastTime = now
    }
  }
}

const cloneObject = (target, source) => {
  const name = Object.getOwnPropertyNames(source)
  for (let i = 0, len = name.length; i < len; i++) {
    const desc = Object.getOwnPropertyDescriptor(souce, name[i])
    if (typeof (desc.value) === 'object' && desc.value !== null) {
      let obj
      if (Array.isArray(desc.value)) {
        obj = []
      } else {
        obj = {}
      }
      Object.defineProperty(target, name[i], {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        value: obj,
        writable: desc.writable
      })
      cloneObject(obj, desc.value)
    } else {
      Object.defineProperty(target, names[i], desc)
    }
  }
  return target
}

const cloneObject = (target, source) => {
  const name = Object.getOwnPropertyNames(source)
  for (let i = 0, len = name.length; i < len; i++) {
    const desc = Object.getOwnPropertyDescriptor(source, name[i])
    if (typeof (desc.value) === 'object' && desc.value !== null) {
      let obj
      if (Array.isArray(desc.value)) {
        obj = []
      } else {
        obj = {}
      }
      Object.defineProperty(target, name[i], {
        configurable: desc.configurable,
        enumerable: desc.enumerable,
        value: obj,
        writable: desc.writable
      })
      cloneObject(obj, desc.value)
    } else {
      Object.defineProperty(target, names[i], desc)
    }
  }
  return target
}

Function.prototype.bind = function (target) {
  let fn = this
  return function () {
    fn.apply(target, arguments)
  }
}


class Event{
  constructor(){
    this.event={}
  }
  emit(cb,param){
    if(!this.event[cb]){
      this.event[cb]=[]
    }
    this.event[cb].push(cb)
  }
  on(cb,param){
    
  }
}