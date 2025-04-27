import 'react-native-gesture-handler'
import 'react-native-reanimated'

import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'app/provider'
import {
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Image,
  View,
  Text,
} from 'react-native'
import MainNavigator from './app/screens/navigators/stack/StackNavigator'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { LogBox } from 'react-native'
import { useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'

LogBox.ignoreLogs(['Warning: ...']) // Ignore log notification by message
LogBox.ignoreAllLogs() //Ignore all log notifications

// Prevent auto-hiding splash
SplashScreen.preventAutoHideAsync().catch(console.warn)

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isFirstTime, setIsFirstTime] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Hide the native splash screen
        await SplashScreen.hideAsync()

        // Set a timeout to hide our custom splash screen
        setTimeout(() => {
          setIsLoading(false)
        }, 3500)
      } catch (e) {
        console.warn(e)
        setIsLoading(false)
      }
    }

    prepare()
  }, [])

  // Calculate initial route
  const initialRoute = () => {
    if (isLoggedIn) return 'HomeScreen'
    if (isFirstTime) return 'OnBoarding'
    return 'Login'
  }

  // Show our custom splash screen for exactly 3.5 seconds
  if (isLoading) {
    return (
      <View className="h-full w-full flex-1 bg-[#3B2D66]">
        <Image
          source={require('./assets/splash.png')}
          className="absolute h-full w-full"
          resizeMode="cover"
        />
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 52,
              fontWeight: '700',
              color: '#FFFFFF',
              letterSpacing: 4,
              textAlign: 'center',
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: 2, height: 2 },
              textShadowRadius: 4,
            }}
          >
            BUDHI
          </Text>
        </View>
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* Set status bar to light content (white text) */}
      <StatusBar barStyle="light-content" backgroundColor="#020910" />

      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}
      >
        <Provider>
          <PaperProvider>
            <NavigationContainer>
              <MainNavigator initialRoute={initialRoute()} />
            </NavigationContainer>
          </PaperProvider>
        </Provider>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  )
}
