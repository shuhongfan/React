import React from 'react'
import CmtItem from "@/components/CmtItem";

export default class CmtList extends React.Component{
    constructor() {
        super();
        this.state={
            CommentList:[
                {id:1,user:'张三1',content:'哈哈1'},
                {id:2,user:'张三2',content:'哈哈2'},
                {id:3,user:'张三3',content:'哈哈3'},
                {id:4,user:'张三4',content:'哈哈4'},
                {id:5,user:'张三5',content:'哈哈5'},
                {id:6,user:'张三6',content:'哈哈6'},
                {id:7,user:'张三7',content:'哈哈7'},
                {id:8,user:'张三8',content:'哈哈8'}
            ]
        }
    }
    render() {
        return <div>
            <h1 style={{
                color:'red',
                fontSize:'35px',
                zIndex:3,
                fontWeight:200,
                textAlign:'center'}}>这是评论列表组件</h1>
            {this.state.CommentList.map(item=><CmtItem key={item.id} {...item}></CmtItem>)}
        </div>
    }
}
