import { View, Text, SafeAreaView, StatusBar, Platform } from 'react-native'
import { Control, FieldValues, UseFormRegister } from 'react-hook-form'
import NameEmailInputs from './NameEmailInputs'
import GenderInputs from './GenderInputs'
import AgeInputs from './AgeInputs'
import PhoneInputs from './PhoneInputs'
import StepperButtons from '../components/StepperButtons'
import { ReactElement } from 'react'

interface StepperContentProps {
  currentStep: number
  control: Control<FieldValues, any>
  errors: any
  register: UseFormRegister<FieldValues>
  handleLogin: () => void
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const StepperContent = ({
  currentStep,
  control,
  errors,
  register,
  handleLogin,
  handleSubmit,
  onSubmit,
}: StepperContentProps) => {
  let content: ReactElement | null = null

  switch (currentStep) {
    case 0:
      content = (
        <NameEmailInputs
          currentStep={currentStep}
          stepNumber={1}
          control={control}
          errors={errors}
          register={register}
          handleLogin={handleLogin}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      )
      break
    case 1:
      content = (
        <GenderInputs
          currentStep={currentStep}
          control={control}
          errors={errors}
          register={register}
          handleLogin={handleLogin}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      )
      break
    case 2:
      content = (
        <AgeInputs
          currentStep={currentStep}
          control={control}
          errors={errors}
          register={register}
          handleLogin={handleLogin}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      )
      break
    case 3:
      content = (
        <PhoneInputs
          currentStep={currentStep}
          control={control}
          errors={errors}
          register={register}
          handleLogin={handleLogin}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
        />
      )
      break
    case 4:
      content = (
        <View className="flex-1 items-center justify-center bg-[#11131E] p-5">
          <Text className="text-2xl font-bold text-white">Weight & Height</Text>
        </View>
      )
      break
    case 5:
      content = (
        <View className="flex-1 items-center justify-center bg-[#11131E] p-5">
          <Text className="text-2xl font-bold text-white">Password</Text>
        </View>
      )
      break
    case 6:
      content = (
        <View className="flex-1 items-center justify-center bg-[#11131E] p-5">
          <Text className="text-2xl font-bold text-white">Welcome!</Text>
        </View>
      )
      break
  }

  // Calculate progress percentages
  const completedProgress = ((currentStep + 1) / 7) * 100;
  const remainingProgress = 100 - completedProgress;
  
  // Reduce percentages slightly to create a gap
  const adjustedCompletedProgress = completedProgress > 0 ? completedProgress - 0.5 : 0;
  const adjustedRemainingProgress = remainingProgress > 0 ? remainingProgress - 0.5 : 0;

  return (
    <>
      <StatusBar backgroundColor="#11131E" barStyle="light-content" />
      <SafeAreaView className="flex-1 bg-[#11131E]">
        <View className="flex-1 flex-col justify-between">
          
          <View className="px-4 mt-4 mb-2">
            <View className="flex-row w-full h-2 justify-between">
              {/* Completed progress bar */}
              <View 
                className="h-full rounded-l-full rounded-r-full" 
                style={{
                  width: `${adjustedCompletedProgress}%`,
                  backgroundColor: '#6C55F9',
                  overflow: 'hidden',
                }}
              >
                {Platform.OS === 'ios' && (
                  <View 
                    className="absolute top-0 left-0 right-0 bottom-0 opacity-20"
                    style={{
                      backgroundColor: 'white',
                    }}
                  />
                )}
              </View>
              
              {/* Small gap between bars */}
              <View className="w-2 h-full" />
              
              {/* Remaining progress bar */}
              <View 
                className="h-full rounded-l-full rounded-r-full" 
                style={{
                  width: `${adjustedRemainingProgress}%`,
                  backgroundColor: '#212538',
                }}
              >
                {currentStep === 6 && (
                  <View className="absolute right-0 top-0 h-3 w-3 rounded-full bg-[#6C55F9]" style={{transform: [{translateY: -0.5}]}} />
                )}
              </View>
            </View>
          </View>
          
          <View className="flex-1 bg-[#11131E]">
            {content}
          </View>
          
          <View className="w-full bg-[#11131E]">
            <StepperButtons
              currentStep={currentStep}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default StepperContent
