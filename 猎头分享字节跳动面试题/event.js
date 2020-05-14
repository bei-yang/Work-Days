class MyEvent {
  constructor() {
    this.events = {}
  }
  $on (eventName, fn) {
    if (!this.events[eventName]) {
      this.event[eventName] = []
    }
    this.event[eventName].push(fn)
  }
  $emit (eventName, params) {
    let eventArr = this.events[eventName]
    if (eventArr) {
      eventArr.map((item) => {
        item(params)
      })
    }
  }
  $off (eventName, fn) {
    let arr = this.event[eventName]
    if (arr) {
      if (fn) {
        let index = arr.indexOf(fn)
        arr.splice(index, 1)
      } else {
        arr.length = 0
      }
    }
  }
}

console.log(Object.prototype.toString.call()==={}.toString.call())