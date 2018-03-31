var path = new require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/'),
        devtoolModuleFilenameTemplate: './dist/[resource]'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, './dist/'),
        //host: '192.168.34.32',
        port: 9000
    },
    externals: [
        // Don't bundle pixi.js, assume it'll be included in the HTML via a script
        // tag, and made available in the global variable PIXI.
        // { "pixi.js": "PIXI" },
        // { 'gsap': 'window' }
        //{ "createjs": "createjs" }
    ],
}