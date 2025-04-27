import { View, Text, ViewStyle, StyleProp } from 'react-native'

const HorizontalPanelLayout = ({
  children,
  style,
}: {
  children: React.ReactNode
  style?: string
  isScrollable?: boolean
}) => {
  return (
    <View
      className={`my-3 flex h-[220px] w-full flex-row items-center justify-center overflow-hidden rounded-xl bg-transparent ${style}`}
    >
      {children}
    </View>
  )
}

export default HorizontalPanelLayout
