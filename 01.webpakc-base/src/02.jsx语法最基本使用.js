// 1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2.创建虚拟dom元素
// 什么是虚拟dom 用js对象的形式 来表示dom和dom之间的嵌套关系
const mydiv=React.createElement('div',{
    id:'mydiv',
    title:'div aaa'
},'这是div元素')

// js文件中 默认不能写这种类似于HTML的标记 否则会打包失败
// 可以使用babel来转换这些js中的标签
// 这种在js中 混合写入类似HTML的语法 叫做jsx语法 符合xml规范的js
// jsx语法的本质 还是在运行的时候 被转换成react.createelement形来执行
let a=10
let str='你好，中国'
let boo=true
let title='999'
const h1=<h1>好好放松放松</h1>
const arr=[
    <h2>这是h2</h2>,
    <h3>这是h3</h3>
]
const arrStr=['毛利','柯南','小五郎','灰原哀']
// 方案1 循环
// 注意 react中 需要把key添加给被foreach或for循环的元素
const nameArr=[]
arrStr.forEach(item=>{
    nameArr.push(<h5 key={item}>{item}</h5>)
})
// 方案2 map方法 map必须写return
const result=arrStr.map(item=>{
    return item+'~~'
})
console.log(result)

// 什么情况下需要使用{} 当我们需要在jsx控制的区域内 写js表达式 则需要把js代码写到{}中
const mydiv1=<div id="mydiv" title="div aaa">
    这是一个div元素---{a+2}
    <hr/>
    {str}
    <hr/>
    {boo?'条件为真':'条件为假'}
    <hr/>
    <h1 title="oo">这是一个大大的h1</h1>
    <hr/>
    <p title={title}>这是p标签</p>
    <hr/>
    {h1}
    <hr/>
    {arr}
    <hr/>
    {nameArr}
    <hr/>
    {arrStr.map(item=><h3 key={item}>{item}</h3>)}
    <hr/>
    {/*我是注释*/}
    {
        // 我是注释
    }
    <hr/>
    <p className={myp}></p>
    <hr/>
    <label htmlFor=""></label>
</div>

// 3.调用render函数渲染
ReactDOM.render(mydiv1,document.getElementById('app'))
