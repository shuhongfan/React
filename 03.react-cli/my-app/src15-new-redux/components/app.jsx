import React from "react";

export default class App extends React.Component{
    state={
        count:0
    }
    increment=()=>{
        // 1.得到选择的增加数量
        const number=this.select.value*1
        // 2.得到原本的count状态 并计算
        const count=this.state.count+number
        this.setState({count})
    }
    decrement=()=>{
        // 1.得到选择的增加数量
        const number=this.select.value*1
        // 2.得到原本的count状态 并计算
        const count=this.state.count-number
        this.setState({count})
    }
    incrementIfOdd=()=>{
        // 1.得到选择的增加数量
        const number=this.select.value*1
        // 2.得到原本的count状态 并计算
        const count=this.state.count
        if (count%2===1){
            this.setState({count:count+number})
        }
    }
    incrementAsync=()=>{
        // 1.得到选择的增加数量
        const number=this.select.value*1
        // 2.得到原本的count状态 并计算
        const count=this.state.count
        setTimeout(()=>{
            this.setState({count:count+number})
        },1000)
    }
    render() {
        const {count}=this.state
        return (
            <div>
                <h2>click {count} times</h2>
                <div>
                    <select name="" id="" ref={select=>this.select=select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    <button onClick={this.incrementAsync}>increment async</button>
                </div>
            </div>
        )
    }
}
