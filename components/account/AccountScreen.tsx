import {Button, Text, View} from 'react-native';
import React from 'react';

// @ts-ignore
const AccountScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Account Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Likes')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AccountScreen;
