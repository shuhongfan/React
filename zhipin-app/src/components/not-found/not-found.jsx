// 404主界面路由容器组件
import React from "react";
import {connect} from 'react-redux'

class NotFound extends React.Component{
    render() {
        return (
            <div>
                <h2>抱歉 找不到该页面</h2>
                <button
                    type="primary"
                    onClick={()=>this.props.history.replace('/')}>回首页</button>
            </div>
        );
    }
}

export default connect(
    state=>({}),
    {}
)(NotFound)
