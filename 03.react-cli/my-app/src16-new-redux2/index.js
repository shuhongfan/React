import React from "react";
import ReactDOM from 'react-dom'


import store from "./redux/store";
import App from "./components/app";




function render(){
    ReactDOM.render(<App store={store}></App>,document.getElementById('root'))
}
render()

// 订阅监听
store.subscribe(()=>{
    ReactDOM.render(<App store={store}></App>,document.getElementById('root'))
})
