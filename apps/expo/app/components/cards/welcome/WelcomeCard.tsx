import { View, Text, Image, TouchableOpacity } from 'react-native'
import Title from '../../ui/text/Title'
import ShortDescription from '../../ui/text/ShortDescription'
import DefaultButton from '../../buttons/DefaultButton'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../screens/navigators/routes'

const WelcomeCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View className=" bg-card-500 relative z-10 h-[160px] w-full flex-row overflow-visible rounded-xl">
      <View className="flex w-4/6 flex-row flex-col items-start justify-center">
        <Title style="text-black-500 text-left">Welcome to Budhi!</Title>
        <ShortDescription style="text-black-500 text-left">
          Let's start your journey!
        </ShortDescription>

        <DefaultButton
          title="Get Started"
          onPress={() => navigation.navigate('ProfileScreen')}
          className="mx-3 w-2/3 rounded-xl bg-yellow-300"
          textClassName="text-black text-xs"
        />
      </View>
      <View className="flex w-2/6 flex-row items-center justify-between">
        <Image
          source={require('../../../../assets/images/mascot/mascot-hi.webp')}
          className="h-50 w-50 absolute bottom-[-80px] right-0"
        />
      </View>
    </View>
  )
}

export default WelcomeCard
