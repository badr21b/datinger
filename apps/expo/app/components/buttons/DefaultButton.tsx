import { TouchableOpacity, Text } from 'react-native'

const DefaultButton = ({
  title,
  onPress,
  className,
  textClassName,
  ...rest
}: {
  title: string
  onPress: () => void
  className?: string
  textClassName?: string
}) => {
  return (
    <TouchableOpacity
      {...rest}
      className={`bg-primary-500 my-3 rounded-2xl p-3 ${className}`}
      onPress={onPress}
    >
      <Text
        className={`w-full text-center text-sm font-semibold text-white ${textClassName}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default DefaultButton
