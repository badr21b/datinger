import { Text } from 'react-native'

const Title = ({ children, style }: { children: React.ReactNode, style?: string }) => {
  return <Text className={`px-3 w-full text-2xl font-bold ${style}`}>{children}</Text>
}

export default Title
