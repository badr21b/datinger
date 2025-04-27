import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Feather from '@expo/vector-icons/Feather'
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'
import Animated, {
  FadeIn,
  FadeOut,
  LinearTransition,
} from 'react-native-reanimated'

const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity)

const PRIMARY_COLOR = '#675283'
const SECONDARY_COLOR = '#fff'

const CustomNavBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        if (['_sitemap', '+not-found'].includes(route.name)) return null

        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params)
          }
        }

        return (
          <AnimatedTouchableOpacity
            layout={LinearTransition.springify().mass(0.5)}
            key={route.key}
            onPress={onPress}
            style={[
              styles.tabItem,
              { backgroundColor: isFocused ? SECONDARY_COLOR : 'transparent' },
            ]}
          >
            {getIconByRouteName(
              route.name,
              isFocused ? PRIMARY_COLOR : SECONDARY_COLOR,
            )}
            {isFocused && (
              <Animated.Text
                entering={FadeIn.duration(200)}
                exiting={FadeOut.duration(200)}
                style={styles.text}
              >
                {label as string}
              </Animated.Text>
            )}
          </AnimatedTouchableOpacity>
        )
      })}
    </View>
  )

  function getIconByRouteName(routeName: string, color: string) {
    console.log({
      routeName,
    })
    switch (routeName) {
      case 'index':
        return <Feather name="home" size={18} color={color} />
      case 'search':
        return <AntDesign name="search1" size={18} color={color} />
      case 'analytics':
        return <Feather name="pie-chart" size={18} color={color} />
      case 'wallet':
        return <Ionicons name="wallet-outline" size={18} color={color} />
      case 'profile':
        return <Ionicons name="wallet-outline" size={18} color={color} />

      case 'HomeScreen':
        return <Ionicons name="home" size={18} color={color} />
      case 'ProfileScreen':
        return <Ionicons name="person-outline" size={18} color={color} />
      case 'TestScreen':
        return <Ionicons name="settings-outline" size={18} color={color} />

      default:
        return <Ionicons name="person-outline" size={18} color={color} />
    }
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
    width: '60%',
    alignSelf: 'center',
    bottom: 20,
    borderRadius: 40,
    paddingHorizontal: 12,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8, // Android shadow
    zIndex: 999, // Ensure it stays on top of other elements
    // iOS shadow properties are already defined above (shadowColor, shadowOffset, etc.)
    borderWidth: 0.5,
    borderColor: 'yellow',
  },
  tabItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 36,
    paddingHorizontal: 13,
    borderRadius: 30,
  },
  text: {
    color: PRIMARY_COLOR,
    marginLeft: 8,
    fontWeight: '500',
  },
})

export default CustomNavBar
