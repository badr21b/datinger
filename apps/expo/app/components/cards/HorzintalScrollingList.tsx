import { View, ScrollView } from 'react-native'
import HorizontalScrollingCard from './HorizontalScrollingCard'

const HorzintalScrollingList = () => {
  return (
    <ScrollView horizontal className="flex flex-row overflow-x-auto py-4">
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
      <HorizontalScrollingCard
        title="Title"
        description="Description"
        image="https://via.placeholder.com/150"
        price={100}
        rating={4.5}
      />
    </ScrollView>
  )
}

export default HorzintalScrollingList
