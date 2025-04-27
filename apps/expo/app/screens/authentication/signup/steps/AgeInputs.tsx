import { View, Text, SafeAreaView, TouchableOpacity, Platform } from 'react-native'
import {
  Control,
  FieldValues,
  UseFormRegister,
  Controller,
} from 'react-hook-form'
import DefaultButton from '../../../../components/buttons/DefaultButton'
import NumberSlider from '../../../../components/ui/text/NumberSlider'
import { LinearGradient } from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons'

interface AgeInputsProps {
  currentStep: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const AgeInputs = ({
  currentStep,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: AgeInputsProps) => {
  return (
    <SafeAreaView className="flex-1 bg-[#141321]">

      {/* Title */}
      <View className="px-5 pt-16">
        <Text className="text-3xl font-semibold text-white">Your Age?</Text>
      </View>

      {/* Age Slider */}
      <View className="flex-1 items-center justify-center py-10">
        <Controller
          control={control}
          name="age"
          defaultValue={28}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <NumberSlider
              minValue={16}
              maxValue={90}
              initialValue={value || 28}
              onValueChange={onChange}
            />
          )}
        />
      </View>

    </SafeAreaView>
  )
}

export default AgeInputs
