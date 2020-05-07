const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",// 生成模式
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true // 将编译后的代码映射回原始源代码
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production') // 编译期常量 ，任何位于 /src 的本地代码都可以关联到 process.env.NODE_ENV 环境变量
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }],
                exclude: /node_modules/
            }
        ]
    }
});