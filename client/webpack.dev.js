const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const PORT = 3000

module.exports = merge(common, {
  entry: ['./src'],
  mode: 'development',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'build.js'
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    quiet: false,
    noInfo: false,
    contentBase: './build',
    port: PORT
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
