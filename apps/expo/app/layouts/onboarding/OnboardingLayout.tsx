import { View } from 'react-native'

const OnboardingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <View className="bg-secondary-500 flex-1 items-center justify-center">
      {children}
    </View>
  )
}

export default OnboardingLayout
