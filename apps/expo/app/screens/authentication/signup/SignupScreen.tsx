import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useRef, useState } from 'react'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../../navigators/routes'
import { useDispatch } from 'react-redux'
import DefaultButton from '../../../components/buttons/DefaultButton'
import LoginForm from '../../../components/inputs/LoginForm'
import { loginValidationSchema } from 'app/validation/authentication'
import Stepper from './Stepper'
import StepperContent from './steps/StepperContent'

import {
  SubmitHandler,
  useForm,
  Controller,
  FieldValues,
  Control,
  UseFormRegister,
} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  useSharedValue,
  runOnJS,
  Easing,
  Extrapolate,
} from 'react-native-reanimated'

const { width } = Dimensions.get('window')

const SignupScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useDispatch()

  const stepperRef = useRef<Animated.View>(null)
  const [currentStep, setCurrentStep] = useState(0)

  // VALIDATION ////////////////////////////////////////////////////////
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      gender: '',
      age: '',
      phone: '',
      weight: '',
      height: '',
      password: '',
    },
    // resolver: zodResolver(loginValidationSchema),
    mode: 'onSubmit',
  })

  const contentOpacity = useSharedValue(1)
  const contentScale = useSharedValue(1)
  const contentTranslateX = useSharedValue(0)
  const previousStep = useRef(0)

  // METHODS ////////////////////////////////////////////////////////
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Check if this is a back navigation action
    if (data.direction === 'back') {
      if (currentStep > 0) {
        handleStepClick(currentStep - 1)
      }
      return
    }

    // If we're at the last step, submit the form
    if (currentStep === 6) {
      console.log('Form submitted!', getValues())
      // Handle final submission
      return
    }

    // Otherwise, go to the next step
    handleStepClick(currentStep + 1)
  }

  const handleLogin = () => {
    // dispatch(updateAccessToken('1234567890'))
    navigation.navigate('LoginScreen')
  }

  const handleStepClick = (step: number) => {
    const direction = step > previousStep.current ? -1 : 1

    contentOpacity.value = withTiming(0, {
      duration: 200,
      easing: Easing.out(Easing.cubic),
    })

    contentScale.value = withTiming(0.8, {
      duration: 200,
      easing: Easing.out(Easing.cubic),
    })

    contentTranslateX.value = withTiming(
      direction * width,
      {
        duration: 200,
        easing: Easing.out(Easing.cubic),
      },
      () => {
        runOnJS(setCurrentStep)(step)
        contentScale.value = 1.2
        contentTranslateX.value = -direction * width

        contentOpacity.value = withTiming(1, {
          duration: 200,
          easing: Easing.in(Easing.cubic),
        })

        contentScale.value = withTiming(1, {
          duration: 200,
          easing: Easing.in(Easing.cubic),
        })

        contentTranslateX.value = withTiming(0, {
          duration: 200,
          easing: Easing.in(Easing.cubic),
        })
      },
    )

    previousStep.current = step
  }

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      opacity: contentOpacity.value,
      transform: [
        { scale: contentScale.value },
        { translateX: contentTranslateX.value },
      ],
    }
  })

  return (
    <SafeAreaView className="flex-1 bg-[#11131E]">
      <StatusBar barStyle="light-content" />
      <View className="flex-1 p-0">
        <Stepper currentStep={currentStep} onStepClick={handleStepClick} />

        <Animated.View
          className="flex-1 overflow-hidden"
          style={animatedContentStyle}
        >
          <StepperContent
            currentStep={currentStep}
            control={control}
            errors={errors}
            register={register}
            handleLogin={handleLogin}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}

export default SignupScreen
