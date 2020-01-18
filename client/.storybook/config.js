import {configure, addDecorator} from '@storybook/react'

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /(_|\.stories)\.jsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
