const path = require('path');
const webpack = require('webpack');
const common = require('../webpack.common.js')

module.exports = async({config}) => {
  // use common webpack rules and resolve from the project
  config.module.rules.push(...common.module.rules)
  config.resolve = common.resolve

  /**
   * storybook source loader, matches the following patterns:
   * - `${name}.stories.js`
   * - `${name}.stories.jsx`
   * - `_stories.js`
   * - `_stories.jsx`
   */
  config.module.rules.push({
    test: /(_|\.stories)\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre'
  })

  return config
}
