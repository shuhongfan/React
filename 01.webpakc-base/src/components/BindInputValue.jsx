import React from 'react'

export default class BindEvent extends React.Component{
    constructor() {
        super();
        // 私有数据
        this.state={
            msg:'哈哈',
            name:'zs',
            age:18
        }
    }
    render() {
        return <div>
            BindEvent组件
            <button onClick={()=>this.show('钱')}>按钮</button>
            <h3>{this.state.msg}</h3>
            {/*如果只是为文本框的value属性 绑定到了state状态 不提供onChange 得到的是一个只读的文本框*/}
            {/*为文本框绑定value只会 要么提供一个readOnly 要么提供一个onChange处理函数*/}
            <input type="text" value={this.state.msg} readOnly/>
            <br/>
            <input type="text" ref="txt" value={this.state.msg} onChange={(e)=>this.textChanged(e)}/>
        </div>
    }
    show=(arg1)=>{
        this.setState({'msg':'123'+arg1},function () {
            console.log(this.state.msg)
        })
    }
    textChanged=(e)=>{
        // 获取文本框中的值 有2种方式
        let value=e.target.value
        let value1=this.refs.txt.value
        console.log(value,value1)
        this.setState({'msg':value1})
    }
}
