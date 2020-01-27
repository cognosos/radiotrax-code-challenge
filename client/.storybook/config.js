// lib
import React from 'react'
import {addDecorator, configure} from '@storybook/react'
import {withKnobs, select} from "@storybook/addon-knobs";
// contexts
import {ThemeContext} from '../src/context/theme'
// hooks
import useTheme from '../src/hooks/useTheme'

// Provide theme context to all components, as almost all request a useThemeContext().
// Also add a Storybook `knob` that allows us to change the theme.
addDecorator(withKnobs)
addDecorator((renderStory) => {
  const [, setTheme] = useTheme()
  const availableThemes = ['theme-dark', 'theme-light']
  const currentTheme = select('Theme Selector', availableThemes, 'theme-dark')
  const content = renderStory()

  const style = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'auto',
    padding: '1em'
  }

  if (currentTheme === 'theme-dark') Object.assign(style, {backgroundColor: '#2F3136'})

  return (
    <div style={style}>
      <ThemeContext.Provider value={{theme: currentTheme, setTheme}}>
        {content}
      </ThemeContext.Provider>
    </div>
  )
})

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /(_|\.stories)\.jsx?$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
