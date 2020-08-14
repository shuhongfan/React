// 1.导入包
import React from 'react'
import ReactDOM from 'react-dom'

// import '@/./06.class继承'

// class关键创建组件 必须让自己的组件 继承自React.Component
// 有自己的私有数据和声明周期函数
class Movie extends React.Component{
    // 构造器
    constructor() {
        // 由于movie组件 继承react.Component这个父类 所以自定义的构造器中 必须调用super
        super();
        // 只有调用super以后 才能使用this关键字
        this.state={ // 相当于vue的data
            msg:'大家好 我是movie组件'
        }
    }
    // 在组件内部 必须有render函数
    // 渲染当前组件对应的虚拟dom结构
    render() {
        // render函数中 必须返回合法的JSX虚拟dom结构
        // 在class关键字创建的组件中 如果想使用外界传递过来的props参数不用接收
        // 直接this.props.xxxx

        // 不论是class 还是普通function创建的组件 它们的props都是只读的
        // this.props.name='lisi'

        // 修改state数据
        this.state.msg='msg值被我修改了'
        return <div>
            {/*this表示当前组件对象*/}
            这是movie组件----{this.props.name}---{this.props.age}
            {/*获取state的数据*/}
            <h3>{this.state.msg}</h3>
        </div>
    }
}

const user={
    name:'zs',
    age:22,
    gender:'男'
}

// 3.调用render函数渲染
ReactDOM.render(<div>
    123
    {/*这里的movie标签 其实 就是movie类的实例对象*/}
    <Movie name={user.name} age={user.age}></Movie>
    <hr/>
    <Movie {...user}></Movie>
</div>,document.getElementById('app'))

