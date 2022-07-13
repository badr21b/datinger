import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
// @ts-ignore
import React from 'react';

// @ts-ignore
const AccountHeaderLink = ({navigation, link, text}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(link);
      }}>
      <Text style={styles.buttonItem}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AccountHeaderLink;
