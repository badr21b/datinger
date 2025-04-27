import * as React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import metrics from '../../styles/metrics'

const GenericTouchableRipple = () => (
  <TouchableRipple
    onPress={() => console.log('Pressed')}
    rippleColor="rgba(0, 0, 0, .32)"
    //style={{ height: metrics.screenHeight, width: metrics.screenWidth }}
  >
    <Text>Press anywhere</Text>
  </TouchableRipple>
);

export default GenericTouchableRipple
