import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'
import DefaultButton from '../../../../components/buttons/DefaultButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../../../navigators/routes'
import { useSelector } from 'react-redux'

interface WelcomeScreenProps {
  currentStep: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const WelcomeScreen = ({
  currentStep,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: WelcomeScreenProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  // Usually you'd get the name from your form or state
  const name = 'Jane'

  const handleGetStarted = () => {
    // Navigate to the main app or dashboard
    // navigation.navigate('MainApp')
  }

  return (
    <View className="h-full w-full flex-1 items-center justify-between p-6 py-12">
      <View className="w-full flex-1 items-center justify-center">
        <Image
          source={require('../../../../../assets/budhi/pictures/budhi.png')}
          className="h-48 w-48"
          resizeMode="contain"
        />

        <Text className="mt-8 text-center text-2xl font-bold text-white">
          Nice to meet you
        </Text>
        <Text className="text-center text-3xl font-bold text-white">
          {name}
        </Text>
      </View>

      <View className="w-full">
        <DefaultButton
          title="Let's Start"
          onPress={handleGetStarted}
          className="w-full"
        />
      </View>
    </View>
  )
}

export default WelcomeScreen
