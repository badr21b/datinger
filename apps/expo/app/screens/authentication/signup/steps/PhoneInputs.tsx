import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Control, FieldValues, UseFormRegister, Controller } from 'react-hook-form'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

interface PhoneInputsProps {
  currentStep: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const PhoneInputs = ({
  currentStep,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: PhoneInputsProps) => {
  return (
    <View className="flex-1 bg-[#121827] px-5 pt-10">
    
      {/* Title */}
      <Text className="mt-14 text-3xl font-bold text-white">Your Phone?</Text>

      {/* Phone Input Section */}
      <View className="mt-10 flex-row space-x-2">
        {/* Country Code Dropdown */}
        <Controller
          control={control}
          name="countryCode"
          defaultValue="+90"
          render={({ field: { onChange, value } }) => (
            <TouchableOpacity 
              className="flex-row items-center justify-between rounded-full border border-purple-500 bg-transparent px-4 py-3"
              onPress={() => {/* Handle dropdown */}}
            >
              <Text className="mr-1 text-lg text-white">{value}</Text>
              <Ionicons name="chevron-down" size={18} color="white" />
            </TouchableOpacity>
          )}
        />

        {/* Phone Number Input */}
        <Controller
          control={control}
          name="phoneNumber"
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              value={value}
              onChangeText={onChange}
              placeholder="555 555 55 55"
              placeholderTextColor="#a3a3a3"
              keyboardType="phone-pad"
              className="flex-1 rounded-full border border-purple-500 bg-transparent px-4 py-3 text-lg text-white"
            />
          )}
        />
      </View>
    </View>
  )
}

export default PhoneInputs
