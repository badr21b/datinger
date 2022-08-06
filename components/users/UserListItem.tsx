import {Image, Text, View} from 'react-native';
import React from 'react';
import styles from '../testScreens/styles';

// @ts-ignore
const UserListItem = ({user}) => {
  return (
    <View style={styles.listItemContainer}>
      <View style={styles.pictureContainer}>
        <Image
          source={{
            // uri: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
            uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
          }}
          style={[styles.picture]}
        />
      </View>
      <View style={styles.textContainer}>
        {/*<Text>{user.id}</Text>*/}
        {/*<Text>{user.name}</Text>*/}
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.website}</Text>
      </View>
    </View>
  );
};

export default UserListItem;
