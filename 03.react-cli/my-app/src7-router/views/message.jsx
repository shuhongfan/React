import React from "react";
import {Route} from 'react-router-dom'
import MessageDetail from "./message-detail";
import MyNavLink from "../components/MyNavLink";

export default class Message extends React.Component{
    state={
        messages:[
            // {id:1,title:'message001'},
            // {id:3,title:'message003'},
            // {id:4,title:'message004'}
        ]
    }
    // 模拟发送ajax请求异步获取数据
    componentDidMount() {
        setTimeout(()=>{
            const messages=[
                {id:1,title:'message001'},
                {id:3,title:'message003'},
                {id:4,title:'message004'}
            ]
            this.setState({messages})
        },1000)
    }
    showDetail=(id)=>{
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }
    showDetail2=(id)=>{
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }
    back=()=>{
        this.props.history.goBack()
    }
    forward=()=>{
        this.props.history.goForward()
    }
    reqPage=()=>{
        window.location="http://baidu.com"
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.messages.map((message,index)=><li key={index}>
                            {/*<a href={`/home/message/messagedetail/${message.id}`}>{message.title}</a>*/}
                            <MyNavLink to={`/home/message/messagedetail/${message.id}`}>{message.title}</MyNavLink>
                            ---------<button onClick={()=>this.showDetail(message.id)}>push查看</button>
                            ---------<button onClick={()=>this.showDetail2(message.id)}>replace查看</button>
                        </li>)
                    }
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>
                <p>
                    <button onClick={this.reqPage}>页面跳转</button>
                </p>
                <Route path={`/home/message/messagedetail/:id`} component={MessageDetail}></Route>
            </div>
        )
    }
}
