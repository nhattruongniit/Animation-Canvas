const path = require('path');

module.exports = {
    entry: {
        'flipcard.game': './src/index.js',
        'test.flipcard.game': './index.js'
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
        //host: '192.168.10.88',
        port: 8000
    },
    plugins: [],
    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        { "pixi.js": "PIXI" },
        { 'gsap': 'window' },
        { 'pixi-sound': 'window' }
    ],
};