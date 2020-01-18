const webpack = require('webpack')
const path = require('path')
const {THEME_PRIMARY_COLOR} = process.env

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
                localIdentName: '[name]--[local]',
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
      // SVG config
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
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
      THEME_PRIMARY_COLOR: JSON.stringify(THEME_PRIMARY_COLOR || '')
    })
  ]
}
