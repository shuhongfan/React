// 包含n个reducer函数
// 根据老的state和action返回新的state
import {combineReducers} from 'redux'
import {ADD_COMMENT,DELETE_COMMENT,RECEIVE_COMMENTS} from './action-types'

function counter(state=0,action) {
    console.log(state,action)
    switch (action.type) {
        case 'INCREMENT':
            return state+action.data
        case 'DECREMENT':
            return state-action.data
        default:
            return state
    }
}

const initComments=[]
function comments(state=initComments,actions) {
    switch (actions.type) {
        case ADD_COMMENT:
            return [actions.data,...state]
        case DELETE_COMMENT:
            return state.filter((comment,index)=>index!==actions.data)
        case RECEIVE_COMMENTS:
            return actions.data
        default:
            return state
    }
}

export default combineReducers({
    counter, // 指定reducer对应的属性
    comments
})
