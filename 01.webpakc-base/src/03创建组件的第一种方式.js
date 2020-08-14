// 1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 导入hello组件
// 默认 不单独配置的话 不能省略 jsx
// import Hello from "./components/Hello";
import Hello from "@/components/Hello";

// import Hello from "@/components/Hello";
// 这里的@符号 表示项目根目录中的src目录

// 第一种创建组件的方式
// 只有props 没有自己的私有数据和生命周期函数
// function Hello(props){
//     // 在组件中 返回一个合法的jsx虚拟dom元素
//     console.log(props)
//     // 组件中props是只读的
//     // props.name='sd'
//     return <div>这是hello组件---{props.name}---{props.age}---{props.gender}</div>
// }
const dog={
    name:'大黄',
    age:3,
    gender:'雄'
}
// 3.调用render函数渲染
ReactDOM.render(<div>
    {/*<Hello name={dog.name} age={dog.age} gender={dog.gender}>hello组件</Hello>*/}
    <Hello {...dog}></Hello>
</div>,document.getElementById('app'))

