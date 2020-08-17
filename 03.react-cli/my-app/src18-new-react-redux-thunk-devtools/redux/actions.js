// 包含所有的action creator
// 生成action的对象函数 返回action对象
// 同步的action返回一个对象
// 异步的action返回的是一个函数

import {INCREMENT,DECREMENT} from './action-types'

// 增加
export const increment=(number)=>({type:INCREMENT,data:number})

// 减少
export const decrement=(number)=>({type:DECREMENT,data:number})

// 异步action
export const incrementAsync=(number)=>{
    return dispath=>{
        // 异步代码
        setTimeout(()=>{
            // 1s之才去分发一个增加的action
            dispath(increment(number))
        },1000)
    }
}
