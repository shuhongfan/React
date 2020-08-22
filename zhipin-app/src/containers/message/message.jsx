// 消息主界面路由容器组件
import React from "react";
import {connect} from 'react-redux'
import {List, Badge} from 'antd-mobile'

const Item = List.Item
const Brief = Item.Brief

// 对chatmsgs按chat_id进行分组 得到每个组的lastmsg组成的数组
function getLastMsgs(chatMsgs,userId) {
// 1.找出每个聊天的lastmsg 并用一个对象容器来保存 {chat_id,lastMsg}
    const lastMsgsObjs={}
    chatMsgs.forEach(msg=>{
        // 对msg进行个体的统计
        if (msg.to===userId&&!msg.read){
            msg.unReadCount=1
        } else {
            msg.unReadCount=0
        }
        // 得到msg的聊天标识id
        const chatId=msg.chat_id
        // 获取已保存的当前组件的lastmsg
        const lastMsg=lastMsgsObjs[chatId]
        if (!lastMsg){ // 当前msg就是所在组的lastmsg
            lastMsgsObjs[chatId]=msg
        } else { // 有
            // 保存已经统计的未读数量=已经统计的+当前的msg
            const unReadCount=lastMsg.unReadCount+msg.unReadCount
            // 如果msg比lastMSg晚 就将msg保存为lastmsg
            if (msg.create_time>lastMsg.create_time){
                lastMsgsObjs[chatId]=msg
            }
            // 累加unreadcount并保存在最新的lastmsg上
            lastMsgsObjs[chatId].unReadCount=unReadCount
        }
    })
//     2.得到所有lastmsg的数组
    const lastMsgs=Object.values(lastMsgsObjs)
//     3.对数组进行排序 按create_time降序
    lastMsgs.sort(function (m1,m2) {
        // 如果结果<0,将m1放在前面
        return m2.create_time-m1.create_time
    })
    return lastMsgs
}

class Message extends React.Component{
    render() {
        const {user}=this.props
        const {users,chatMsgs}=this.props.chat
        // 对chatmsgs按chat_id进行分组
        const lastMsgs=getLastMsgs(chatMsgs,user._id)
        return (
            <List style={{marginBottom:50,marginTop:50}}>
                {
                    lastMsgs.map(msg=>{
                        const targetUserId=msg.to===user._id?msg.from:msg.to
                        const targetUser=users[targetUserId]
                        return(
                            (
                                <Item
                                    key={msg._id}
                                    extra={<Badge text={msg.unReadCount}/>}
                                    thumb={targetUser.header?require(`../../assets/img/${targetUser.header}.png`):null}
                                    arrow='horizontal'
                                    onClick={()=>this.props.history.push(`/chat/${targetUserId}`)}
                                >
                                    {msg.content}
                                    <Brief>{targetUser.username}</Brief>
                                </Item>
                            )
                        )
                    })
                }
            </List>
        );
    }
}

export default connect(
    state=>({user:state.user,chat:state.chat}),
    {}
)(Message)
