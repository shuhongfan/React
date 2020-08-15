import React from "react";
import CommentAdd from "../comment-add/comment-add";
import CommentList from "../comment-list/comment-list";
import PubSub from 'pubsub-js'

export default class App extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state={
    //         comments:[
    //             {username:'tom',content:'react挺好的'},
    //             {username:'jack',content:'react挺好的1'},
    //             {username:'tom12',content:'react挺好的2'},
    //             {username:'tom3453',content:'react挺好的3'}
    //         ]
    //     }
    // }

    // 给组件对象指定state属性
    state={
        comments:[
            {username:'tom',content:'react挺好的'},
            {username:'jack',content:'react挺好的1'},
            {username:'tom12',content:'react挺好的2'},
            {username:'tom3453',content:'react挺好的3'}
        ]
    }
    // 添加评论
    addComment=(comment)=>{
        const {comments}=this.state
        comments.unshift(comment)
        // 更新状态
        this.setState({comments})
    }
    // 删除评论
    // deleteComment=(index)=>{
    deleteComment=(msg,index)=>{
        const {comments}=this.state
        comments.splice(index,1)
        // 更新状态
        this.setState({comments})
    }
    componentDidMount() {
        // 订阅消息
        // PubSub.subscribe('deleteComponent',(msg,index)=>{
        PubSub.subscribe('deleteComponent', this.deleteComment)
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
                    <CommentList comments={comments}></CommentList>
                </div>
            </div>
        )
    }
}

