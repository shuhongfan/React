// 包含所有的action creator
import {INCREMENT,DECREMENT} from './action-types'

// 增加
export const increment=(number)=>({type:INCREMENT,data:number})
export const decrement=(number)=>({type:DECREMENT,data:number})
