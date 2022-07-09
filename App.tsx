/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Button, Image, StatusBar, Alert} from 'react-native';

//Screens
import HomeScreen from './components/home/HomeScreen';
import DetailsScreen from './components/testScreens/DetailsScreen';

// Store
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{
        uri: 'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      }}
    />
  );
}
const createThreeButtonAlert = () =>
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Ask me later',
      onPress: () => console.log('Ask me later pressed'),
    },
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

const App = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="red"
        barStyle={'default'}
        showHideTransition={'fade'}
        hidden={false}
      />
      <ReduxProvider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'My home',
                headerStyle: {
                  backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={{
                // @ts-ignore
                headerTitle: props => <LogoTitle {...props} />,
                headerRight: () => (
                  <Button
                    onPress={createThreeButtonAlert}
                    title="Info"
                    color="#00cc00"
                  />
                ),
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
};

export default App;
function alert(arg0: string): void {
  throw new Error('Function not implemented.');
}
