const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // html打包插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清理插件

module.exports = {
    entry: {
        app: './src/components/index.js',
        print: './src/components/print.js'
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/, // 打包公共模块
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist'] // 清理dist 文件夹
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management' // html打包
        })
    ],
    output: {
        filename: '[name].js', //生成文件
        path: path.resolve(__dirname, 'dist') // 生成目录
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ] // 环境
      },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
        },
        {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
        }
        ]
    }
};