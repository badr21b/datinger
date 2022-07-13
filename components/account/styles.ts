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
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: '#e91e63',
    borderWidth: 1,
    borderColor: 'transparent',
    overflow: 'hidden',
    borderRadius: 16,
    paddingVertical: 9,
    paddingHorizontal: 16,
    color: '#ffffff',
  },

  carouselContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
  carouselTitleContainer: {
    marginVertical: 12,
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  carouselTitle: {
    fontWeight: '500',
    fontSize: 18,
  },
  carouselTitleIcon: {
    marginHorizontal: 6,
  },
  carouselText: {
    // fontWeight: 'bold',
    fontSize: 14,
    color: '#3D3D3D',
  },
  headerLinkContainer: {

  },
});

export default styles;
