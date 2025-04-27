import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { RootStackParamList } from '../routes'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { View, Text, TouchableOpacity } from 'react-native'
import LoginScreen from '../../authentication/LoginScreen'
import OnboardingScreen from '../../authentication/OnboardingScreen'
import SignupScreen from '../../authentication/signup/SignupScreen'

const Stack = createStackNavigator()

const AuthenticationStackNavigator = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>() // Get the navigation prop
  const currentRouteName =
    navigation.getState().routes[navigation.getState().index].name // Get the current route name from the navigator
  console.log('currentRouteName', currentRouteName)

  let initialRouteName = 'OnboardingScreen'

  // if (currentRouteName === 'LoginScreen') {
  //   initialRouteName = 'LoginScreen'
  // } else if (currentRouteName === 'SignupScreen') {
  //   initialRouteName = 'SignupScreen'
  // }

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Group>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
      </Stack.Group>
    </Stack.Navigator>
  )
}

export default AuthenticationStackNavigator
