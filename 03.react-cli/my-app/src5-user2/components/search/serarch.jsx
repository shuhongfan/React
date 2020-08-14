import React from "react";
// import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'

// 订阅消息 绑定事件监听 (消息名 回调函数)
// PubSub.subscribe('MY TOPIC', mySubscriber);
// 发布消息 触发事件 (事件名 数据)
// PubSub.publish('MY TOPIC', 'hello world!');

export default class Serarch extends React.Component{
    // static propTypes={
    //     setSearchName:PropTypes.func.isRequired
    // }
    search=()=>{
        const searchName=this.input.value.trim()
        if (searchName){
            PubSub.publish('search',searchName)
        }
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={input=>this.input=input} type="text" placeholder="enter the name you search"/>
                    <button onClick={()=>this.search()}>Search</button>
                </div>
            </section>
        )
    }
}
