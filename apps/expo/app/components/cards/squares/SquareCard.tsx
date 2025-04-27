import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const SquareCard = ({
  title,
  icon,
  onPress = () => {},
}: {
  title: string
  icon?: ImageSourcePropType | string
  onPress: () => void
}) => {
  return (
    <View className="flex h-full w-1/2 flex-col items-center justify-center">
      <TouchableOpacity
        className="flex h-40 w-40 items-center justify-center rounded-xl bg-[#232323] p-3"
        onPress={onPress}
      >
        {icon && (
          <View className="w-full items-start justify-center p-2">
            <View className="h-12 w-12 items-center justify-center rounded-full border border-white p-2">
              <Icon name={icon} size={24} color="white" />
            </View>
          </View>
        )}
        <Text className="mt-6 text-center text-sm font-semibold text-white">
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default SquareCard
