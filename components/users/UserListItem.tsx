import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

// @ts-ignore
const UserListItem = ({user, screenType}) => {
  const navigation = useNavigation();
  const [redirectScreen, setRedirectScreen] = useState('');

  const handleRedirectScreen = () => {
    console.log(screenType);
    switch (screenType) {
      case 'messages':
        setRedirectScreen('Conversation');
        break;
      case 'likes':
        setRedirectScreen('Profile');
        break;
      default:
        setRedirectScreen('Home');
    }
  };

  useEffect(() => {
    handleRedirectScreen();
  }, [screenType]);

  return (
    <View style={styles.listItemContainer}>
      <View style={styles.pictureContainer}>
        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigation.navigate(redirectScreen, {user: user});
          }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
              // uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
            }}
            style={[styles.picture]}
          />
        </TouchableOpacity>
      </View>

      {screenType === 'messages' && (
        <View style={styles.textContainer}>
          <Text style={styles.primaryText}>{user.username}</Text>
          <Text
            style={styles.previewMessageText}
            ellipsizeMode="tail"
            numberOfLines={1}>
            Hello world! message here Hello world!
          </Text>
        </View>
      )}
      {screenType === 'likes' && (
        <View style={styles.textContainer}>
          {/*<Text>{user.id}</Text>*/}
          {/*<Text>{user.name}</Text>*/}
          <Text style={styles.primaryText}>{user.username}</Text>
          <Text style={styles.secondaryText}>{user.email}</Text>
          <Text style={styles.secondaryText}>{user.phone}</Text>
          <Text style={styles.secondaryText}>{user.website}</Text>
        </View>
      )}
    </View>
  );
};

export default UserListItem;
