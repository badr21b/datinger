import { Text } from 'react-native'

const ShortDescription = ({ children, style }: { children: React.ReactNode, style?: string }) => {
  return <Text className={`px-3 w-full text-sm text-black-500 ${style}`}>{children}</Text>
}

export default ShortDescription
