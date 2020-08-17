var express = require('express');
var router = express.Router();

const md5=require('blueimp-md5')
const {UserModel}=require('../db/modules')
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

module.exports = router;
