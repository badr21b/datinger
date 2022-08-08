import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  stackNavBar: {
    backgroundColor: '#ffffff',
    width: '100%',
    paddingVertical: 9,
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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

  listItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
  },
});

export default styles;
