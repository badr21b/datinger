import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
// @ts-ignore
import React, { useEffect, useState } from "react";
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// @ts-ignore
const AccountHeaderLink = ({navigation, link, text}) => {
  const [icon, setIcon] = useState('heart');
  useEffect(() => {
    switch (link) {
      case 'Home':
        setIcon('home');
        break;
      case 'Settings':
        setIcon('cog');
        break;
      case 'Photo':
        setIcon('camera');
        break;
      case 'Edit':
        setIcon('account-edit');
        break;
      default:
        setIcon('heart');
    }
  }, [link]);

  return (
    <TouchableOpacity
      style={styles.textIconContainer}
      onPress={() => {
        navigation.navigate(link);
      }}>
      <View style={styles.headerIcon}>
        <MaterialCommunityIcons name={icon} color={'#e91e63'} size={24} />
      </View>

      <Text style={styles.buttonItem}>{text}</Text>
    </TouchableOpacity>
  );
};

export default AccountHeaderLink;
