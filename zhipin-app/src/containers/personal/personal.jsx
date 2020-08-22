// 个人主界面路由容器组件
import React from "react";
import Cookies from 'js-cookie'
import {connect} from 'react-redux'
import {Result, List, WhiteSpace, Button, Modal, WingBlank} from 'antd-mobile'
import {resetUser} from '../../redux/actions'

const Item=List.Item
const Brief=Item.Brief

class Personal extends React.Component{
    logout=()=>{
        Modal.alert('退出','确定登出吗?',[
            {text:'取消'},
            {
                text:'确定',
                onPress:()=>{
                    // 删除cookie
                    Cookies.remove('userid')
                    // 删除redux 重置redux
                    this.props.resetUser()
                }
            }
        ])
    }
    render() {
        const {username,header,company,salary,post,info} = this.props.user
        return (
            <div  style={{marginBottom:50,marginTop:50}}>
                <Result
                    img={<img src={require('../../assets/img/'+header+'.png')} style={{width:50}} alt="header" />}
                    title={username}
                    message={company}></Result>
                <List renderHeader={()=>'相关信息'}>
                    <Item multipleLine>
                        <Brief>职位:{post}</Brief>
                        <Brief>简介:{info}</Brief>
                        {salary?<Brief>薪资:{salary}</Brief>:null}
                    </Item>
                </List>
                <WhiteSpace></WhiteSpace>
                <List>
                    <Button onClick={this.logout} type="warning">退出登录</Button>
                </List>
            </div>
        );
    }
}

export default connect(
    state=>({user:state.user}),
    {resetUser}
)(Personal)
