import {Button, Text, View} from 'react-native';
import React from 'react';

const NoCards = ({}) => {
  return (
    <View>
      <Text>No More profiles to swipe</Text>
      <Button
        title={'Refresh list'}
        onPress={() => {
          console.log('refresh list');
        }}
      />
    </View>
  );
};

export default NoCards;
