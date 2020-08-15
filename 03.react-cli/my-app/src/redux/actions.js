// 包含了所有的action creator
// action的工厂函数

import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-types'
import {comments} from "./reducers";

// 同步添加
export const addComment=(comment)=>({type:ADD_COMMENT,data:comment})

// 同步删除
export const deleteComment=(index)=>({type:DELETE_COMMENT,data:index})

// 同步接收comments
const receiveComments=(comments)=>({type:RECEIVE_COMMENTS,data:comments})

// 异步从后台获取数据
export const getComments=()=>{
    return dispatch=>{
        // 模拟ajax请求获取异步数据
        setTimeout(()=>{
            const comments=[
                {username:'tom',content:'react挺好的'},
                {username:'jack',content:'react挺好的1'},
                {username:'tom12',content:'react挺好的2'},
                {username:'tom3453',content:'react挺好的3'}
            ]
            // 分发同步action
            dispatch(receiveComments(comments))
        },1000)
    }
}
