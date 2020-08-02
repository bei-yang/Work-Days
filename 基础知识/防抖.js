function debounce (callback, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(callback, delay)
  }
}

function debounce (callback, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(callback, delay)
  }
}

function throttle (callback, duration) {
  let lasttime = new Date().getTime()
  return function () {
    let now = new Date().getTime()
    if (now - lasttime > duration) {
      callback()
      lasttime = now
    }
  }
}


function debounce (callback, delay) {
  let timer = null
  return function () {
    clearTimeout(timer)
    timer = setTimeout(callback, delay)
  }
}

function throttle (callback, duration) {
  let lasttime = new Date().getTime()
  return function () {
    let now = new Date().getTime()
    if (now - lasttime > duration) {
      callback()
      lasttime = now
    }
  }
}

function template(str,data){
  let reg=/\{\{()\}\}/g
}