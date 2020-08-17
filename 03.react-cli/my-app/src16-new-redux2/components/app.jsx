import React from "react";
import {INCREMENT,DECREMENT} from '../redux/action-types'
import {increment,decrement} from '../redux/actions'

export default class App extends React.Component{
    increment=()=>{
        const number=this.select.value*1
        // this.props.store.dispatch({
        //     type:INCREMENT,
        //     data:number
        // })
        this.props.store.dispatch(increment(number))
    }
    decrement=()=>{
        const number=this.select.value*1
        // this.props.store.dispatch({
        //     type:DECREMENT,
        //     data:number
        // })
        this.props.store.dispatch(decrement(number))
    }
    incrementIfOdd=()=>{
        const number=this.select.value*1
        const count=this.props.store.getState()
        if (count%2===1){
            // this.props.store.dispatch({
            //     type:INCREMENT,
            //     data:number
            // })
            this.props.store.dispatch(increment(number))
        }
    }
    incrementAsync=()=>{
        const number=this.select.value*1
        setTimeout(()=>{
            // this.props.store.dispatch({
            //     type:INCREMENT,
            //     data:number
            // })
            this.props.store.dispatch(increment(number))
        },1000)
    }
    render() {
        const count=this.props.store.getState()
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
