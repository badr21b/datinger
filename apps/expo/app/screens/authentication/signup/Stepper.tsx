import { View } from 'react-native'
import Animated from 'react-native-reanimated'

interface StepperProps {
  currentStep: number
  onStepClick: (step: number) => void
  totalSteps?: number
}

const Stepper = ({
  currentStep,
  onStepClick,
  totalSteps = 7,
}: StepperProps) => {
  // Calculate progress percentage for the bar
  const progressPercentage = (currentStep / (totalSteps - 1)) * 100

  return (
    <View className="w-full pt-4">
      {/* Progress bar */}
      <View className="w-full px-4">
        <View className="relative h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
          <Animated.View
            style={{ width: `${progressPercentage}%` }}
            className="absolute h-full rounded-full bg-blue-500"
          />
        </View>
      </View>
    </View>
  )
}

export default Stepper
