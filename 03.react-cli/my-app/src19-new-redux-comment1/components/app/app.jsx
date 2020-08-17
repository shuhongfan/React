import React from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";


export default class App extends React.Component{
    state={
        comments:[]
    }
    componentDidMount() {
        setTimeout(()=>{
            const comments=[
                {username:'tom',content:'react挺好的'},
                {username:'jack',content:'react挺好的1'},
                {username:'tom12',content:'react挺好的2'},
                {username:'tom3453',content:'react挺好的3'}
            ]
            this.setState({comments})
        },1000)
    }

    // 添加评论
    addComment=(comment)=>{
        const {comments}=this.state
        comments.unshift(comment)
        // 更新状态
        this.setState({comments})
    }
    // 删除评论
    deleteComment=(index)=>{
        const {comments}=this.state
        comments.splice(index,1)
        // 更新状态
        this.setState({comments})
    }
    render() {
        const {comments}=this.state
        return (
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <CommentAdd addComment={this.addComment}></CommentAdd>
                    <CommentList comments={comments} deleteComment={this.deleteComment}></CommentList>
                </div>
            </div>
        )
    }
}

