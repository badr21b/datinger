import React from 'react'
import { registerRootComponent } from 'expo'
import { Platform, Text } from 'react-native'

// Force text elements to be visible in splash screen
if (Text.defaultProps == null) {
  Text.defaultProps = {}
}
Text.defaultProps.allowFontScaling = false

// Fix text visibility issues on Android
if (Platform.OS === 'android') {
  // Android sometimes has issues with text rendering
  const oldRender = Text.render
  Text.render = function (...args) {
    const origin = oldRender.call(this, ...args)
    return React.cloneElement(origin, {
      style: [{ fontFamily: 'sans-serif' }, origin.props.style],
    })
  }
}

import App from './App'

// Register the app
registerRootComponent(App)
