import React from "react";
import {connect} from "react-redux";
import {NavBar, List, InputItem, Grid, Icon} from 'antd-mobile'
import {sendMsg,readMsg} from '../../redux/actions'
import QueueAnim from 'rc-queue-anim';

const Item=List.Item

class Chat extends React.Component{
    state={
        content:'',
        isShow:false // 是否显示表情列表
    }
    // 在第一次render之前回调
    componentWillMount() {
        // 初始化表情列表数据
        const emojis=['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','🙃',
            '😉','😊','😇','🥰','😍','🤩','😘','😗','☺','😚','😙','😋',
            '😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🤨','😐',
            '😑','😶','😏','😒','🙄','😬','🤥','😌','😔','😪','🤢','🤮',
            '🤧','🥵','🥶','🥴','😵','🤯','🤠','🥳','😎','🤓','🧐','😕']
        this.emojis=emojis.map(emoji=>({text:emoji}))
    }
    componentDidMount() {
        // 初始化显示列表
        window.scrollTo(0,document.body.scrollHeight)
    }
    componentDidUpdate() {
        // 更新显示列表
        window.scrollTo(0,document.body.scrollHeight)
    }
    componentWillUnmount () { // 在退出之前
        // 发请求更新消息的未读状态
        const from = this.props.match.params.userid
        const to = this.props.user._id
        this.props.readMsg(from, to)
    }
    toggleShow=()=>{
        const isShow=!this.state.isShow
        this.setState({isShow})
        if (isShow){
            setTimeout(()=>{
                window.dispatchEvent(new Event('resize'))
            },0)
        }
    }
    handleSend=()=>{
        const from=this.props.user._id
        const to=this.props.match.params.userid
        const content=this.state.content.trim()
        // 发送消息
        if (content){
            this.props.sendMsg({from,to,content})
        }
        // 清除输入数据
        this.setState({content:'',isShow:false})
    }
    render() {
        const {user}=this.props
        const {users,chatMsgs}=this.props.chat
        // 计算当前聊天的chatid
        const metId=user._id
        // 如果还没有获取数据 直接不做任何显示
        if (!users[metId]){
            return null
        }
        const targetId=this.props.match.params.userid
        const chatId=[metId,targetId].sort().join('_')
        // 对chatMsgs进行过滤
        const msgs=chatMsgs.filter(msg=>msg.chat_id==chatId)
        // 得到目标用户的header图片对象
        const targetHeader=users[targetId].header
        const targetIcon=targetHeader?require('../../assets/img/'+targetHeader+'.png'):null
        return (
            <div>
                <div id="chat-page">
                    <NavBar
                        onLeftClick={()=>this.props.history.goBack()}
                        icon={<Icon type="left"/>}
                        className="sticky-header">{users[targetId].username}</NavBar>
                    <List style={{marginTop:50,marginBottom:50}}>
                        <QueueAnim type="alpha" delay="100">
                            {
                                msgs.map(msg=>{
                                    if (metId===msg.to){
                                        return <Item
                                            key={msg._id}
                                            thumb={targetIcon}>{msg.content}</Item>
                                    } else {
                                        return <Item
                                            key={msg._id}
                                            className="chat-me"
                                            extra="我">{msg.content}</Item>
                                    }
                                })
                            }
                        </QueueAnim>
                    </List>
                </div>
                <div className="am-tab-bar">
                    <InputItem
                        onFocus={()=>this.setState({isShow:false})}
                        value={this.state.content}
                        onChange={content=>this.setState({content})}
                        placeholder="请输入内容"
                        extra={<span>
                            <span onClick={this.toggleShow}>😊</span>
                            <span onClick={this.handleSend}>发送</span>
                        </span>}></InputItem>
                    {this.state.isShow?(
                        <Grid
                            data={this.emojis}
                            columnNum={8}
                            carouselMaxRow={4}
                            isCarousel={true}
                            onClick={(item)=>{
                                this.setState({content:this.state.content+item.text})
                            }}
                        ></Grid>
                    ):null}
                </div>
            </div>
        );
    }
}
export default connect(
    state=>({user:state.user,chat:state.chat}),
    {sendMsg,readMsg}
)(Chat)
