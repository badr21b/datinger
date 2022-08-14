import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    width: undefined,
  },

  pictureContainer: {
    height: 400,
    //flex: 0.6,
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
  profileMainInfo: {
    width: undefined,
    shadowColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 12,
    paddingHorizontal: 12,
    alignContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },

  fullWidthContainer: {
    width: undefined,
  },
  textBold: {
    fontWeight: '500',
    fontSize: 24,
  },
  texNormal: {
    fontWeight: '500',
    fontSize: 16,
    paddingVertical: 6,
  },
  blackText: {
    color: '#000000',
  },
  grayText: {
    color: '#6f6f6f',
  },
});

export default styles;
