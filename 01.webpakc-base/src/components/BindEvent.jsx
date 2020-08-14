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
            <hr/>
            {/*<button onClick={function () {console.log('ok')}}>按钮</button>*/}
            <button onClick={this.myclickHandler}>按钮</button>
            {/*onClick只接收function作为处理函数*/}
            <button onClick={()=>{this.myclickHandler()}}>按钮</button>

            <button onClick={()=>this.show('钱')}>按钮</button>

            {this.state.msg}
        </div>
    }
    // 实例方法
    myclickHandler= () => {
        console.log('ok')
    }
    show=(arg1)=>{
        console.log('show方法被调用了'+arg1)
        console.log(this)
        // 在react中 修改state中的数据 重新赋值 要使用 this.setState()
        // this.state.msg='sfs'
        // this.setState()只会把对应的state状态更新 不会覆盖其他state状态
        this.setState({'msg':'123'+arg1},function () {
            console.log(this.state.msg)
        })

        // this.state的方法是异步执行的
        // console.log(this.state.msg)
    }
}
