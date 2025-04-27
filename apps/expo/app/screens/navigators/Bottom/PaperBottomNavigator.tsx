import { StyleSheet, Platform } from 'react-native'

import { CommonActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomNavigation } from 'react-native-paper'

const Tab = createBottomTabNavigator()

export default function PaperBottomNavigator() {
  // const isManager = useCheckManagerRole()

  return (
    // <MobileProtectedRoute>
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}
      tabBar={({ navigation, state, descriptors, insets }) => (
        <BottomNavigation.Bar
          shifting
          compact
          labeled={false}
          theme={{ colors: { secondaryContainer: 'transparent' } }}
          style={styles.tabBar}
          navigationState={state}
          safeAreaInsets={insets}
          onTabPress={({ route, preventDefault }) => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            })

            if (event.defaultPrevented) {
              preventDefault()
            } else {
              navigation.dispatch({
                ...CommonActions.navigate(route.name, route.params),
                target: state.key,
              })
            }
          }}
          renderIcon={({ route, focused, color }) => {
            const { options } = descriptors[route.key] as any

            if (options.tabBarIcon) {
              return options.tabBarIcon({
                focused,
                color: focused ? 'gold' : 'white',
                size: focused ? 32 : 24,
              })
            }

            return null
          }}
          getLabelText={({ route }) => {
            const { options } = descriptors[route.key] as any
            return options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name
          }}
        />
      )}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: `HomeStack`,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={size} color={color} />
          },
        }}
      />
      <Tab.Screen
        name="MapsApplicationsListNavigator"
        component={MapsApplicationsListNavigator}
        options={{
          //tabBarActiveTintColor: 'red',
          tabBarLabel: 'MapsApplicationsListNavigator',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="map" size={size} color={color} />
          },
        }}
      />
      {/* <Tab.Screen
        name="AiPrompt"
        component={AiPromptScreen}
        options={{
          //tabBarActiveTintColor: 'red',
          tabBarLabel: 'AiPrompt',
          tabBarIcon: ({ color, size }) => {
            return <Icon name="robot-happy" size={size} color={color} />
          },
        }}
      /> */}

      <Tab.Screen
        name="AiChatStack"
        component={AiChatStackNavigator}
        options={{
          tabBarLabel: `AiChatStack`,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="robot-happy" size={size} color={color} />
          },
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  safeAreaView: {
    flex: 1,
  },

  showButton: {
    //marginTop: 48,
    //    padding: 16,
    // backgroundColor: 'red',
    alignSelf: 'center',
    // borderRadius: 8,
  },
  buttonText: {
    fontSize: 20,
  },
  bottomSheetContent: {
    padding: 40,
    alignItems: 'center',
  },
  bottomSheetText: {
    fontSize: 24,
    marginBottom: 80,
  },
  bottomSheetCloseButton: {
    padding: 16,
    backgroundColor: 'deeppink',
    borderRadius: 8,
  },

  tabBar: {
    backgroundColor: '#04474d',
    opacity: 0.8,
    borderRadius: 90,
    // borderTopLeftRadius: 50,
    // borderTopRightRadius: 50,
    // paddingTop: 6,
    padding: 0,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: {
      width: 20,
      height: 30,
    },
    position: 'absolute',
    bottom: 20,
    width: '60%',
    marginHorizontal: '20%',
    height: 60,
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowRadius: 5.65,
    overflow: 'hidden',
    // elevation: 8,
  },
})
