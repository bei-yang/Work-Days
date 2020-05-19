/* console.log('script start')

async function async1 () {
  await async2()
  console.log('async1 end')
}
async function async2 () {
  console.log('async2 end')
}
async1()

setTimeout(() => {
  console.log('setTimeout')
}, 0);

new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(() => {
    console.log('promise2')
  })

console.log('script end')
 */

/* setTimeout(() => {
  console.log('timer1')
  Promise.resolve().then(function () {
    console.log('promise1')
  })
}, 0)
process.nextTick(() => {
  console.log('nextTick1')
  process.nextTick(() => {
    console.log('nextTick2')
    process.nextTick(() => {
      console.log('nextTick3')
      process.nextTick(() => {
        console.log('nextTick4')
      })
    })
  })
})
 */

/* function test() {
  console.log(1)
  return process.nextTick(() => test());
}

test();

setImmediate(() => {
  console.log('setImmediate');
}) */

function test () {
  console.log(1)
  setTimeout(() => test(), 1000);
}

test()

setImmediate(() => {
  console.log('setImmediate');
})
