const path = require('path');
const webpack = require('webpack');
const common = require('../webpack.common.js')

module.exports = async({config}) => {
  // use common webpack rules and resolve from the project
  config.module.rules.push(...common.module.rules)
  config.resolve = common.module.resolve

  // storybook source loader
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  })

  return config
}
