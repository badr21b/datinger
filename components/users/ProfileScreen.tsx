import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ProfileScreenStyles';
import {useNavigation} from '@react-navigation/native';

// @ts-ignore
const ProfileScreen = ({route}) => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    profilePicture: route.params.user.profile.picture,
    username: route.params.user.profile.username,
    age: route.params.user.profile.age,
    city: route.params.user.profile.city,
    country: route.params.user.profile.country,
    matching: route.params.user.interaction.matching,
  });

  //const getUserProfile = () => {};

  useEffect(() => {
    setUser(route.params.user);
    console.log(route.params.user);

    navigation.setOptions({
      title: route.params.user.profile.username,
    });

    setUser({
      profilePicture: route.params.user.profile.picture,
      username: route.params.user.profile.username,
      age: route.params.user.profile.age,
      city: route.params.user.profile.city,
      country: route.params.user.profile.country,
      matching: route.params.user.interaction.matching,
    });
  }, [navigation, route.params.user]);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.pictureContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: user.profilePicture,
          }}
        />
        <View style={styles.matchingHolder}>
          <Text style={styles.matchingText}>{user.matching}%</Text>
        </View>
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
