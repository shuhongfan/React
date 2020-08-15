import {createStore,applyMiddleware} from 'redux'
import thunk from "redux-thunk";

import {composeWithDevTools} from 'redux-devtools-extension'

import {counter} from './reducers'


// 生成一个store对象
// 内部会第一次调用reducer函数得到初始state
// 应用上异步中间件
const store=createStore(
    counter,
    composeWithDevTools(applyMiddleware(thunk))
)
console.log(store,store.getState())

export default store
