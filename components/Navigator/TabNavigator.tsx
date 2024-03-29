import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../home/HomeScreen';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LikesListScreen from '../likes/LikesListScreen';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AccountScreen from '../account/AccountScreen';
import MessagesListScreen from '../messages/MessagesListScreen';
import ProfileScreen from '../users/ProfileScreen';
import ConversationScreen from '../messages/ConversationScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      backBehavior={'initialRoute'}
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}>
      {/* Hidden Tabs */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#e91e63',
          },
          tabBarStyle: {display: 'none'},
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarButton: () => null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('Likes');
                //navigation.goBack();
              }}>
              <>
                <MaterialCommunityIcons
                  style={styles.tabHeaderLeft}
                  name="arrow-left"
                  color={'#ffffff'}
                  size={24}
                />
              </>
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="Conversation"
        component={ConversationScreen}
        options={{
          title: 'Conversation',
          headerStyle: {
            backgroundColor: '#e91e63',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarStyle: {display: 'none'},
          tabBarButton: () => null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('Messages');
              }}>
              <>
                <MaterialCommunityIcons
                  style={styles.tabHeaderLeft}
                  name="arrow-left"
                  color={'#ffffff'}
                  size={24}
                />
              </>
            </TouchableOpacity>
          ),
        }}
      />

      {/* Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Datinger',
          headerStyle: {
            backgroundColor: '#e91e63',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* Likes */}
      <Tab.Screen
        name="Likes"
        component={LikesListScreen}
        options={{
          tabBarLabel: 'Likes',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="heart-outline"
              color={color}
              size={size}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('Account');
              }}>
              <Image
                source={{
                  uri: 'https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg',
                }}
                style={[styles.tabPicture]}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('Home');
              }}>
              <>
                <MaterialCommunityIcons
                  style={styles.tabHeaderLeft}
                  name="cards"
                  color={'#e91e63'}
                  size={24}
                />
              </>
            </TouchableOpacity>
          ),
        }}
      />

      {/* Messages */}
      <Tab.Screen
        name="Messages"
        component={MessagesListScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="message-text"
              color={color}
              size={size}
            />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.navigate('Account');
              }}>
              <Image
                source={{
                  uri: 'https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg',
                }}
                style={[styles.tabPicture]}
              />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                // @ts-ignore
                navigation.goBack();
              }}>
              <>
                <MaterialCommunityIcons
                  style={styles.tabHeaderLeft}
                  name="arrow-left"
                  color={'#e91e63'}
                  size={24}
                />
              </>
            </TouchableOpacity>
          ),
        }}
      />

      {/* Account */}
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
