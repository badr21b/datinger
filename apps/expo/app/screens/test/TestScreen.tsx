import { View, Text, TouchableOpacity, ScrollView, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../navigators/routes'
import { useDispatch } from 'react-redux'
import { updateAccessToken } from 'app/provider/store/reducers/AccessTokenSlice'
import ScrollableView from '../../components/layout/ScrollableView'
import { useFindPetsByStatusQuery } from 'app/provider/store/BudhiApi'
import Calculator from '../../components/test/Calculator'
import { Audio } from 'expo-av'
import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import FashionShop from '../../components/test/FashionShop'
const TestScreen = () => {
  // HOOKS
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const dispatch = useDispatch()

  // QUERIES
  const {
    data: pets,
    error: petsErr,
    isLoading: petsLoading,
    refetch: petsRefetch,
  } = useFindPetsByStatusQuery({
    status: 'available',
  })
  //console.log({ pets, petsErr, petsLoading })

  const [sound, setSound] = useState<Audio.Sound | null>(null)

  const playSound = async () => {
    try {
      // Unload any existing sound first
      if (sound) {
        await sound.unloadAsync()

        console.log({
          playingSound: sound,
        })
      }

      // Make sure Audio is initialized
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
        shouldDuckAndroid: true,
      })

      console.log('Loading sound...')
      const { sound: newSound } = await Audio.Sound.createAsync(
        {
          uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
        { shouldPlay: true },
      )

      setSound(newSound)

      // Optional: Handle playback status updates
      newSound.setOnPlaybackStatusUpdate((status) => {
        //console.log('Playback status:', status)
      })
    } catch (error) {
      console.error('Error loading audio:', error)
    }
  }

  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync()
    }
  }

  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync()
    }
  }

  useEffect(() => {
    return () => {
      if (sound) {
        console.log('Unloading sound...')
        sound.unloadAsync()
      }
    }
  }, [sound])

  // RENDER
  return (
    <ScrollableView>

      {/* <FashionShop /> */}

      <Calculator />


      <View>
        <Button title="Play Audio" onPress={playSound} />
        <Button title="Stop Audio" onPress={stopSound} />
        <Button title="Pause Audio" onPress={pauseSound} />
      </View>

      <View className="bg-background-500 flex-1 items-center justify-center p-4">
        <Text className="text-2xl font-bold text-white">Test Screen</Text>
        <View className="h-60 w-full bg-blue-500">
          {petsLoading && <Text>Loading...</Text>}
          {petsErr && <Text>Error: {JSON.stringify(petsErr)}</Text>}

          <ScrollView horizontal>
            {pets?.map((pet) => (
              <View
                key={pet.id}
                className="h-40 w-40 items-center justify-center overflow-hidden border-2 border-white bg-red-500"
              >
                <Text>{pet.name}</Text>
              </View>
            ))}
          </ScrollView>
          <TouchableOpacity
            className="h-10 w-auto items-center justify-center rounded-full bg-blue-500"
            onPress={() => petsRefetch()}
          >
            <Text>Load more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollableView>
  )
}

export default TestScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
})
