import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },

  buttonsContainer: {
    // backgroundColor: '#ffffff',
    backgroundColor: '#e91e63',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonItem: {
    paddingVertical: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  profilePictureContainer: {
    flex: 0.6,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomRightRadius: 100,
    borderBottomEndRadius: 120,
    borderBottomLeftRadius: 120,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  profilePicture: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  progressText: {
    position: 'absolute',
    bottom: -15,
    fontWeight: 'normal',
    fontSize: 18,
    backgroundColor: '#e91e63',
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 18,
    color: '#ffffff',
  },
});

export default styles;
