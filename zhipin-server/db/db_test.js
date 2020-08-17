const md5=require('blueimp-md5')
// 1. 连接数据库
// 1.1. 引入mongoose
const mongoose=require('mongoose')
// 1.2. 连接指定数据库(URL 只有数据库是变化的)
mongoose.connect('mongodb://localhost:27017/zhipin_test',{useNewUrlParser: true,useUnifiedTopology: true})
// 1.3. 获取连接对象
const conn=mongoose.connection
// 1.4. 绑定连接完成的监听(用来提示连接成功)
conn.on('connected', function () {
    console.log('数据库连接成功')
})

// 文档---对象 集合----对象的数组
// 2. 得到对应特定集合的Model
// 2.1. 字义Schema(描述文档结构)
const userSchema=mongoose.Schema({
    username:{type:String,require:true},
    password:{type:String,require:true},
    type:{type:String,require:true}
})
// 2.2. 定义Model(与集合对应, 可以操作集合)
const UserModel=mongoose.model('user',userSchema) // 集合的名称users

// 3. 通过Model 或其实例对集合数据进行CRUD 操作
// 3.1. 通过Model 实例的save()添加数据
function testSave () {
    // 创建usermodel的实例
    const userModel=new UserModel({
        username:'Bob',
        password:md5('123'),
        type:'laoban'
    })
    // 调用save保存
    userModel.save(function (error,user) {
        console.log('save',error,user)
    })
}
// testSave()

// 3.2. 通过Model 的find()/findOne()查询多个或一个数据
function testFind() {
    // 查询多个 得到的是包含所有匹配文档对象的数组 如果没有匹配的就是[]
    UserModel.find(function (error,users) {
        console.log('find',error,users)
    })
    // 查询一个 得到是匹配的文档对象 如果没有匹配就是null
    UserModel.findOne({
        _id:'5f38ea13e33f3d9b48365568'
    },function (error,user) {
        console.log('findone',error,user)
    })
}
// testFind()

// 3.3. 通过Model 的findByIdAndUpdate()更新某个数据
function testUpdate() {
    UserModel.findByIdAndUpdate({
        _id:'5f38ea13e33f3d9b48365568'
    },{
        username:'Jack'
    },function (error,oldUser) {
        console.log('findByIdAndUpdate',error,oldUser)
    })
}
// testUpdate()

// 3.4. 通过Model 的remove()删除匹配的数据
function testDelete() {
    UserModel.remove({
        _id:'5f38ea13e33f3d9b48365568'
    },function (error,doc) {
        console.log('remove()',error,doc)
        // { n: 1, ok: 1, deletedCount: 1 }
    })
}
// testDelete()
