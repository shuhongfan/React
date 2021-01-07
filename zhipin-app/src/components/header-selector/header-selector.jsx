// 选择用户头像ui组件

import React from "react";
import {List,Grid} from 'antd-mobile'
import PropTypes from 'prop-types'

export default class HeaderSelector extends React.Component{
    static propTypes={
        setHeader:PropTypes.func.isRequired
    }
    state={
        icon:null
    }
    constructor(props) {
        super(props);
        // 准备需要显示的列表数据
        this.headerLIst=[]
        for(let i=0;i<20;i++){
            this.headerLIst.push({
                text:'头像'+(i+1),
                // 不能使用import
                icon:require('../../assets/img/头像'+(i+1)+'.png')
            })
        }
    }
    handleClick=({text,icon})=>{
        // 更新当前组件状态
        this.setState({icon})
        // 盗用函数更新父组件的状态
        this.props.setHeader(text)
    }
    render() {
        // 头部界面
        const {icon}=this.state
        const listHeader=!icon?'请选择头像':(<div>
            已选择头像:
            <img src={icon} alt=""/>
        </div>)
        return(
            <div>
                <List renderHeader={()=>listHeader}>
                    <Grid
                        data={this.headerLIst}
                        columnNum={5}
                        onClick={(el)=>this.handleClick(el)}
                    ></Grid>
                </List>
            </div>
        )
    }
}
