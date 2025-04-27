import { View, TouchableOpacity, Text, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import GradientButton from '../../../../components/buttons/GradientButton'

interface StepperButtonsProps {
  currentStep: number
  handleSubmit: (onSubmit: any) => () => void
  onSubmit: (data: any) => void
}

const StepperButtons = ({
  currentStep,
  handleSubmit,
  onSubmit,
}: StepperButtonsProps) => {
  const isLastStep = currentStep === 6
  const isIOS = Platform.OS === 'ios'

  const handleBack = () => {
    // Use a negative value to indicate going backwards
    onSubmit({ direction: 'back' })
  }

  return (
    <View className="flex w-full flex-row items-center justify-between px-6 pb-8">
      {/* Left side: Back button or empty space */}
      {currentStep > 0 ? (
        <TouchableOpacity
          onPress={handleBack}
          className="h-14 items-start justify-center"
        >
          <Text className="text-base font-medium text-white">Back</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ width: 80 }} /> // Placeholder to maintain layout when no back button
      )}

      {/* Right side: Next button */}
      {!isLastStep ? (
        isIOS ? (
          <View style={{ display: 'flex', alignItems: 'center' }}>
            <GradientButton
              title="Next"
              onPress={handleSubmit(onSubmit)}
              filled={true}
              className="h-14 rounded-full"
              textClassName="text-xl"
              rightIcon={<Icon name="arrow-forward" size={20} color="white" />}
              primaryColors={['#5B83FD', '#9A71F5', '#E261F3']}
              primaryStart={{ x: 0, y: 0 }}
              primaryEnd={{ x: 1, y: 1 }}
            />
          </View>
        ) : (
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            className="h-14 items-center justify-center rounded-full bg-purple-500 px-4"
          >
            <View className="flex flex-row items-center">
              <Text className="mr-2 text-xl font-medium text-white">Next</Text>
              <Icon name="arrow-forward" size={20} color="white" />
            </View>
          </TouchableOpacity>
        )
      ) : (
        <View style={{ width: 112 }} /> // Placeholder to maintain layout when no next button
      )}
    </View>
  )
}

export default StepperButtons
