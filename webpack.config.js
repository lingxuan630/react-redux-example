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
  devtool: 'cheap-module-eval-source-map',
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
    index: ['./src/modules/application/index.js']
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    commonsPlugin,
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel?' + JSON.stringify({presets: ['react', 'es2015', 'stage-0']}) ],
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
