// 注册路由组件

// 注册路由组件

import React from "react";
import {Redirect} from 'react-router-dom'
import {
    NavBar,
    WingBlank,
    List,
    InputItem,
    WhiteSpace,
    Button
} from 'antd-mobile'
import {connect} from 'react-redux'
import Logo from "../../components/logo/logo";
import {login} from '../../redux/actions'
import "../../assets/css/index.less"

class Login extends React.Component{
    state={
        username:'',
        password:'',
    }
    login=()=>{
        console.log(this.state)
        this.props.login(this.state)
    }
    // 处理输入数据的改变 更新对应的状态
    handleChange=(name,val)=>{
        // 更新状态
        this.setState({
            [name]:val // 属性名不是name 而是name的值
        })
    }
    toRegister=()=>{
        this.props.history.replace('/register')
    }
    render() {
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
                        <WhiteSpace></WhiteSpace>
                        <Button onClick={this.login} type="primary">登录</Button>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default connect(
    state=>({user:state.user}),
    {login}
)(Login)
