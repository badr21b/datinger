import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pictureContainer: {
    height: 400,
    flex: 1,
    width: undefined,
  },
  picture: {
    width: undefined,
    height: 400,
    backgroundColor: '#FE474C',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

export default styles;
