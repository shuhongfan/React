import React from "react";
import ReactDom from 'react-dom'

import App from './comments/app'

import store from "./redux/store";

function render(){
    ReactDom.render(<App store={store}></App>,document.getElementById('root'))
}
// 初始化渲染
render()

// 订阅监听 store中的状态变化
store.subscribe(render)
