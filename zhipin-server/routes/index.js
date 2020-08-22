var express = require('express');
var router = express.Router();

const md5=require('blueimp-md5')
const {UserModel,ChatModel}=require('../db/modules')
const filter={password:0,__v:0} // 查询时过滤出指定属性

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.post('/register',function (req,res) {
//   // 1.获取请求参数
//   const {username,password}=req.body
//   // 2.处理
//   if (username==='admin'){
//     res.send({
//       code:1,
//       msg:'此用户已存在'
//     })
//   } else {// 3.返回响应数据
//     res.send({
//       code:0,
//       data:{
//         _id:'1232',
//         username,
//         password
//       }
//     })
//   }
//
// })

// 注册的路由
router.post('/register',function (req,res) {
  // 读取请求参数
  const {username,password,type}=req.body
  // 处理
  //   判断用户是否存在
  // 查询 根据username
  UserModel.findOne({username},function (error,user) {
    if (user){
      // 返回提示错误信息
      res.send({
        code:1,
        msg:'用户已存在'
      })
    } else {
      new UserModel({username,type,password:md5(password)}).save(function (error,user) {
        // 生成cookie 并交给浏览器保存
        res.cookie('userid',user._id,{maxAge:1000*60*60*24})
        // 响应数据不带密码
        const data={username,type,_id:user._id}
        res.send({
          code:0,
          data
        })
      })
    }
  })
})

// 登录的路由
router.post('/login',function (req,res) {
  const {username,password}=req.body
  // 根据username和password查询数据库users 如果没有 返回提示错误信息 如果有 返回登录成功信息
  UserModel.findOne({username,password:md5(password)},filter,function (error,user) {
    if (user){ // 登录成功
      res.cookie('userid',user._id,{maxAge:1000*60*60*24})
      res.send({
        code:0,
        data:user
      })
    } else { //登录失败
      res.send({
        code:1,
        msg:'用户名或密码不正确'
      })
    }
  })
})

// 更新用户信息的路由
router.post('/update',function (req,res) {
  // 从请求的cookie中得到userid
  const userid=req.cookies.userid
  // 判断用户是否存在
  if (!userid){
    return res.send({code:1,msg:'请先登录'})
  }
  // 得到提交的用户数据
  const user=req.body
  UserModel.findByIdAndUpdate({_id:userid},user,function (error,oldUser) {
    if (!oldUser){
      // 通知浏览器删除cookie
      res.clearCookie('userid')
      return res.send({code:1,msg:'请先登录'})
    } else {
      // 准备返回一个user对象
      const {_id,username,type}=oldUser
      const data=Object.assign(user,{_id,username,type})
      return res.send({code:0,data})
    }
  })
})

// 获取用户信息的路由 根据cookie中的userid
router.get('/user', function (req, res) {
  // 从请求的cookie得到userid
  const userid = req.cookies.userid
  // 如果不存在, 直接返回一个提示信息
  if(!userid) {
    return res.send({code: 1, msg: '请先登陆'})
  }
  // 根据userid查询对应的user
  UserModel.findOne({_id: userid}, filter, function (error, user) {
    if(user) {
      res.send({code: 0, data: user})
    } else {
      // 通知浏览器删除userid cookie
      res.clearCookie('userid')
      res.send({code: 1, msg: '请先登陆'})
    }

  })
})

// 获取用户列表 根据类型
router.get('/userlist',function (req,res) {
  const {type}=req.query
  UserModel.find({type},filter,function (error,users) {
    res.send({code:0,data:users})
  })
})

// 获取当前用户所有相关聊天信息列表
router.get('/msglist',function (req,res) {
  // 获取cookie中的userid
  const userid=req.cookies.userid
  UserModel.find(function (err,userDocs) {
    // const users={}
    // userDocs.forEach(doc=>{
    //   users[doc._id]={username:doc.username,header:doc.header}
    // })
    const users=userDocs.reduce((users,user)=>{
      users[user._id]={username:user.username,header:user.header}
      return users
    },{})
    // 查询userid相关的所有聊天信息
    ChatModel.find({'$or':[{from:userid},{to:userid}]},filter,function (err,chatMsgs) {
      res.send({code:0,data:{users,chatMsgs}})
    })
  })
})

// 修改指定消息为已读
router.post('/readmsg',function (req,res) {
  // 得到请求中的from和to
  const {from}=req.body
  const to=req.cookies.userid
  // 更新数据库中的chat数据
  // multi一次性更新多条数据
  ChatModel.update({from,to,read:false},{read:true},{multi:true},function (err,doc) {
    console.log('/readmsg',doc)
    res.send({code:0,data:doc.nModified}) // 更新数量
  })
})

module.exports = router;
