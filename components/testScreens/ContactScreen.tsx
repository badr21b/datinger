import {Button, Text, View} from 'react-native';
import React from 'react';

// @ts-ignore
const ContactScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Contact Screen</Text>
      {/*<Button*/}
      {/*  title="Go to Details... again"*/}
      {/*  onPress={() => navigation.push('Contact')}*/}
      {/*/>*/}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default ContactScreen;
