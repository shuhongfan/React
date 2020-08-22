// 大神信息完善路由容器组件

import React from "react";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {
    NavBar,
    InputItem,
    TextareaItem,
    Button
} from 'antd-mobile'
import {updateUser} from '../../redux/actions'
import HeaderSelector from "../../components/header-selector/header-selector";

class DashenInfo extends React.Component{
    state={
        header: '', // 头像
        post: '',  // 职位
        info: '' // 个人或职位简介
    }
    // 更新header状态
    setHeader=(header)=>{
        this.setState({header})
    }
    handleChange=(name,value)=>{
        this.setState({
            [name]:value
        })
    }
    save=()=>{
        console.log(this.state)
        this.props.updateUser(this.state)
    }
    render() {
        const {header,type}=this.props.user
        if (header){
            const path=type==='dashen'?'/dashen':'/laoban'
            return <Redirect to={path}></Redirect>
        }
        return(
            <div>
                <NavBar>大神信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem onChange={val=>this.handleChange('post',val)} placeholder="请输入求职岗位">求职岗位:</InputItem>
                <TextareaItem onChange={val=>this.handleChange('info',val)} placeholder="请输入个人介绍" title="个人介绍:"  rows={3}></TextareaItem>
                <Button onClick={this.save} type="primary">保&nbsp;存</Button>
            </div>
        )
    }
}


export default connect(
    state=>({user:state.user}),
    {updateUser}
)(DashenInfo)

