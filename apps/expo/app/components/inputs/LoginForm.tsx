import { View } from 'react-native'
import NativeGenericInput from './NativeGenericInput'
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from 'react-hook-form'
import DefaultButton from '../buttons/DefaultButton'
const LoginForm = (props: {
  control: Control<FieldValues, any>
  errors: FieldErrors<FieldValues>
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
}) => {
  const { control, errors, register, handleLogin } = props

  return (
    <View className="flex w-11/12 flex-col items-center justify-center">
      <NativeGenericInput
        control={props.control}
        errors={errors}
        register={register}
        title="Email"
        fieldName="email"
        inputType="default"
        secureTextEntry={false}
        placeholder="Enter your email"
      />

      <NativeGenericInput
        control={control}
        errors={errors}
        register={register}
        title="Password"
        fieldName="password"
        inputType="default"
        secureTextEntry={true}
        placeholder="Enter your password"
      />

      {/* <DefaultButton
              title="Login"
              onPress={handleLogin}
              className="w-11/12"
            /> */}
    </View>
  )
}

export default LoginForm
