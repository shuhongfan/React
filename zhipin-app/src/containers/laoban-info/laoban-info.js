// 老板信息完善路由容器组件

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

class LaobanInfo extends React.Component{
    state={
        header: '', // 头像
        post: '',  // 职位
        info: '', // 个人或职位简介
        company: '', // 公司名称
        salary: '' // 月薪
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
                <NavBar>老板信息完善</NavBar>
                <HeaderSelector setHeader={this.setHeader}></HeaderSelector>
                <InputItem onChange={val=>this.handleChange('post',val)} placeholder="请输入招聘职位">招聘职位:</InputItem>
                <InputItem onChange={val=>this.handleChange('company',val)} placeholder="请输入公司名称">公司名称:</InputItem>
                <InputItem onChange={val=>this.handleChange('salary',val)} placeholder="请输入职位薪资">职位薪资:</InputItem>
                <TextareaItem onChange={val=>this.handleChange('info',val)} placeholder="请输入职位" title="职位要求" rows={3}></TextareaItem>
                <Button onClick={this.save} type="primary">保&nbsp;存</Button>
            </div>
        )
    }
}


export default connect(
    state=>({user:state.user}),
    {updateUser}
)(LaobanInfo)
