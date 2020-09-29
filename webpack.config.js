const path = require('path');
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{
        filename:'bundle.js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
          {test: /\.txt$/,use: 'raw-loader'},
          {test:/\.js$/,use:'babel-loader'},
          {test:/\.(png|jpg|gif|jpeg)$/,use:'file-loader'},
          {
            test:/\.(png|jpg|gif|jpeg)$/,
            use:[{
                loader:"url-loader",
                options:{
                    limit:30000
                }
            }]
        },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({cleanAfterEveryBuildPatterns:['dist']})
    ],
    devServer:{
        host:"127.0.0.1",
        port:"3000",
        open:true,
        hot:true,
        contentBase:'./dist'
    }
}