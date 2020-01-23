// lib
const webpack = require('webpack')
const path = require('path')
// constants
const {version} = require('./package.json')

module.exports = {
  entry: ['./src/index.js'],
  module: {
    rules: [
      // Babel config
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      // SASS/CSS config
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            query: {
              sourceMap: true,
              importLoaders: 2,
              modules: {
                mode: 'local',
                localIdentName: '[path]--[local]',
                context: path.resolve(__dirname, 'src'),
                hashPrefix: 'demo'
              }
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      // Image config
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['*', '.js', '.jsx', 'scss', 'css']
  },
  plugins: [
    // constants derived from env
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version)
    })
  ]
}
