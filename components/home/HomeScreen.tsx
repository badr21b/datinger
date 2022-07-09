import {Button, SafeAreaView, Text, View} from 'react-native';
import UserList from '../users/UserList';
import React from 'react';

// @ts-ignore
const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaView>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />

        {/* Inside of render() of React class */}
        <Button
          title="Update the title"
          onPress={() => navigation.setOptions({title: 'Updated!'})}
        />

        <UserList />
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
