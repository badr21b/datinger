import {TouchableOpacity} from 'react-native';
import styles from './styles';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

// @ts-ignore
const SwipeArrowButton = ({direction, color, setCurrentCardSwipeDecision}) => {
  return (
    <TouchableOpacity
      style={[
        styles.actionIcon,
        direction === 'right' ? styles.greenColor : styles.redColor,
      ]}
      onPress={() => {
        direction === 'right'
          ? // @ts-ignore
            this.swiper.swipeRight()
          : // @ts-ignore
            this.swiper.swipeLeft();
        setCurrentCardSwipeDecision(direction);
      }}>
      <MaterialCommunityIcons
        name={'arrow-u-' + direction + '-top'}
        color={color}
        size={32}
      />
    </TouchableOpacity>
  );
};

export default SwipeArrowButton;
