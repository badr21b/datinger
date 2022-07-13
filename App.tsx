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
import {StatusBar} from 'react-native';

// Store
import store from './data/store';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './components/Navigator/TabNavigator';

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
          <BottomTabNavigator />
        </NavigationContainer>
      </ReduxProvider>
    </>
  );
};

export default App;
