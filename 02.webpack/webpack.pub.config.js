const path=require('path')
const htmlWebpackPlugin=require('html-webpack-plugin')
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
const webpack=require('webpack')

module.exports={
    entry:{
        app:path.join(__dirname,'./src/main.js'),
        vendors1:['jquery']
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'js/bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html"
        }),
        new CleanWebpackPlugin()
    ],
    optimization:{
        splitChunks:{
            chunks: 'all',
            name:'vendors1',
            filename:'js/vendors.js'
        }
    },
    module: {
        rules: [
            {test:/\.css$/, use: ['style-loader','css-loader']},
            {test:/\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            {test:/\.(png|gif|bmp|jpg)$/, use: ['url-loader?limit=5000&name=img/[hash:8]-[name].[ext]']},
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/},
        ]
    }
}
