// 包含n个reducer的函数模块
import {INCREMENT,DECREMENT} from './action-types'

export function counter(state=0,action) {
    console.log(state,action)
    switch (action.type) {
        case INCREMENT:
            return state+action.data
        case DECREMENT:
            return state-action.data
        default:
            return state
    }
}

export function xxx() {

}
