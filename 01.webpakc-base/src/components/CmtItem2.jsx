import React from 'react'

// 第三次封装 抽离为单独的样式表模块
import cssObj from '@/css/cmtitem.scss'

console.log(cssObj)

export default function CmtItem(props) {
    return <div className={cssObj.cmtbox} id={cssObj.cmtTitle}>
        <h2 className={cssObj.title}>评论人：{props.user}</h2>
        <p className={cssObj.content}>评论内容：{props.content}</p>
    </div>
}
