import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabPicture: {
    width: 30,
    height: 30,
    backgroundColor: '#FE474C',
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    marginRight: 21,
  },

  tabHeaderLeft: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    marginLeft: 21,
    textAlignVertical: 'center',
  },
});

export default styles;
