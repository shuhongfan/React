import React from "react";
const allMessages=[
    {id:1,title:'message001',content:'我爱你'},
    {id:3,title:'message003',content: '我爱你 中国'},
    {id:4,title:'message004',content: '我爱你 香港'}
    ]

export default function MessageDetail(props) {
    const {id}=props.match.params
    // debugger
    const message=allMessages.find(message=>message.id===id*1)
    return (
        <ul>
            <li>id:{message.id}</li>
            <li>title:{message.title}</li>
            <li>content:{message.content}</li>
        </ul>
    )
}
