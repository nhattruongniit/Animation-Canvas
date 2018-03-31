module.export = {
    entry: {
        'kingdom.game': './src/app.js'
    },
    devtool: null,
    externals: [
        {
            createjs: 'createjs'
        },
    ],
}