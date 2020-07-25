

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


class Event {
  constructor() {
    this.event = {}
  }
  // 订阅事件
  on (eventName, cb) {
    if (!this.event[eventName]) {
      this.event[eventName] = []
    }
    this.event[eventName].push(cb)
  }
  // 触发事件
  emit (eventName, param) {
    let eventArr = this.event[eventName]
    if (eventArr) {
      eventArr.map(item => {
        item(param)
      })
    }
  }
  off (eventName, cb) {
    let arr = this.event[eventName]
    if (arr) {
      if (cb) {
        let index = arr.indexof(cb)
        arr.splice(index, 1)
      } else {
        arr.length = 0
      }
    }
  }
}

class Event {
  constructor() {
    this.event = {}
  }
  on (eventName, cb) {
    if (!this.event[eventName]) {
      this.event[eventName] = []
    }
    this.event[eventName].push(cb)
  }
  emit(eventName,param){
    let eventArr=this.event[eventName]
    if(eventArr){
      eventArr.map(item=>{
        item(param)
      })
    }
  }
  off(eventName,cb){
    let arr=this.event[eventName]
    if(arr){
      if(cb){
        let index=arr.indexof(cb)
        arr.splice(index,1)
      }else{
        arr.length=0
      }
    }
  }
}

class Event{
  constructor(){
    this.event={}
  }
  on(eventName,cb){
    if(!this.event[eventName]){
      this.event[eventName]=[]
    }
    this.event[eventName].push(cb)
  }
  emit(eventName,param){
    let arr=event[eventName]
    if(arr.length){
      arr.map(item=>{
        item(param)
      })
    }
  }
  off(eventName,cb){
    let arr=this.event[eventName]
    if(arr){
      if(cb){
        let index=arr.indexof(cb)
        arr.splice(index,1)
      }else{
        arr.length=0
      }
    }
  }
}