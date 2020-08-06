function instance_of (L, R) {
  let prototype = R.prototype
  L = L.__proto__
  while (true) {
    if (L === null) {
      return false
    }
    if (prototype === L) {
      return true
    }
    L=L
  }
}      
