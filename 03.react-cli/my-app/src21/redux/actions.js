// 板含量所有action creator的工厂函数
import {ADD_COMMENT,DELETE_COMMENT,RECIVE_COMMENTS} from './action-types'

// 添加同步
export const addComment=(comment)=>({type:ADD_COMMENT,data:comment})

// 删除同步
export const deleteComment=(index)=>({type:DELETE_COMMENT,data:index})

// 同步接收comments
const receiveComments=(comments)=>({type:RECIVE_COMMENTS,data:comments})

// 异步获取数据
export const getComments=()=>{
    return dispatch=>{
        setTimeout(()=>{
            const comments=[
                {username:'tom',content:'react挺好的'},
                {username:'jack',content:'react挺好的1'},
                {username:'tom12',content:'react挺好的2'},
                {username:'tom3453',content:'react挺好的3'}
            ]
            dispatch(receiveComments(comments))
        },1000)
    }
}
