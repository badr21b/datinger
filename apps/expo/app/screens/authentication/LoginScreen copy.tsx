import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../navigators/routes'
import { useDispatch } from 'react-redux'
import { updateAccessToken } from 'app/provider/store/reducers/AccessTokenSlice'
import NativeGenericInput from '../../components/inputs/NativeGenericInput'

import {
  SubmitHandler,
  useForm,
  Controller,
  FieldValues,
  Control,
  UseFormRegister,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginValidationSchema } from 'app/validation/authentication'
import DefaultButton from '../../components/buttons/DefaultButton'
import ScrollableView from '../../components/layout/ScrollableView'
import LoginForm from '../../components/inputs/LoginForm'
const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()

  // VALIDATION ////////////////////////////////////////////////////////
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<{ prompt: string }>({
    resolver: zodResolver(loginValidationSchema),
    mode: 'onSubmit',
  })

  ////////////////////////////////////////////////////////////////

  const handleLogin = () => {
    dispatch(updateAccessToken('1234567890'))
    navigation.navigate('AuthenticatedStackScreens')
  }

  const handleSignup = () => {
    navigation.navigate('SignupScreen')
  }

  // METHODS ////////////////////////////////////////////////////////
  // METHODS ////////////////////////////////////////////////////////
  const onSubmit: SubmitHandler<{ prompt: string }> = async (data) => {
    const submittedPrompt = data.prompt
    handleLogin()
    console.log({
      data,
    })

    navigation.navigate('AuthenticatedStackScreens')
  }

  return (
    <View className="bg-background-500 flex-1">
      <View className="fixed top-0 z-10 w-full items-center justify-center">
        <Image
          source={require('../../../assets/fit-connect/fit-connect-logo.png')}
          className="mb-6 mt-12 flex h-[100px] w-[100px] rounded-3xl"
        />
        <Text className="text-xl font-normal text-white">
          Welcome Back champion !
        </Text>
      </View>

      <ScrollableView className="flex w-screen items-center justify-center">
        <View className="h-full w-screen flex-1 items-center justify-center">
          <View className="flex w-11/12 items-center justify-around">
            {/* Login Form */}
            <View className="mt-10 flex w-11/12 flex-col items-center justify-center">
              <LoginForm
                control={control as unknown as Control<FieldValues, any>}
                errors={errors}
                register={register as unknown as UseFormRegister<FieldValues>}
                handleLogin={handleLogin}
              />
              <DefaultButton
                title="Login"
                // onPress={handleLogin}
                onPress={handleSubmit(onSubmit)}
                className="w-10/12"
              />
            </View>
            <View className="mb-3 flex w-11/12 flex-col items-center justify-around">
              <Text className="mb-3 text-white">Or connect with</Text>
              <View className="flex w-full flex-row items-center justify-around">
                <Image
                  source={require('../../../assets/fit-connect/fit-connect-logo.png')}
                  className="flex h-[35px] w-[35px] rounded-md"
                />
                <Image
                  source={require('../../../assets/fit-connect/fit-connect-logo.png')}
                  className="flex h-[35px] w-[35px] rounded-md"
                />
                <Image
                  source={require('../../../assets/fit-connect/fit-connect-logo.png')}
                  className="flex h-[35px] w-[35px] rounded-md"
                />
              </View>
            </View>
          </View>

          <View className="flex w-11/12 items-center justify-around">
            {/* Signup Button */}
            <View className="mt-3 flex flex-row items-center justify-center">
              <Text className="text-white">I don't have an account?</Text>
              <TouchableOpacity className="mx-3" onPress={handleSignup}>
                <Text className="text-primary-500 text-white">Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollableView>
    </View>
  )
}

export default LoginScreen
