import React from "react";
// import PropTypes from 'prop-types'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends React.Component{
    // static propTypes={
    //     searchName:PropTypes.string.isRequired
    // }
    state={
        initView:true,
        loading:false,
        users:null,
        errorMsg:null
    }
    componentDidMount() {
        // 订阅新的消息
        PubSub.subscribe('search',(msg,searchName)=>{
            this.setState({
                initView:false,
                loading:true
            })
            const url=`https://api.github.com/search/users?q=${searchName}`
            axios.get(url)
                .then(response=>{
                    const result=response.data
                    console.log(result)
                    const users=result.items.map(item=>{
                        return {
                            name:item.login,
                            url:item.html_url,
                            avatarUrl:item.avatar_url
                        }
                    })
                    this.setState({
                        loading:false,
                        users:users
                    })
                })
                .catch(err=>{
                    this.setState({
                        loading:false,
                        errorMsg:err.message
                    })
                })
        })
    }

    // 当组件收到新的属性时回调
    // componentWillReceiveProps(nextProps, nextContext) {
    //     const {searchName}=nextProps
    //     this.setState({
    //         initView:false,
    //         loading:true
    //     })
    //     const url=`https://api.github.com/search/users?q=${searchName}`
    //     axios.get(url)
    //         .then(response=>{
    //             const result=response.data
    //             console.log(result)
    //             const users=result.items.map(item=>{
    //                 return {
    //                     name:item.login,
    //                     url:item.html_url,
    //                     avatarUrl:item.avatar_url
    //                 }
    //             })
    //             this.setState({
    //                 loading:false,
    //                 users:users
    //             })
    //         })
    //         .catch(err=>{
    //             this.setState({
    //                 loading:false,
    //                 errorMsg:err.message
    //             })
    //         })
    // }

    render() {
        const {initView,loading,users,errorMsg}=this.state
        const {searchName}=this.props
        if (initView){
            return <h2>请输入关键字进行搜索:{searchName}</h2>
        } else if (loading){
            return <h2>正在请求中...</h2>
        } else  if (errorMsg){
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {
                        users.map((user,index)=>{
                            return <div className="card" key={index}>
                                <a href={user.url}>
                                    <img alt="img" src={user.avatarUrl} style={{width:100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        })
                    }
                </div>
            )
        }
    }
}
