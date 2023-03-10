const path = require('path')

const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    // 打包入口文件
    entry: './src/main.js',

    // 打包出口
    output: {
        path: path.join(__dirname, 'dist'),  // 打包到目的文件夹
        filename:'bunld.js'     // 打包后的js文件名
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.less$/,
                use:["style-loader","css-loader","less-loader"],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true
        }),
        new VueLoaderPlugin(),
    ],
    mode: 'production',
}