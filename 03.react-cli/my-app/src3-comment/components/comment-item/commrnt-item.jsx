import React from "react";
import './comment-item.css'
import PropTypes from 'prop-types'

export default class CommrntItem extends React.Component{
    static propTypes={
        comment:PropTypes.object.isRequired,
        deleteComment:PropTypes.func.isRequired
    }
    deleteComment=(e)=>{
        const {comment,deleteComment,index}=this.props
        if (window.confirm(`确定删除${comment.username}的评论吗？`)){
            deleteComment(index)
        }
    }
    render() {
        const {comment}=this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a onClick={(e)=>this.deleteComment(e)} href="#!;">删除</a>
                </div>
                <p className="user"><span>{comment.username}</span><span>说:</span></p>
                <p className="centence">{comment.content}</p>
            </li>
        )
    }
}
