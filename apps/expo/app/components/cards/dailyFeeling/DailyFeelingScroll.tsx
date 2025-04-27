import { View, Text, ScrollView } from 'react-native'
import HorizontalScrollingCard from '../HorizontalScrollingCard'
import FeelingCard from './FeelingCard'
import Title from '../../ui/text/Title'

const DailyFeelingScroll = () => {
  return (
    <View className="h-full w-full items-center py-3">
      <View className="mb-1 mt-3 flex-row items-center justify-between">
        <Title style="text-white text-lg">How do you feel today?</Title>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FeelingCard
          title="So happy"
          description="Description"
          image="https://via.placeholder.com/150"
          price={100}
          rating={4.5}
          color="bg-green-500"
          icon="heart"
        />

        <FeelingCard
          title="Good"
          description="Description"
          image="https://via.placeholder.com/150"
          price={100}
          rating={4.5}
          color="bg-yellow-500"
          icon="square"
        />

        <FeelingCard
          title="Not bad"
          description="Description"
          image="https://via.placeholder.com/150"
          price={100}
          rating={4.5}
          color="bg-orange-500"
          icon="triangle"
        />

        <FeelingCard
          title="Bad"
          description="Description"
          image="https://via.placeholder.com/150"
          price={100}
          rating={4.5}
          color="bg-red-500"
          icon="circle-slice-8"
        />
      </ScrollView>
    </View>
  )
}

export default DailyFeelingScroll
