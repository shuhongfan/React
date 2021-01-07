// 注册路由组件

import React from "react";
import {Switch,Route,Redirect} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
// 可以操作前端cookie
import Cookies from 'js-cookie'
import {connect} from 'react-redux'

import LaobanInfo from "../laoban-info/laoban-info";
import DashenInfo from "../dashen-info/dashen-info";
import NotFound from "../../components/not-found/not-found";
import Message from "../message/message";
import Dashen from "../dashen/dashen";
import Laoban from "../laoban/laoban";
import NavFooter from "../../components/nav-footer/nav-footer";
import Chat from "../chat/chat";

import {getRedirectTo} from '../../utils/index'
import {getUser} from '../../redux/actions'
import Personal from "../personal/personal";


class Main extends React.Component{
    // 给组件对象添加属性
    navList=[ // 包含所有导航组件相关信息数据
        {
            path:'/laoban',
            component:Laoban,
            title:'大神列表',
            icon:'dashen',
            text:'大神'
        },
        {
            path:'/dashen',
            component:Dashen,
            title:'老板列表',
            icon:'laoban',
            text:'老板'
        },
        {
            path:'/message',
            component:Message,
            title:'消息列表',
            icon:'message',
            text:'消息'
        },
        {
            path:'/personal',
            component:Personal,
            title:'用户中心',
            icon:'personal',
            text:'个人'
        }
    ]
    componentDidMount() {
        // 登陆过 cookie有userid 但没有登录 redux的user中没有_id 发请求获取对应的user
        const userid=Cookies.get('userid')
        const {_id}=this.props.user
        if (userid&&!_id){
            console.log('发送ajax请求')
            this.props.getUser()
        }
    }
    render() {
        // 读取cookie中的userid
        const userid=Cookies.get('userid')
        // 如果没有 自动重定向到登录界面
        if (!userid){
            return <Redirect to="/login"></Redirect>
        }
        // 如果有 读取redux中的user状态
        const {user,unReadCount}=this.props
        // debugger
        // 如果user没有_id 返回null
        if (!user._id){
            return null
        } else {
            // 如果有_id 显示对应的界面
            let path=this.props.location.pathname
            // 如果请求根路径 根据user的type和header来计算出一个重定向的路由根路径 并自动重定向
            if (path==='/'){
                path=getRedirectTo(user.type,user.header)
                return <Redirect to={path}></Redirect>
            }
        }
        const {navList}=this
        // 请求的路径
        const path=this.props.location.pathname
        // 得到当前的nav
        const currentNav=navList.find(nav=>nav.path===path)
        if (currentNav){
            // 决定哪个路由需要隐藏
            if (user.type==='laoban'){
                // 隐藏数组第二个
                navList[1].hide=true
            } else {
                // 隐藏数组第一个
                navList[0].hide=true
            }
        }
        return (
            <div>
                {currentNav?<NavBar className="sticky-header">{currentNav.title}</NavBar>:null}
                <Switch>
                    {
                        navList.map(nav=><Route key={nav.path} path={nav.path} component={nav.component}></Route>)
                    }
                    <Route path="/laobaninfo" component={LaobanInfo}></Route>
                    <Route path="/dasheninfo" component={DashenInfo}></Route>
                    <Route path="/chat/:userid" component={Chat}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
                {currentNav?<NavFooter unReadCount={unReadCount} navList={navList}></NavFooter>:null}
            </div>
        );
    }
}
export default connect(
    state=>({user:state.user,unReadCount:state.chat.unReadCount}),
    {getUser}
)(Main)

// 1实现自动登录
// componentDidMount
// 1.1登陆过(cookie中有userid) 但没有登录 发送请求对应的user
// 1.2如果cookie中没有userid 自动进入login界面
// 1.3判断redux管理的user中是否有_id 暂时不做任何显示
// 1.4如果有 说明当前已经登录 显示对于的界面
// 1.5如果已经登录 如果请求根路径 根据user的type和header来计算出一个重定向的路由路径 并自动重定向
