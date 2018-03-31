const path = require('path');
const webpack = require('webpack');

const plugins = [];
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
  }));
}

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(process.cwd(), '../public/static/build'),
    filename: 'bundle.js',
    publicPath: '/static/build',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          scss: 'vue-style-loader!css-loader!sass-loader',
        },
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  plugins,
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    proxy: {
      '/': {
        target: 'https://local.faru.kingdom-eiyunokeifu.com/',
        secure: false,
      },
    },
  },
};
