// 包含n个reducer函数 根据老的state和action返回新的state
import {combineReducers} from 'redux'
import {ADD_COMMENT,DELETE_COMMENT,RECIVE_COMMENTS} from './action-types'

const initComments=[]
function comments(state=initComments,action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state]
        case DELETE_COMMENT:
            return state.filter((comment,index)=>index!==action.data)
        case RECIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}
function counter(state=[],action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data,...state]
        case DELETE_COMMENT:
            return state.filter((comment,index)=>index!==action.data)
        case RECIVE_COMMENTS:
            return action.data
        default:
            return state
    }
}

export default combineReducers({
    comments,
    counter
})
