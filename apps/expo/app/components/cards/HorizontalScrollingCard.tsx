import { View, Text } from 'react-native'

const HorizontalScrollingCard = ({
  title = 'Title',
  description = 'Description',
  image = 'https://via.placeholder.com/150',
  price = 100,
  rating = 4.5,
}: {
  title: string
  description: string
  image: string
  price: number
  rating: number
}) => {
  return (
    <View className="flex flex-row overflow-x-auto py-4">
      <View className="bg-primary-500 mr-4 h-40 w-72 rounded-lg p-4 shadow-md">
        <View className="flex-1">
          <View className="bg-primary-400 mb-2 h-6 w-3/4 rounded" />
          <View className="bg-primary-400 mb-auto h-4 w-1/2 rounded" />
          <View className="mt-2 flex flex-row justify-between">
            <View className="bg-primary-400 h-6 w-16 rounded" />
            <View className="bg-primary-400 h-6 w-6 rounded-full" />
          </View>
        </View>
      </View>
    </View>
  )
}

export default HorizontalScrollingCard
