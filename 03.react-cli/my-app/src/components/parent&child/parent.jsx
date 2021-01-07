import React, { Component } from 'react';
import Child from "./child";

class Parent extends Component {
    state={
        name:'',
        age:''
    }
    getValue=data=>{
        console.log(data)
        this.setState({...data})
    }
    render() {
        const {name,age}=this.state
        return (
            <div>
                父组件----{name}-----{age}
                {/*父组件传值给子组件*/}
                <Child name="张三疯" age={666} callback={this.getValue}></Child>
            </div>
        );
    }
}

export default Parent;
