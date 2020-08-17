// 包含所有的action creator
// 生成action的对象函数 返回action对象
import {INCREMENT,DECREMENT} from './action-types'

// 增加
export const increment=(number)=>({type:INCREMENT,data:number})
export const decrement=(number)=>({type:DECREMENT,data:number})
