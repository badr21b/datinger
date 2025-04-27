import { View, Text } from 'react-native'
import HorizontalPanelLayout from '../../layouts/horizontal/HorizontalPanelLayout'

const HistoryList = () => {
  return (
    <HorizontalPanelLayout style="border-2  h-[100vh] items-center justify-start flex-col mx-0">
      <View className="mb-6 w-full flex-row items-center justify-between">
        <Text className="text-xl text-white">History</Text>
        <Text className="text-card-400 text-xs">View all</Text>
      </View>
      <View className="w-full flex-col items-center justify-center">
        <View className="bg-card-500 my-3 h-[80px] w-full rounded-xl"></View>
        <View className="bg-card-500 my-3 h-[80px] w-full rounded-xl"></View>
        <View className="bg-card-500 my-3 h-[80px] w-full rounded-xl"></View>
      </View>
    </HorizontalPanelLayout>
  )
}

export default HistoryList
