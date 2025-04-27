import React from 'react'
import { Provider } from 'app/provider'
import { Stack } from 'expo-router'
import { StatusBar } from 'react-native'

export default function Root() {
  return (
    <Provider>
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#10182b"
          translucent
        />
        <Stack />
      </>
    </Provider>
  )
}
