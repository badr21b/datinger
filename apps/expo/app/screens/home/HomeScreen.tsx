import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../navigators/routes'
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated'
import ScrollableView from '../../components/layout/ScrollableView'
import HorzintalScrollingList from '../../components/cards/HorzintalScrollingList'
import LineSeparator from '../../components/separators/LineSeparator'
import { useState } from 'react'
import { useFindPetsByStatusQuery } from 'app/provider/store/BudhiApi'
import DailyFeelingScroll from '../../components/cards/dailyFeeling/DailyFeelingScroll'
import WelcomeCard from '../../components/cards/welcome/WelcomeCard'
import SquareCard from '../../components/cards/squares/SquareCard'
import HorizontalPanelLayout from '../../layouts/horizontal/HorizontalPanelLayout'
import HistoryList from '../../components/lists/HistoryList'
import DownloadPdf from '../../components/downloading/pdf/DownloadPdf'
import horseRiderFeelings from 'app/features/data/mocks/horse_rider_feelings.json'

const HomeScreen = () => {
  // HOOKS
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  // TODO: mock data for PDF testing
  const horseRiderData = horseRiderFeelings

  // RENDER
  return (
    <View className="bg-background-500 flex-1 rounded-none border p-3">
      <ScrollableView className="bg-default-500 min-h-[400vh] w-full">
        <HorizontalPanelLayout style="bg-card-500 rounded-xl overflow-visible">
          <WelcomeCard />
        </HorizontalPanelLayout>

        <HorizontalPanelLayout style="mx-0">
          <SquareCard title="Chat with BUDHI" onPress={() => {
            navigation.navigate('ChatScreen')
          }} icon="chat" />
          <SquareCard
            title="Match with your team"
            onPress={() => {
              navigation.navigate('TeamMatchingScreen')
            }}
            icon="account-group"
          />
        </HorizontalPanelLayout>

        <HorizontalPanelLayout style="bg-background-500 rounded-xl h-[200px] mx-0">
          <DailyFeelingScroll />
        </HorizontalPanelLayout>

        <HistoryList />

        <HorizontalPanelLayout style="bg-card-500 rounded-xl h-[200px] mx-0">
          <DownloadPdf
            data={horseRiderData}
            title="Horse and Rider Emotional Connection"
            coverImageUrl="https://media.istockphoto.com/id/1343512035/vector/running-black-line-horse-on-white-background.jpg?s=612x612&w=0&k=20&c=htroiIbxBpv36z_lQ1N_lzB-4hANMsISFwU0OioCQ8c=" // Optional custom cover
          />
        </HorizontalPanelLayout>
      </ScrollableView>
    </View>
  )
}

export default HomeScreen
