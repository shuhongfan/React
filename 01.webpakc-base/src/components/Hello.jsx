import React from 'react'
export default function Hello(props){
    // 在组件中 返回一个合法的jsx虚拟dom元素
    console.log(props)
    // 组件中props是只读的
    // props.name='sd'
    return <div>这是hello组件---{props.name}---{props.age}---{props.gender}</div>
}

