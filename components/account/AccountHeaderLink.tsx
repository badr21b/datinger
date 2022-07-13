import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
// @ts-ignore
import React from 'react';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// @ts-ignore
const AccountHeaderLink = ({navigation, link, text}) => {
  return (
    <TouchableOpacity
      style={styles.textIconContainer}
      onPress={() => {
        navigation.navigate(link);
      }}>
      <View style={styles.headerIcon}>
        <MaterialCommunityIcons name={'home'} color={'#e91e63'} size={32} />
      </View>

      <Text style={styles.buttonItem}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AccountHeaderLink;
