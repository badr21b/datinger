import { View, Text, TextInput } from 'react-native'
import {
  Control,
  FieldValues,
  UseFormRegister,
  Controller,
} from 'react-hook-form'
import { useState } from 'react'

interface WeightHeightInputsProps {
  currentStep: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const WeightHeightInputs = ({
  currentStep,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: WeightHeightInputsProps) => {
  return (
    <View className="h-full w-full flex-1 items-center justify-start p-6 py-12">
      <View className="w-full items-start justify-start">
        <Text className="text-2xl font-bold text-white">
          Your Weight & Height?
        </Text>
      </View>

      <View className="mt-8 w-full flex-1">
        <Controller
          control={control}
          name="weight"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="mb-6">
              <Text className="mb-2 text-gray-300">Weight (kg)</Text>
              <TextInput
                className="h-12 w-full rounded-md bg-gray-800 px-4 text-white"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your weight"
                placeholderTextColor="#6b7280"
                keyboardType="numeric"
              />
              {errors.weight && (
                <Text className="mt-1 text-red-500">Weight is required</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="height"
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className="mb-6">
              <Text className="mb-2 text-gray-300">Height (cm)</Text>
              <TextInput
                className="h-12 w-full rounded-md bg-gray-800 px-4 text-white"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your height"
                placeholderTextColor="#6b7280"
                keyboardType="numeric"
              />
              {errors.height && (
                <Text className="mt-1 text-red-500">Height is required</Text>
              )}
            </View>
          )}
        />
      </View>
    </View>
  )
}

export default WeightHeightInputs
