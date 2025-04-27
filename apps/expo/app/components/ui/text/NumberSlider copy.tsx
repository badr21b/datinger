import React, { useState, useRef, useCallback, useMemo } from 'react'
import {
  View,
  Text,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Platform,
  FlatList as FlatListType,
} from 'react-native'
import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const ITEM_WIDTH = 60 // Reduced width for better spacing
const SPACER_WIDTH = (SCREEN_WIDTH - ITEM_WIDTH) / 2

interface NumberSliderProps {
  minValue?: number
  maxValue?: number
  initialValue?: number
  onValueChange?: (value: number) => void
}

interface DataItem {
  id: number | 'left-spacer' | 'right-spacer'
}

const NumberSlider: React.FC<NumberSliderProps> = ({
  minValue = 1,
  maxValue = 31,
  initialValue = 28,
  onValueChange,
}) => {
  const data = useMemo<DataItem[]>(() => {
    const items = Array.from(
      { length: maxValue - minValue + 1 },
      (_, i) => minValue + i,
    )
    return [
      { id: 'left-spacer' },
      ...items.map((value) => ({ id: value })),
      { id: 'right-spacer' },
    ]
  }, [minValue, maxValue])

  const initialIndex = useMemo(() => {
    const foundIndex = data.findIndex((item) => item.id === initialValue)
    return foundIndex >= 0 ? foundIndex : 1
  }, [data, initialValue])

  const [selectedIndex, setSelectedIndex] = useState(initialIndex)
  const flatListRef = useRef<FlatListType<DataItem>>(null)

  const handleMomentumScrollEnd = useCallback(
    (event: any) => {
      const contentOffsetX = event.nativeEvent.contentOffset.x
      const index = Math.round(contentOffsetX / ITEM_WIDTH)
      const newSelectedIndex = index + 1

      if (newSelectedIndex >= 1 && newSelectedIndex < data.length - 1) {
        setSelectedIndex(newSelectedIndex)
        const selectedItem = data[newSelectedIndex]
        if (
          onValueChange &&
          selectedItem &&
          typeof selectedItem.id === 'number'
        ) {
          onValueChange(selectedItem.id)
        }
      }
    },
    [data, onValueChange],
  )

  const renderItem = useCallback(
    ({ item, index }: { item: DataItem; index: number }) => {
      if (item.id === 'left-spacer' || item.id === 'right-spacer') {
        return <StyledView style={{ width: SPACER_WIDTH }} />
      }

      const isSelected = index === selectedIndex
      const value = item.id

      return (
        <StyledTouchableOpacity
          className={`w-[${ITEM_WIDTH}px] relative h-16 items-center justify-center`}
          onPress={() => {
            flatListRef.current?.scrollToIndex({
              animated: true,
              index: index - 1,
            })
            setSelectedIndex(index)
            if (onValueChange && typeof value === 'number') {
              onValueChange(value)
            }
          }}
          activeOpacity={0.8}
        >
          {isSelected && (
            <StyledView className="absolute h-14 w-14 items-center justify-center rounded-full border-2 border-black" />
          )}
          <StyledText
            className={`
            font-medium
            ${isSelected ? 'text-2xl text-black' : 'text-lg text-neutral-400'}
          `}
          >
            {value}
          </StyledText>
        </StyledTouchableOpacity>
      )
    },
    [selectedIndex, onValueChange],
  )

  return (
    <StyledView className="h-20 items-center justify-center">
      <FlatList
        ref={flatListRef}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center' }}
        snapToInterval={ITEM_WIDTH}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.9}
        snapToAlignment="center"
        initialScrollIndex={initialIndex - 1}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        scrollEventThrottle={16}
        removeClippedSubviews={false}
      />
    </StyledView>
  )
}

export default NumberSlider
