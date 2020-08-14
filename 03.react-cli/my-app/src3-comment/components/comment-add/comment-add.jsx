import React from "react";
import PropTypes from 'prop-types'
export default class CommentAdd extends React.Component{
    state={
        username:'',
        content:''
    }
    static propTypes={
        addComment:PropTypes.func.isRequired
    }
    handSubmit=()=>{
        // 收集数据
        const comment=this.state
        // 更新状态
        this.props.addComment(comment)
        // 清除输入数据
        this.setState({
            username:'',
            content:''
        })
    }
    handNameChange=(event)=>{
        const username=event.target.value
        this.setState({username})
    }
    handContentChange=(event)=>{
        const content=event.target.value
        this.setState({content})
    }
    render() {
        const {username,content}=this.state
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input onChange={(e)=>this.handNameChange(e)} value={username} type="text" className="form-control" placeholder="用户名"/>
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea onChange={(e)=>this.handContentChange(e)} value={content} className="form-control" rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={()=>this.handSubmit()} type="button" className="btn btn-default pull-right">提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
