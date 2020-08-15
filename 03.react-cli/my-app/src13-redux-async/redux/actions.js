// 包含所有的 action creator
// 同步的action返回的是一个对象
// 异步的action返回的是一个函数

import {DECREMENT, INCREMENT} from "./action-types";

export const increment=(number)=>({type:INCREMENT,data:number})
export const decrement=(number)=>({type:DECREMENT,data:number})

// 异步action
export const incrementAsync=(number)=>{
    return dispath=>{
        // 异步代码
        setTimeout(()=>{
            // 1s之后才分发增加一个active
            dispath(increment(number))
        },1000)
    }
}
