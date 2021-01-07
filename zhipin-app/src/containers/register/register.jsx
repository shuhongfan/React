// 注册路由组件

import React from "react";
import {Redirect} from 'react-router-dom'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Radio,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/actions'

import Logo from "../../components/logo/logo";
import "../../assets/css/index.less"

const ListItem=List.Item


class Register extends React.Component{
    state={
        username:'',
        password:'',
        password2:'',
        type:'dashen' // 用户类型 大神/老板
    }
    register=()=>{
        console.log(this.state)
        this.props.register(this.state)
    }
    // 处理输入数据的改变 更新对应的状态
    handleChange=(name,val)=>{
        // 更新状态
        this.setState({
            [name]:val // 属性名不是name 而是name的值
        })
    }
    toLogin=()=>{
        this.props.history.replace('/login')
    }
    render() {
        const {type}=this.state
        const {msg,redirectTo}=this.props.user
        // 如果redirectTo有值,就需要重定向到指定路由
        if (redirectTo){
            return <Redirect to={redirectTo}></Redirect>
        }
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;娉</NavBar>
                <Logo></Logo>
                <WingBlank>
                    <List>
                        {msg?<div className="error-msg">{msg}</div>:null}
                        <InputItem onChange={val=>{this.handleChange('username',val)}} placeholder="请输入用户名">用户名:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem onChange={val=>{this.handleChange('password',val)}} type="password" placeholder="请输入密码">密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <InputItem onChange={val=>{this.handleChange('password2',val)}} type="password" placeholder="请输入确认密码">确认密码:</InputItem>
                        <WhiteSpace></WhiteSpace>
                        <ListItem>
                            <span>用户类型:</span>&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='dashen'} onChange={()=>this.handleChange('type','dashen')}>大神</Radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio checked={type==='laoban'} onChange={()=>this.handleChange('type','laoban')}>老板</Radio>
                        </ListItem>
                        <WhiteSpace></WhiteSpace>
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.register} type="primary">注册</Button>
                        <Button onClick={this.toLogin}>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}


export default connect(
    state=>({user:state.user}),
    {
        register
    }
)(Register)
