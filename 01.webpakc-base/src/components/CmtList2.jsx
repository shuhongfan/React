import React from 'react'

// 导入评论项组件
import CmtItem from "@/components/CmtItem2";

// 导入样式表
// 直接导入css之后全局生效
import cssObj from '@/css/cmtlist.scss'

import 'bootstrap/dist/css/bootstrap.min.css'

console.log(cssObj)

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
            {/*<button className={[bootStrap.btn,bootStrap['btn-primary']].join(' ')}>按钮</button>*/}
            <button className="btn btn-primary">按钮</button>
            {/*<h1 className={cssObj.title+ ' test'}>这是评论列表组件</h1>*/}
            <h1 className={[cssObj.title,'test'].join(' ')}>这是评论列表组件</h1>
            {this.state.CommentList.map(item=><CmtItem key={item.id} {...item}></CmtItem>)}
        </div>
    }
}
