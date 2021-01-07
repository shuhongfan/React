import React from "react";

export default class TestComponents extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            isLogin:false,
            persons:[
                {id:1,name:'123',address:'北京'},
                {id:2,name:'123456',address:'上海'},
                {id:3,name:'123789',address:'深圳'},
                {id:4,name:'12310',address:'湖北'}
            ],
            username:'',
            password:''
        }
    }
    login=()=>{
        this.setState({isLogin:true})
        console.log(this.state.username)
        console.log(this.state.password)
        console.log(this.inputRef2)
        // this.inputRef2.current.focus()
    }
    changeUsername=(e)=>{
        this.setState({
            username:e.target.value
        })
    }
    changePwd=(e)=>{
        this.setState({
            password:e.target.value
        })
    }
    changeValue=e=>{
        this.setState({
            // 属性名表达式
            [e.target.name]:e.target.value
        })
    }
    // dom节渲染完毕
    componentDidMount() {
        this.refs.inputRef.focus()
    }
    render() {
        const {username,password}=this.state
        return (
            <div>
                {this.state.isLogin && (<div>欢迎大神</div>)}
                {
                    !this.state.isLogin && (
                        <div>
                            {/*用户名 <input name="username" onChange={this.changeUsername} value={username} type="text"/>*/}
                            用户名 <input name="username" onChange={this.changeValue} value={username} type="text"/>
                            {/*密码 <input name="password" onChange={this.changePwd} value={password} type="text"/>*/}
                            密码 <input name="password" onChange={this.changeValue} value={password} type="text"/>
                            <button onClick={this.login}>登录</button>
                            <hr/>
                            请输入要搜索的内容: <input ref="inputRef" type="text"/>
                            请输入要搜索的内容: <input ref={this.inputRef2} type="text"/>
                        </div>
                    )
                }
                <ul>
                    {this.state.persons.map(item=><li key={item.id}>{item.name}</li>)}
                </ul>
            </div>
        );
    }
}
