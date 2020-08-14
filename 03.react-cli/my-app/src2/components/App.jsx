import React from "react";
import logo from './logo512.png'

export default class App extends React.Component{
    render() {
        return <div>
            <img className="logo" src={logo} alt=""/>
            <p className="title">react app组件</p>
        </div>
    }
}
