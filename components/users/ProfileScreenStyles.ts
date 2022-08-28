import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    width: undefined,
  },

  buttonsHolder: {
    position: 'absolute', // child
    bottom: 0, // position where you want
    left: 0,
    width: '100%',
    paddingVertical: 12,
    justifyContent: 'space-around',
    alignContent: 'center',
    flexDirection: 'row',
  },
  closeButton: {
    backgroundColor: 'rgba(253,38,38,0.16)',
    borderColor: '#fd2626',
    borderWidth: 1,
  },
  likeButton: {
    backgroundColor: 'rgba(117,253,38,0.2)',
    borderColor: '#b9ffbe',
    borderWidth: 1,
  },
  matchingButton: {
    backgroundColor: '#fd267d',
  },
  matchingHolder: {
    borderRadius: 100,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignContent: 'center',
    shadowOffset: {width: 3, height: 3},
    shadowColor: '#ffffff',
    shadowOpacity: 0.7,
    shadowRadius: 9,
    alignItems: 'center',
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
    backgroundColor: '#ffffff',
  },

  profileStatusContainer: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    paddingVertical: 24,
    paddingHorizontal: 12,
    alignContent: 'center',
    backgroundColor: '#ffffff',
  },
  textIconMargin: {
    marginLeft: 9,
  },
  iconTextHolder: {
    flex: 1,
    width: undefined,
    justifyContent: 'flex-start',
    alignContent: 'center',
    //marginRight: 6,
    //paddingVertical: 3,
    flexDirection: 'row',
  },

  titleParagraphContainer: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
  },
  paragraphText: {
    fontSize: 14,
    lineHeight: 18,
    //marginVertical: 9,
  },

  fullWidthContainer: {
    width: undefined,
  },
  textBold: {
    fontWeight: '500',
    fontSize: 18,
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
  centeredText: {
    textAlign: 'center',
    marginVertical: 6,
  },

  actionButtonsContainer: {
    width: undefined,
    flexDirection: 'row',
    //flex: 1,
    height: 100,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default styles;
