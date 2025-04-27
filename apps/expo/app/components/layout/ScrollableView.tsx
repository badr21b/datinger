import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ScrollableViewProps = {
  children: React.ReactNode
  className?: string
}

const ScrollableView = ({ children, className = '' }: ScrollableViewProps) => {
  return (
    <SafeAreaView className="flex-1 bg-background-500">
      <ScrollView 
        className={`flex-1 ${className}`}
        showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ flexGrow: 1 }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScrollableView 