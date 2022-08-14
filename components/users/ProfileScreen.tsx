import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ProfileScreenStyles';
import {useNavigation} from '@react-navigation/native';

// @ts-ignore
const ProfileScreen = ({route}) => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    username: route.params.user.username,
    age: 28,
    city: 'Moscow',
    country: 'Russia',
  });

  //const getUserProfile = () => {};

  useEffect(() => {
    setUser(route.params.user);
    // console.log(route.params.user);

    navigation.setOptions({
      title: route.params.user.username,
    });

    setUser({
      username: route.params.user.username,
      age: 28,
      city: 'Moscow',
      country: 'Russia',
    });
  }, [navigation, route.params.user]);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.pictureContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
          }}
        />
      </View>

      <View style={styles.profileMainInfo}>
        <Text
          style={[
            styles.textBold,
            styles.fullWidthContainer,
            styles.blackText,
          ]}>
          {user.username}
        </Text>
        <Text
          style={[
            styles.texNormal,
            styles.fullWidthContainer,
            styles.grayText,
          ]}>
          {user.age} - {user.city}, {user.country}
        </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
