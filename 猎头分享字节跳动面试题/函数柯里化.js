function sum () {
  console.log(typeof(arguments))
  let cur = [].slice.call(arguments).reduce((a, b) => { a + b }, 0)
  function innerSum () {
    return innerSum()
  }
  return innerSum()
}

sum(1)(2)(3)