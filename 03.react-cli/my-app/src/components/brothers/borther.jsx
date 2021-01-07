import React from "react";
import bus from "./bus";

export default class Borther extends React.Component{
    sentValueToBrother2=()=>{
        bus.emit('sendValue',{
            name:'赵敏',
            age:600
        })
    }
    render() {
        return (
            <div>
                兄弟1组件
                <button onClick={this.sentValueToBrother2}>传值给兄弟2</button>
            </div>
        );
    }
}
