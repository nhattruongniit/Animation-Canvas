const webpack = require('webpack');
const isDevelopment = process.env.NODE_ENV === 'development';
const serverMode = process.env.SERVE_MODE;
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extractSASS = new ExtractTextPlugin("./assets/css/[name].css");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

let FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

let browserSyncConfig = {
    host: 'localhost',
    port: 5000,
    files: 'public/*'
};

if (serverMode === 'proxy') {
    browserSyncConfig.proxy = "127.0.0.1:8080"
} else {
    browserSyncConfig.server = {
        baseDir: 'public'
    };
}

function HtmlWebpackPluginConfig(templateFile, distFile, inject) {
    return new HtmlWebpackPlugin({
        filename: distFile,
        template: templateFile,
        inject: typeof inject === 'undefined' ? true : inject
    });
}

console.log('NODE ENV', process.env.NODE_ENV);
console.log('IS DEBUG', isDevelopment);

let config = {
    entry: {
        index: [
            "./src/assets/js/main.js",
            "./src/assets/sass/common.scss",
        ],
        terms: [
            "./src/assets/sass/terms.scss",
        ],
        vendor: [
            "babel-polyfill",
            "gsap",
            "./node_modules/pixi.js/dist/pixi.min.js",
        ]
    },
    output: {
        path: path.resolve(__dirname, "./public/campaign/memory-battle/"),
        filename: "./assets/js/[name].js",
        devtoolModuleFilenameTemplate: "./public/campaign/memory-battle"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: extractSASS.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader",
                })
            },
            {
                test: /^[^_](.+)\.pug$/,
                include: path.join(__dirname, './src/pug/pages'),
                use: [
                    {loader: 'html-loader'},
                    {
                        loader: 'pug-html-loader',
                        options: {
                            data: require(path.join(__dirname, './src/pug/data'))
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            openAnalyzer: false,
            reportFilename: path.join(__dirname, 'webpack-bundle-analyzer.html')
        }),
        new CleanWebpackPlugin([
            "public/campaign/memory-battle/assets/js",
            "public/campaign/memory-battle/assets/css",
        ]),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new FriendlyErrorsWebpackPlugin({clearConsole: true}),
        extractSASS,
        HtmlWebpackPluginConfig('./src/pug/pages/index.pug', 'index.html', false),
        HtmlWebpackPluginConfig('./src/pug/pages/index_php.pug', 'index.php', false),
        HtmlWebpackPluginConfig('./src/pug/pages/terms/index.pug', 'terms/index.html', false),
        new BrowserSyncPlugin(browserSyncConfig)
    ],
    resolve: {
        modules: [
            'node_modules'
        ],
        alias: {
            'PIXI': './node_modules/pixi.js/dist/pixi.min.js'
        }
    },
    externals: {
        'pixi.js': 'PIXI'
    }
};

if (!isDevelopment) {
    delete config.devtool;
}

module.exports = config;
