const path = require('path')
const baseConfig = require('./webpack.base.config.js')

module.exports = {
    ...baseConfig,
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true, //是否启用gzip压缩
        port: 8000,
        hot: true,  // 启用热模块更新
    },
    stats: 'errors-only'
}