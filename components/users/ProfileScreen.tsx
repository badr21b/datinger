import {Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

// @ts-ignore
const ProfileScreen = ({route}) => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    username: '',
  });

  // console.log(route.params.user);

  useEffect(() => {
    setUser(route.params.user);
    // console.log(route.params.user);

    navigation.setOptions({
      title: route.params.user.username,
    });
  }, [navigation, route.params.user]);

  return (
    <View style={styles.listItemContainer}>
      <View>
        <Text>ProfileScreen</Text>
        <Text>{user.username}</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;