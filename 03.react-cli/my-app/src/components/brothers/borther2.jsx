import React from "react";
import bus from "./bus";

export default class Borther2 extends React.Component{
    state={
        name:'',
        age:''
    }
    componentDidMount() {
        bus.on('sendValue',data=>{
            console.log(data)
            this.setState({...data})
        })
    }

    render() {
        const {name,age}=this.state
        return (
            <div>
                兄弟2组件-----{name}----{age}
            </div>
        );
    }
}
