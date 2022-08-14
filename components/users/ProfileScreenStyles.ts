import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    width: undefined,
  },

  matchingHolder: {
    position: 'absolute', // child
    bottom: 20, // position where you want
    right: 20,
    backgroundColor: '#fd267d',
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignContent: 'center',
    shadowOffset: {width: 3, height: 3},
    shadowColor: '#ffffff',
    shadowOpacity: 0.7,
    shadowRadius: 9,
  },
  matchingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
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
    fontSize: 21,
  },
  texNormal: {
    fontWeight: '500',
    fontSize: 14,
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
