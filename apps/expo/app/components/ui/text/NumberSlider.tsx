import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Platform,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native'
import { useState, useRef, useEffect } from 'react'

interface NumberSliderProps {
  minValue?: number
  maxValue?: number
  initialValue?: number
  onValueChange?: (value: number) => void
}

const { width: SCREEN_WIDTH } = Dimensions.get('window')
// Fixed item size to ensure proper rendering 
const VISIBLE_ITEMS = 5 // Show 5 numbers in view
const ITEM_WIDTH = Math.floor(SCREEN_WIDTH / VISIBLE_ITEMS)
const SPACER_ITEM_COUNT = 2 // One spacer on each end
const SPACER_WIDTH = (SCREEN_WIDTH - ITEM_WIDTH) / 2

// Create a data array with spacers
const createDataArray = (min: number, max: number) => {
  // Create numbers + spacers at start/end for proper scrolling
  return [
    ...Array(SPACER_ITEM_COUNT).fill(null),
    ...Array.from({ length: max - min + 1 }, (_, i) => min + i),
    ...Array(SPACER_ITEM_COUNT).fill(null),
  ]
}

const NumberSlider = ({
  minValue = 1,
  maxValue = 31,
  initialValue = 28,
  onValueChange,
}: NumberSliderProps) => {
  const [data, setData] = useState<(number | null)[]>([])
  // Track both visually centered index and actual selected value index separately
  const [centeredIndex, setCenteredIndex] = useState(SPACER_ITEM_COUNT)
  const [selectedIndex, setSelectedIndex] = useState(SPACER_ITEM_COUNT)
  const [selectedValue, setSelectedValue] = useState<number | null>(null)
  const flatListRef = useRef<FlatList>(null)

  useEffect(() => {
    // Setup data with spacers
    const newData = createDataArray(minValue, maxValue)
    setData(newData)
    
    // Find and set the initial value, accounting for spacers
    const safeInitialValue = initialValue ?? minValue
    const valueIndex = newData.findIndex((value) => value === safeInitialValue)
    
    if (valueIndex >= 0) {
      setCenteredIndex(valueIndex)
      setSelectedIndex(valueIndex)
      setSelectedValue(safeInitialValue)
      
      // Scroll to the initial value with a slight delay to ensure layout is complete
      setTimeout(() => {
        flatListRef.current?.scrollToIndex({
          animated: false,
          index: valueIndex,
          viewPosition: 0.5,
        })
      }, 300)
    }
  }, [minValue, maxValue, initialValue])

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const index = Math.round(contentOffsetX / ITEM_WIDTH) + (VISIBLE_ITEMS % 2 === 0 ? 0 : 0)
    
    if (index >= 0 && index < data.length) {
      // Only update the centered index, not the selected value
      setCenteredIndex(index)
    }
  }

  const handleMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x
    const index = Math.round(contentOffsetX / ITEM_WIDTH) + (VISIBLE_ITEMS % 2 === 0 ? 0 : 0)
    
    // Only update the centered index, not select the value
    if (index >= 0 && index < data.length) {
      setCenteredIndex(index)
    }
  }

  const handleSelectValue = (index: number, value: number) => {
    // Only when explicitly tapping, we update the selected value
    setSelectedIndex(index)
    setSelectedValue(value)
    
    // Ensure selection is centered
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: index,
      viewPosition: 0.5,
    })
    
    // Notify parent of change
    if (onValueChange) {
      onValueChange(value)
    }
  }

  const renderItem = ({ item, index }: { item: number | null; index: number }) => {
    const isCentered = index === centeredIndex
    const isSelected = index === selectedIndex
    
    // If item is a spacer, render empty space
    if (item === null) {
      return <View style={{ width: ITEM_WIDTH }} />
    }

    return (
      <TouchableOpacity
        style={{ width: ITEM_WIDTH, alignItems: 'center', justifyContent: 'center' }}
        onPress={() => handleSelectValue(index, item)}
        activeOpacity={0.8}
      >
        {isSelected ? (
          <View className="items-center justify-center">
            <View className="h-[90px] w-[90px] items-center justify-center rounded-full border-[3px] border-purple-500 bg-transparent">
              <Text className="text-4xl font-semibold text-white">{item}</Text>
            </View>
            <View className="absolute right-1 top-1 h-6 w-6 items-center justify-center rounded-full bg-purple-500">
              <Text className="text-xs text-white">✓</Text>
            </View>
          </View>
        ) : (
          <View className="items-center">
            <Text className={`text-2xl font-normal ${isCentered ? 'text-gray-300' : 'text-gray-500'}`}>{item}</Text>
          </View>
        )}
      </TouchableOpacity>
    )
  }

  const getItemLayout = (_: any, index: number) => ({
    length: ITEM_WIDTH,
    offset: ITEM_WIDTH * index,
    index,
  })

  if (data.length === 0) {
    return <View className="h-[100px] w-full" />;
  }

  return (
    <View className="h-[120px] w-full">
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate={Platform.OS === 'ios' ? 'fast' : 0.95}
        snapToAlignment="center"
        initialScrollIndex={selectedIndex}
        getItemLayout={getItemLayout}
        onScroll={onScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        // Adding these guarantees better scrolling performance
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={10}
      />
    </View>
  )
}

export default NumberSlider
