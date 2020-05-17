# Vue 面试考点

## Vue 使用

* 基本使用，组件使用 —— 常用，必须会

* 高级特性 —— 不常用，但体现深度

* Vuex 和 Vue-router 使用

- v-html:会有 XSS 风险，会覆盖子组件

- watch 监听对象的话使用 handle（），deep:true，oldVal 和 newVal 是同一个值，因为是引用类型，指向同一个地址

- v-for 可以遍历对象 v-for="(val,key,index) in listObj" 

- v-for 和 v-if 不要在一起使用

- 事件，@click='test(1,2,$event)' 最后一个参数是 $event

    1. $event 就是原生的 event 对象 === event.__ptoto__.constructor

    2. 事件被挂载到当前元素

    