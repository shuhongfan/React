import React from "react";
import CommrntItem from "../comment-item/commrnt-item";
import './comment-list.css'
import PropTypes from 'prop-types'


export default class CommentList extends React.Component{
    // 给组件类指定属性
    static propTypes={
        comments:PropTypes.array.isRequired,
        // deleteComment:PropTypes.func.isRequired
    }
    render() {
        // const {comments,deleteComment}=this.props
        const {comments}=this.props
        const display=comments.length===0?'block':'none'
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment,index)=><CommrntItem comment={comment} key={index} index={index}></CommrntItem>)
                    }
                </ul>
            </div>
        )
    }
}


// CommentList.propTypes={
//     comments: PropTypes.array.isRequired
// }
