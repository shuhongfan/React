import React, { Component } from 'react';

class Child extends Component {
    sendValueToParent=()=>{
        this.props.callback({
            name:'张无忌',
            age:60
        })
    }
    render() {
        return (
            <div>
                子组件----{this.props.name}---{this.props.age}
                {/*子组件传给父组件*/}
                <button onClick={this.sendValueToParent}>传值给父组件</button>
            </div>
        );
    }
}

export default Child;
