import {Button, Text, View} from 'react-native';
import React from 'react';

// @ts-ignore
const DetailsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      {/*<Button*/}
      {/*  title="Go to Details... again"*/}
      {/*  onPress={() => navigation.push('Details')}*/}
      {/*/>*/}
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;
