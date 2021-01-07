// 大神主界面路由容器组件
import React from "react";
import PropTypes from 'prop-types'
import {TabBar} from 'antd-mobile'
// 在非路由组件使用路由组件库
import {withRouter} from 'react-router-dom'

const Item=TabBar.Item

class NavFooter extends React.Component{
    static propTypes={
        navList:PropTypes.array.isRequired,
        unReadCount:PropTypes.number.isRequired
    }
    render() {
        let {navList,unReadCount}=this.props
        // 过滤hide为true的nav
        navList=navList.filter(nav=>!nav.hide)
        const path=this.props.location.pathname
        return (
            <TabBar>
                {
                    navList.map(
                        nav=> <Item
                            badge={nav.path==='/message'?unReadCount:0}
                            key={nav.path}
                            title={nav.text}
                            icon={{uri:require('./img/'+nav.icon+'.png')}}
                            selectedIcon={{uri:require('./img/'+nav.icon+'-selected.png')}}
                            selected={nav.path===path}
                            onPress={()=>this.props.history.replace(nav.path)}
                        ></Item>
                    )
                }
            </TabBar>
        );
    }
}

// 向外包括witchRouter
// 内部会向组件中传入一些路由组件特有属性 history/location
export default withRouter(NavFooter)
