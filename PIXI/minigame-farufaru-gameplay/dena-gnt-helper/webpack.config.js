const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'datastore': './src/components/index.js',
        'test.datastore': './src/test.js'
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
        host: 'localhost',
        port: 8000
    },

    externals: [],

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.html')
        })
    ]
};