import React from "react";

export default class News extends React.Component{
    state={
        newArr:[
            'news001',
            'news002',
            'news003',
            'news004'
        ]
    }
    render() {
        return (
            <ul>
                {
                    this.state.newArr.map((news,index)=><li key={index}>{news}</li>)
                }
            </ul>
        )
    }
}
