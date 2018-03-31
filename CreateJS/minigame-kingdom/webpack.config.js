const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const production = process.env.NODE_ENV === 'production' ? require('./webpack.production') : {};

module.exports = Object.assign({
    entry: {
        'kingdom.dev': './src/dev.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public'),
        devtoolModuleFilenameTemplate: "./public/[resource]"
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        //host: '0.0.0.0',
        port: 8000
    },

    module: {},

    externals: [{
        'createjs-module': 'createjs'
    }, ],
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        })
    ]
}, production);