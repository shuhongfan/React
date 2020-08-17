// 包含n和action creator
// 异步action
// 同步action

import {
    reqRegister,
    reqLogin
} from '../api/index'

// 注册异步action
export const register=(user)=>{
    return async dispatch=>{
        // 发送注册的异步ajax请求
        const response=await reqRegister(user)
        const result=response.data
        if (result.code===0){  // 成功

        } else { // 失败

        }
    }
}

// 登录异步action
export const login=(user)=>{
    return async dispatch=>{
        // 发送注册的异步ajax请求
        const response=await reqLogin(user)
        const result=response.data
        if (result.code===0){  // 成功

        } else { // 失败

        }
    }
}
