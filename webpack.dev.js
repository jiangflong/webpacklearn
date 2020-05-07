const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map', // 将编译后的代码映射回原始源代码
    mode: "development", //开发模式
    devServer: {
        contentBase: './dist' // 开发服务器文件夹
    },
});