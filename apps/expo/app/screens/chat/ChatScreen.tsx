import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native'
import { useState, useRef } from 'react'
import { Ionicons } from '@expo/vector-icons'
import ScrollableView from '../../components/layout/ScrollableView'
import { useNavigation } from '@react-navigation/native'

const ChatScreen = () => {
  const navigation = useNavigation()
  const [message, setMessage] = useState('')
  const flatListRef = useRef(null)
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'system',
      timestamp: new Date(),
    },
    {
      id: '2',
      text: 'Here is a sample image:',
      sender: 'system',
      timestamp: new Date(Date.now() - 300000),
      image: 'https://picsum.photos/300/200',
    },
    {
      id: '3',
      text: 'Thanks for sharing!',
      sender: 'user',
      timestamp: new Date(Date.now() - 200000),
    },
  ])

  const scrollToBottom = () => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToEnd({ animated: true })
    }
  }

  const handleSend = () => {
    if (message.trim() === '') return

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setMessage('')

    // Scroll to bottom after sending message
    setTimeout(() => scrollToBottom(), 100)

    // Simulate response (in a real app, this would come from your backend)
    setTimeout(() => {
      const systemResponse = {
        id: (Date.now() + 1).toString(),
        text: 'Thanks for your message! Our team will get back to you soon.',
        sender: 'system',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, systemResponse])

      // Scroll to bottom after receiving response
      setTimeout(() => scrollToBottom(), 100)
    }, 1000)
  }

  const renderMessage = ({ item }) => {
    const isUser = item.sender === 'user'
    return (
      <View
        style={[
          styles.messageBubble,
          isUser ? styles.userMessage : styles.systemMessage,
        ]}
      >
        <Text style={{ color: isUser ? 'white' : 'black' }}>{item.text}</Text>

        {item.image && (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.messageImage}
              resizeMode="cover"
            />
          </View>
        )}

        <Text style={styles.timestamp}>
          {item.timestamp.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          })}
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView className="bg-background-500 flex-1">
      {/* Header with back button */}
      {/* <View className="bg-background-400 border-background-300 flex-row items-center border-b p-4 pt-6">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-semibold text-white">
          Chat With BUDHI
        </Text>
      </View> */}

      <View className="flex-1 p-4">
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
          onContentSizeChange={scrollToBottom}
          onLayout={scrollToBottom}
        />
      </View>

      <View className="border-background-400 flex-row items-center border-t bg-transparent p-2">
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type a message..."
          placeholderTextColor="#9CA3AF"
          className="bg-background-400 mr-2 flex-1 rounded-full px-4 py-2 text-white"
        />
        <TouchableOpacity
          onPress={handleSend}
          disabled={message.trim() === ''}
          className="h-10 w-10 items-center justify-center rounded-full bg-[#675283]"
        >
          <Ionicons name="send" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  messageBubble: {
    padding: 10,
    borderRadius: 16,
    marginVertical: 4,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#675283',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  systemMessage: {
    backgroundColor: '#E5E7EB',
    borderBottomLeftRadius: 4,
  },
  timestamp: {
    fontSize: 10,
    opacity: 0.7,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  imageContainer: {
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 12,
    overflow: 'hidden',
  },
  messageImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
})

export default ChatScreen
