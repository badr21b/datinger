import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stackNavBar: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingVertical: 9,
  },

  picture: {
    width: 110,
    height: 110,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
});

export default styles;
