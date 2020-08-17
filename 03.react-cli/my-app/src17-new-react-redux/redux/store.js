import {createStore} from 'redux'
import {counter} from './reducers'

// 生成一个store对象
// 内部会第一次调用reducer初始化state
const  store=createStore(counter)
console.log(store)

export default store
