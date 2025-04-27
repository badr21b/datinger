import * as React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthenticatedStackNavigator from './AuthenticatedStackNavigator'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
// import { RootStackParamList } from '../routes'
import { useGetAccessToken } from 'app/provider/hooks/useSelectors'
import { RootStackParamList } from '../routes'
import AuthenticationStackNavigator from './AuthenticationStackNavigator'
import HomeScreen from '../../home/HomeScreen'
import ProfileScreen from '../../profile/ProfileScreen'
import { A } from 'app/design/typography'

const Stack = createStackNavigator()

function MainNavigator({ initialRoute }: { initialRoute: string }) {
  const accessToken = useGetAccessToken()?.value
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  let initialStack =
    accessToken && accessToken?.length > 0
      ? 'AuthenticatedStackScreens'
      : 'AuthenticationScreens'

  console.log('accessToken', accessToken)

  return (
    <>
      <Stack.Navigator
        initialRouteName={initialStack}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen
            name="AuthenticatedStackScreens"
            component={AuthenticatedStackNavigator}
          />
          {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> */}
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="AuthenticationScreens"
            component={AuthenticationStackNavigator}
          />
        </Stack.Group>
      </Stack.Navigator>
    </>
  )
}

export default MainNavigator

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
