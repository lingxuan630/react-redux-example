var path = require('path')
var webpack = require('webpack')
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'common',
  filename: 'common.js',
});

var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  minimize: true,
  compress: {
    warnings: false,
  }
});

module.exports = {
  devtool: false,
  // devtool: 'cheap-module-eval-source-map',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'babel-polyfill',
      'redux',
      'classnames',
      'webpack-hot-middleware/client',
    ],
    index: ['./index']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    commonsPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // uglifyJsPlugin
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: __dirname
      }
    ]
  }
}
