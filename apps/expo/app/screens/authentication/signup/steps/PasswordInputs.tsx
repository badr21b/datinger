import { View, Text } from 'react-native'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'
import DefaultButton from '../../../../components/buttons/DefaultButton'

interface PasswordInputsProps {
  currentStep: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const PasswordInputs = ({
  currentStep,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: PasswordInputsProps) => {
  return (
    <View className="flex-1 items-center justify-center bg-purple-500">
      <Text className="text-xl font-bold text-white">Step 5</Text>
      <Text className="text-white">Password Setup</Text>

      <View className="mt-10 w-11/12 flex-col items-center justify-center">
        <View className="flex w-full flex-row items-center justify-between px-4">
          {currentStep > 0 && (
            <DefaultButton
              title="Back"
              onPress={handleSubmit(onSubmit)}
              className="w-auto px-4"
            />
          )}
          <DefaultButton
            title="Next"
            onPress={handleSubmit(onSubmit)}
            className="w-auto px-4"
          />
        </View>
      </View>
    </View>
  )
}

export default PasswordInputs
