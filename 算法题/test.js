
const options = [
  {
    "value": "330000",
    "label": "浙江省",
    "children": [
      {
        "value": "330100",
        "label": "杭州市",
        "children": [
          {
            "value": "330106",
            "label": "西湖区"
          },
          {
            "value": "330107",
            "label": "余杭区"
          }
        ]
      },
      {
        "value": "330200",
        "label": "温州市",
        "children": [
          {
            "value": "330206",
            "label": "龙湾区"
          }
        ]
      }
    ]
  },
  {
    "value": "120000",
    "label": "新疆维吾尔自治区",
    "children": [
      {
        "value": "120100",
        "label": "博尔塔拉蒙古自治州",
        "children": [
          {
            "value": "120111",
            "label": "阿拉山口市"
          }
        ]
      }
    ]
  }
];

function flattenTree (arr, sum = []) {
  const result = [];

  arr.forEach(item => {
    const path = sum.concat()
    if (item.children) {

    } else {
      result.push({ value: item.value, label: item.label })
    }
  });
}





console.log('script start')

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

// 实现一个instanceOf

function instanceOf (L, R) {
  let o = R.prototype
  L = L.__proto__
  while (true) {
    if (L === null) return false
    if (o === L) {
      return true
    }
    L = L.__proto__
  }
}

function instancdOf (L, R) {
  let O = R.prototype
  L = L.__proto__
  while (true) {
    if (L === null) return false
    if (O === L) {
      return true
    }
    L = L.__proto__
  }
}