import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../../profile/ProfileScreen'
import ChatScreen from '../../chat/ChatScreen'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../home/HomeScreen'
import { BottomNavigation } from 'react-native-paper'
import {
  CommonActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { Platform, StyleSheet, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Ionicons } from '@expo/vector-icons'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import CustomTabBar from '../Bottom/CustomTabBar'
import TestScreen from '../../test/TestScreen'
import { RootStackParamList } from '../routes'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import TeamMatchingScreen from '../../match/TeamMatchingScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

// Floating Chat Button component
const FloatingChatButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate('ChatScreen')}
    >
      <Ionicons name="chatbubble-ellipses" size={24} color="white" />
    </TouchableOpacity>
  )
}

const AuthenticatedStackNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="TabNavigator"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="TabNavigator" component={HomeTabNavigator} />
          <Stack.Screen name="TeamMatchingScreen" component={TeamMatchingScreen} />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{
              headerStyle: {
                backgroundColor: '#675283',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: '500',
              },
              headerShown: true,
              headerTitle: 'Chat With BUDHI',
              headerTitleAlign: 'center',
              headerBackTitleVisible: false,
              headerLeft: (props) => (
                <TouchableOpacity
                  style={{ marginLeft: 10 }}
                  onPress={() => {
                    // We need to use props.canGoBack and props.onPress instead of hooks here
                    if (props.canGoBack) {
                      props.onPress?.()
                    }
                  }}
                >
                  <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </View>
  )
}

export default AuthenticatedStackNavigator

function HomeTabNavigator() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
        }}
        tabBar={(props) => <CustomTabBar {...props} />}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: `Home`,
            tabBarIcon: ({ color, size }) => {
              return (
                <Animated.View
                  entering={FadeIn.duration(300)} // Smooth transition duration
                  exiting={FadeOut.duration(300)} // Smooth transition duration
                  style={{ transform: [{ scaleX: 1 }] }}
                >
                  <Icon name="home" size={size} color={color} />
                </Animated.View>
              )
            },
          }}
        />
        <Tab.Screen
          name="TestScreen"
          component={TestScreen}
          options={{
            tabBarLabel: `Test`,
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarLabel: `Profile`,
            tabBarIcon: ({ color, size }) => {
              return (
                <Animated.View
                  entering={FadeIn.duration(300)} // Smooth transition duration
                  exiting={FadeOut.duration(300)} // Smooth transition duration
                  style={{ transform: [{ scaleX: 1 }] }}
                >
                  <Icon name="account" size={size} color={color} />
                </Animated.View>
              )
            },
          }}
        />
      </Tab.Navigator>
      <FloatingChatButton />
    </View>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 20, // Position above the tab bar
    right: 20,
    backgroundColor: '#675283', // Primary color
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1.25,
    shadowRadius: 3.84,
  },
})
