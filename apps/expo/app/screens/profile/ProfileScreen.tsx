import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from 'react-native-screens/native-stack'
import { RootStackParamList } from '../navigators/routes'
import { useDispatch, useSelector } from 'react-redux'
import { updateAccessToken } from 'app/provider/store/reducers/AccessTokenSlice'
import ScrollableView from '../../components/layout/ScrollableView'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'

const ProfileScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const dispatch = useDispatch()
  // Mock user data - replace with actual user data from your state
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/150',
    phone: '+1 (555) 123-4567',
  })

  const handleLogout = () => {
    dispatch(updateAccessToken(''))
    navigation.navigate('AuthenticationScreens')
  }

  const handleEditProfile = () => {
    // Navigate to edit profile screen
    // navigation.navigate('EditProfileScreen')
    // For now, we'll just show an alert
    alert('Edit Profile functionality will be implemented soon')
  }

  const handleChangeAvatar = () => {
    // Implement image picker functionality
    alert('Change Avatar functionality will be implemented soon')
  }

  const handleDisconnectAccount = () => {
    // Show confirmation dialog before disconnecting
    alert('Are you sure you want to disconnect your account?')
    // Implement actual disconnection logic
  }

  return (
    <ScrollableView>
      <View className="bg-background-500 flex-1 p-4 pb-[100px]">
        {/* Profile Header */}
        <View className="items-center mb-8 mt-1">
          <View className="relative border-2 border-white bg-[#675283] rounded-full ">
            <Image
              source={{ uri: user.avatar }}
              className="w-24 h-24 rounded-full"
              style={{ width: 96, height: 96, borderRadius: 48 }}
            />
            <TouchableOpacity 
              onPress={handleChangeAvatar}
              className="absolute bottom-0 right-0 bg-primary-500 p-2 rounded-full border border-white"
              style={{ backgroundColor: '#675283' }}
            >
              <Ionicons name="camera" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <Text className="text-2xl font-bold text-white mt-2">{user.name}</Text>
          <Text className="text-gray-400">{user.email}</Text>
        </View>

        {/* Profile Information */}
        <View className="bg-background-400 rounded-lg p-4 mb-4">
          <Text className="text-white text-lg font-semibold mb-4">Personal Information</Text>
          
          <View className="mb-3">
            <Text className="text-gray-400 mb-1">Full Name</Text>
            <Text className="text-white">{user.name}</Text>
          </View>
          
          <View className="mb-3">
            <Text className="text-gray-400 mb-1">Email</Text>
            <Text className="text-white">{user.email}</Text>
          </View>
          
          <View className="mb-3">
            <Text className="text-gray-400 mb-1">Phone</Text>
            <Text className="text-white">{user.phone}</Text>
          </View>
        </View>

        {/* Actions */}
        <View className="bg-background-400 rounded-lg p-4 mb-4">
          <Text className="text-white text-lg font-semibold mb-4">Account Settings</Text>
          
          <TouchableOpacity 
            onPress={handleEditProfile}
            className="flex-row items-center py-3 border-b border-background-300"
          >
            <Ionicons name="create-outline" size={20} color="white" style={{ marginRight: 10 }} />
            <Text className="text-white">Edit Profile</Text>
            <Ionicons name="chevron-forward" size={20} color="white" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={() => alert('Change Password functionality will be implemented soon')}
            className="flex-row items-center py-3 border-b border-background-300"
          >
            <Ionicons name="lock-closed-outline" size={20} color="white" style={{ marginRight: 10 }} />
            <Text className="text-white">Change Password</Text>
            <Ionicons name="chevron-forward" size={20} color="white" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            onPress={handleDisconnectAccount}
            className="flex-row items-center py-3"
          >
            <Ionicons name="trash-outline" size={20} color="#EF4444" style={{ marginRight: 10 }} />
            <Text className="text-red-500">Disconnect Account</Text>
            <Ionicons name="chevron-forward" size={20} color="#EF4444" style={{ marginLeft: 'auto' }} />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          onPress={handleLogout}
          className="bg-red-500 py-3 rounded-lg items-center mt-4"
        >
          <Text className="text-white font-semibold">Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollableView>
  )
}

export default ProfileScreen
