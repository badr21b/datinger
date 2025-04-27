import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const FeelingCard = ({
  title = 'Title',
  description = 'Description',
  image = 'https://via.placeholder.com/150',
  price = 100,
  rating = 4.5,
  color = 'bg-primary-500',
  icon = 'heart',
}: {
  title: string
  description: string
  image: string
  price: number
  rating: number
  color: string
  icon: string
}) => {
  return (
    <View
      className={` m-1 flex h-[120px] w-[100px] items-center justify-center p-3 shadow-md`}
    >
      <View className="h-full w-full items-center justify-center ">
        <View className={`mb-3 rounded-full p-3 ${color}`}>
          <Icon name={icon} size={24} color="white" />
        </View>
        <Text className="text-sm font-bold text-white">{title}</Text>
      </View>
    </View>
  )
}

export default FeelingCard
