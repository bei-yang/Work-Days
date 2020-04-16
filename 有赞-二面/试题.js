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

/**
 * 实现函数平铺上面的树形结构，预期结果如下：flattenTree(options)
  [
    [{  "value": "330000",  "label": "浙江省"},{  "value": "330100",  "label": "杭州市",},{  "value": "330106",  "label": "西湖区"}],
    [{  "value": "330000",  "label": "浙江省",},{  "value": "330100",  "label": "杭州市",},{  "value": "330107",  "label": "余杭区"}],
    [{  "value": "330000",  "label": "浙江省",},{  "value": "330200",  "label": "温州市",},{  "value": "330206",  "label": "龙湾区"}],
    [{  "value": "120000",  "label": "新疆维吾尔自治区",},{  "value": "120100",  "label": "博尔塔拉蒙古自治州",},{  "value": "120111",  "label": "阿拉山口市"}]
  ]
 */


function flattenTree (objArr, arr1 = [], arr2 = []) {
  for (let i in objArr) {
    if (objArr[i].children) {
      arr2.push(delChildren(objArr[i]))
      flattenTree(objArr[i].children, arr1, arr2)
    } else {
      arr2.push(objArr[i])
      arr1.push(JSON.parse(JSON.stringify(arr2)))
      if (i == objArr.length - 1) {
        arr2 = []
      } else {
        arr2.pop()
      }
    }
  }
  return arr1
}

console.log(flattenTree(options))