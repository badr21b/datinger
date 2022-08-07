import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../testScreens/ContactScreen';
import HomeScreen from '../home/HomeScreen';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LikesListScreen from '../likes/LikesListScreen';
import {Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import AccountScreen from '../account/AccountScreen';
import MessagesListScreen from '../messages/MessagesListScreen';

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
      {/*Test */}
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Test',
          headerStyle: {
            backgroundColor: '#e91e63',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarButton: () => null,
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
