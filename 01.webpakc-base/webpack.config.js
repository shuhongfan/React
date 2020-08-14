const path=require('path')
// 导入 在内存中自动生成index页面的插件
const HtmlWebPackPlugin=require('html-webpack-plugin')

// 创建一个插件的实例对象
const htmlPlugin=new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'), // 源文件
    filename:'index.html' //生成的内存中首页的名称
})

// 向外暴露一个配置对象 因为webpack是基于node构建的 所有webpack支持所有node api
// webpack默只能打包处理.js后缀名的文件 像 .png .vue无法主动处理 所以要配置第三方的loader
// 带s一般都是数组 不带s的都是对象
module.exports={
    // 'development' or 'production'
    mode:'development',
    // 在webpack4.x中 有一个很大的特性 约定大于配置 默认打包入口路径是 src->01.react最基本的使用.js
    plugins: [
        htmlPlugin
    ],
    module: { // 所有第三方模块的配置规则
        rules: [ // 第三方匹配规则    从右往左解析        exclude 排除项
            {test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
            // 可以在css-loader之后通过？追加参数
            // 其中有个固定的参数 佳作modules 表示为普通css样式表 启动模块化
            { test: /\.css$/,use: ['style-loader','css-loader'] },
            {test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader'},
            {test: /\.scss$/, use: ['style-loader',{ loader: 'css-loader',options: {modules: { localIdentName: '[path][name]-[local]-[hash:5]'},}},'sass-loader']}
        ]
    },
    resolve: {
        // 表示这个文件扩展名可以省略 从前往后 自己新增加jsx
        // extensions: ['.js','.json']
        extensions: ['.js','.jsx','.json'],
        alias: {
            // 在项目中 @表示项目根目录中的src目录
            '@':path.join(__dirname,'./src')
        }
    }
}

// ES6 向外导出模块的API 与之对应的是 import ***
// export default {}
