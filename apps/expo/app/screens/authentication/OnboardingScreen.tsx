import React from 'react'
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../navigators/routes'
import { useDispatch } from 'react-redux'
import { GradientButton } from '../../components/buttons'

const OnboardingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()

  const handleLogin = () => {
    navigation.navigate('LoginScreen')
  }

  const handleSignup = () => {
    navigation.navigate('SignupScreen')
  }

  return (
    <SafeAreaView className="flex-1 bg-[#10182b]">
      <StatusBar
        barStyle="light-content"
        backgroundColor="#10182b"
        translucent={Platform.OS === 'android'}
      />
      <View className="flex-1 items-center justify-between px-6 py-6">
        {/* Content - Mascot and Text */}
        <View className="flex-1 items-center justify-center">
          <Image
            source={require('../../../assets/budhi/pictures/budhi.png')}
            className="h-64 w-64"
            resizeMode="contain"
          />
          <Text className="mt-5 text-6xl font-bold text-white">BUDHI</Text>
          <Text className="mt-5 text-center text-lg text-white">
            Find the perfect harmony with your team
          </Text>
        </View>

        {/* Bottom Buttons */}
        <View className="w-full items-center">
          <GradientButton
            title="Let's Start"
            onPress={handleSignup}
            filled={true}
          />
          <GradientButton
            title="I Have an Account"
            onPress={handleLogin}
            filled={false}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OnboardingScreen
