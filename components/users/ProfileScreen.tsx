import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ProfileScreenStyles';
import {useNavigation} from '@react-navigation/native';

// @ts-ignore
const ProfileScreen = ({route}) => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    username: '',
  });

  //const getUserProfile = () => {};

  useEffect(() => {
    setUser(route.params.user);
    // console.log(route.params.user);

    navigation.setOptions({
      title: route.params.user.username,
    });
  }, [navigation, route.params.user]);

  return (
    <View>
      <View style={styles.pictureContainer}>
        <Image
          style={styles.picture}
          source={{
            uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            // uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
          }}
        />
      </View>

      <View>
        <Text>{user.username}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
