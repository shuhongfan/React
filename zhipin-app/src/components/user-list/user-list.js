// 显示指定用户列表的ui组件

import React from "react";
import PropTypes from 'prop-types'
import {WhiteSpace,WingBlank,Card} from 'antd-mobile'
import QueueAnim from 'rc-queue-anim';
// 在非路由组件使用路由组件库
import {withRouter} from 'react-router-dom'
const Header=Card.Header
const Body=Card.Body

class UserList extends React.Component{
    static propTypes={
        userList:PropTypes.array.isRequired
    }
    render() {
        const {userList}=this.props
        return (
            <WingBlank style={{marginBottom:50,marginTop:50}}>
                <QueueAnim type="scale">
                    {
                        userList.map(user=>(
                            <div key={user._id}>
                                <WhiteSpace></WhiteSpace>
                                <Card onClick={()=>this.props.history.push('/chat/'+user._id)}>
                                    <Header
                                        thumb={require(`../../assets/img/${user.header}.png`)}
                                        extra={user.username}></Header>
                                    <Body>
                                        <div>职位:{user.post}</div>
                                        {user.company?<div>公司:{user.company}</div>:null}
                                        {user.salary?<div>月供:{user.salary}</div>:null}
                                        <div>描述:{user.info}</div>
                                    </Body>
                                </Card>
                            </div>
                        ))
                    }
                </QueueAnim>
            </WingBlank>
        );
    }
}
export default withRouter(UserList)
