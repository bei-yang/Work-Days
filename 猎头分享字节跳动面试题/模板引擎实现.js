let template = '我是{{name}},年龄{{age}},性别{{sex}}'
let data = {
  name: '姓名',
  age: 18
}
console.log(render(template, data))

function render (template, data) {
  const reg = /\{\{(\w+)\}\}/
  if (reg.test(template)) {
    let name = reg.exec(template)[1]
    template = template.replace(reg, data[name])
    return render(template, data)
  }
  return template
}

