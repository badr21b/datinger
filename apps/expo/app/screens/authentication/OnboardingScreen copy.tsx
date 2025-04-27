import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../navigators/routes'
import { useDispatch } from 'react-redux'
import DefaultButton from '../../components/buttons/DefaultButton'
const OnboardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()

  const handleLogin = () => {
    // dispatch(updateAccessToken('1234567890'))
    navigation.navigate('LoginScreen')
  }

  const handleSignup = () => {
    //navigation.navigate('AuthenticationScreens', { screen: 'Signup' })
    navigation.navigate('SignupScreen')
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Image
        source={require('../../../assets/fit-connect/fit-connect.png')}
        className="absolute left-0 top-0 h-screen w-screen flex-1"
      />
      <View className="bg-background-500/30 h-full w-full flex-1 items-center justify-center">
        <View className="h-1/2 flex-1 items-center justify-end ">
          <Image
            source={require('../../../assets/fit-connect/fit-connect-logo.png')}
            className="my-6 flex h-[100px] w-[100px] rounded-3xl"
          />
          <Text className="text-xl font-normal uppercase text-white">
            BUDHI
          </Text>
          <Text className="mt-6 text-sm font-normal uppercase text-white">
            Let's match!
          </Text>
        </View>

        <View className="w-screen flex-1 items-center justify-center">
          <DefaultButton
            title="Let's start"
            onPress={handleSignup}
            className="w-10/12"
          />
          <DefaultButton
            title="I have already an account"
            onPress={handleLogin}
            className="w-10/12"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen
