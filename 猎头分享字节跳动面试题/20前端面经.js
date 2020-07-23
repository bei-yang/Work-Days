// function sum () {
//   let args = [...arguments]
//   function add () {
//     function _add () {
//       args = [...args, ...arguments]
//       return add
//     }
//     _add.toString = () => {
//       return args.reduce((pre, item) => pre + item, 0)
//     }
//     return _add
//   }
//   return add(args)
// }


// function sum () {
//   let args = [...arguments]
//   function add () {
//     function _add () {
//       args = [...args, ...arguments]
//       return add
//     }
//     _add.toString = () => {
//       return args.reduce((pre, item) => pre + item, 0)
//     }
//     return _add
//   }
//   return add(args)
// }


// const tasks = []
// const output = (i) => new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(new Date, i)
//     resolve()
//   }, 1000 * i)
// })

// for (let i = 0; i < 5; i++) {
//   tasks.push(output(i))
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i)
//   }, 1000)
// })

// const tasks = []
// const output = (i) => new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(new Date, i)
//     resolve()
//   }, 1000 * i)
// })

// for (let i = 0; i < 5; i++) {
//   tasks.push(output(i))
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i)
//   }, 1000)
// })

// const tasks = []
// const output = (i) => new Promise((resolve) => {
//   setTimeout(() => {
//     console.log(new Date, i)
//     resolve()
//   }, 1000 * i)
// })

// for (let i = 0; i < 5; i++) {
//   tasks.push(output(i))
// }

// Promise.all(tasks).then(() => {
//   setTimeout(() => {
//     console.log(new Date, i)
//   }, 1000)
// })

class Chain {
  constructor() {

  }
  eat () {
    console.log('eat')
    return this
  }
  sleep () {
    console.log('sleep', ...arguments)
    return this
  }
  work () {
    console.log('work')
    return this
  }
}

console.log(new Chain().eat().sleep(5).eat().sleep(6).work())