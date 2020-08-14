import React from "react";
// import {INCREMENT,DECREMENT} from '../redux/action-types'
import * as actions from '../redux/actions'
export default class App extends React.Component{
    // state={
    //     count:0
    // }
    increment=()=>{
        const number=this.select.value*1
        // const count=this.state.count+number
        // this.setState({count})
        // this.props.store.dispatch({type:INCREMENT,data:number})
        this.props.store.dispatch(actions.increment(number))
    }
    decrement=()=>{
        const number=this.select.value*1
        // const count=this.state.count-number
        // this.setState({count})
        this.props.store.dispatch(actions.decrement(number))
    }
    incrementIfOdd=()=>{
        const number=this.select.value*1
        // const count=this.state.count
        const count=this.props.store.getState()
        if (count%2===1){
            // this.setState({count:count+number})
            this.props.store.dispatch(actions.increment(number))
        }
    }
    incrementAsync=()=>{
        const number=this.select.value*1
        // const count=this.state.count
        setTimeout(()=>{
            // this.setState({count:count+number})
            this.props.store.dispatch(actions.increment(number))
        },1000)
    }
    render() {
        // const {count}=this.state
        const count=this.props.store.getState()
        // debugger
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
        );
    }
}
