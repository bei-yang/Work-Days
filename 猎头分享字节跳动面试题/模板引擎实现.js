let template = '我是{{name}},年龄{{age}},性别{{sex}}'
let data = {
  name: '姓名',
  age: 18
}
console.log(render(template, data))

function render(template,data){
  let reg=/\{\{(\w+)\}\}/
  if(reg.test(template)){
    let temp=reg.exec(template)[1]
    template=template.replace(reg,data[temp])
    return render(template,data)
  }
  return template
}

