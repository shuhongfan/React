// 包含n个操作数据库集合的model模块

// 1. 连接数据库
// 1.1. 引入mongoose
const mongoose=require('mongoose')
// 1.2. 连接指定数据库(URL 只有数据库变化的)
mongoose.connect('mongodb://localhost:27017/zhipin',{ useNewUrlParser: true,useUnifiedTopology: true})
// 1.3. 获取连接对象
const conn=mongoose.connection
// 1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected',function () {
    console.log('数据库连接成功')
})

// 2. 定义出对应特定集合的Model 并向外暴露
// 2.1. 字义Schema(描述文档结构)
const UserSchema=mongoose.Schema({
    username: {type: String, require: true}, // 用户名
    password: {type: String, require: true}, // 密码
    type: {type: String, require: true}, // 用户类型 dashen/laoban
    header: {type: String}, // 头像
    post: {type: String},  // 职位
    info: {type: String}, // 个人或职位简介
    company: {type: String}, // 公司名称
    salary: {type: String} // 月薪
})

// 2.2. 定义Model(与集合对应, 可以操作集合)
const UserModel=mongoose.model('user',UserSchema)

// 2.3. 向外暴露Model
// model.exports=xxx
// exports.xxx=value
// exports.yyy=value
exports.UserModel=UserModel

// 定义chats集合的文档结构
const chatSchema=mongoose.Schema({
    from:{type:String,require:true}, // 发送用户的id
    to:{type:String,require:true}, // 接收用户的id
    chat_id:{type:String,require:true}, //from和to组成的字符串
    content:{type:String,require:true}, // 内容
    read:{type:Boolean,default:false}, // 标识是否已读
    create_time:{type:Number} // 创建时间
})
const ChatModel=mongoose.model('chat',chatSchema)
exports.ChatModel=ChatModel
