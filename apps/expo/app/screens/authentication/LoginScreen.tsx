import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../navigators/routes'
import { useDispatch } from 'react-redux'
import { updateAccessToken } from 'app/provider/store/reducers/AccessTokenSlice'

const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()

  const handleLogin = () => {
    dispatch(updateAccessToken('1234567890'))
    navigation.navigate('AuthenticatedStackScreens')
  }

  const handleSignup = () => {
    navigation.navigate('SignupScreen')
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../../assets/budhi/pictures/budhi.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>BUDHI</Text>

        <Text style={styles.subtitle}>
          Find the perfect harmony with your team
        </Text>

        <TouchableOpacity style={styles.startButton} onPress={handleSignup}>
          <Text style={styles.startButtonText}>Let's Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.accountButton} onPress={handleLogin}>
          <Text style={styles.accountButtonText}>I Have an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F1123', // Dark navy background
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 50,
  },
  imageContainer: {
    width: 230,
    height: 230,
    borderWidth: 2,
    borderColor: '#4D69FA',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 2,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 50,
  },
  startButton: {
    backgroundColor: '#7B73F2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  accountButton: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#7B73F2',
  },
  accountButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
})

export default LoginScreen
