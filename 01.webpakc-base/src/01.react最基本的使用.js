console.log('ook')
// webpack-dev-server打包好的main.js托管到内存中 在目录结构中看不到

// 1.建组件 虚拟dom元素 生命周期
import React from 'react'
// 把创建好的 组件 虚拟dom 放到页面上展示
import ReactDOM from 'react-dom'

// 2. 创建虚拟dom元素
// 参数1 创建的类型 字符串 表示元素的名称
// 参数2 是一个对象或null，表示 当前这个 dom 元素的属性
// 参数3 子节点 包括其他虚拟dom 获取文本子节点
// 参数n 其他子节点
// const myh1=React.createElement('h1',null,'这是一个大大的h1')
const myh1=React.createElement('h1',{
    id:'myh1',
    title:'this is a div'
},'这是一个大大的h1')

const mydiv=React.createElement('div',null,'这是一个div元素',myh1)


// 3. 使用reactDOM把虚拟DOM渲染到页面上
// 参数1 要渲染的那个虚拟dom元素
// 参数2 指定页面上一个容器 dom元素对象
ReactDOM.render(mydiv,document.getElementById('app'))
