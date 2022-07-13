import {StyleSheet} from 'react-native';
import {green} from 'react-native-reanimated/lib/types/lib';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  card: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },

  rotateRight: {
    transform: [{rotate: '15deg'}],
  },
  rotateLeft: {
    transform: [{rotate: '-15deg'}],
  },
  swipeDecisionTextContainer: {
    position: 'absolute',
    top: 150,
    width: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 5,
    zIndex: 1000,
    swipeDecisionText: {
      fontSize: 18,
      fontWeight: 'bold',
      paddingHorizontal: 32,
      paddingVertical: 12,
      color: '#01df8a',
      borderWidth: 4,
      borderColor: '#01df8a',
      borderRadius: 9,
    },
  },

  picture: {
    width: 320,
    height: 470,
    backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  card1: {
    backgroundColor: '#FE474C',
  },
  card2: {
    backgroundColor: '#FEB12C',
  },
  label: {
    lineHeight: 400,
    textAlign: 'center',
    fontSize: 55,
    fontFamily: 'System',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },

  profileInfoContainer: {
    lineHeight: 28,
    fontSize: 16,
    color: '#ffffff',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    textAlign: 'left',
    marginLeft: 16,
  },
  nameAgeText: {
    fontWeight: 'bold',
    lineHeight: 28,
    fontSize: 21,
    color: '#ffffff',
    backgroundColor: 'transparent',
    position: 'relative',
    bottom: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    textAlign: 'left',
    marginLeft: 16,
  },
  onlineStatus: {
    // fontWeight: 'bold',
    lineHeight: 28,
    fontSize: 12,
    color: '#ffffff',
    backgroundColor: 'transparent',
    position: 'relative',
    bottom: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
    textAlign: 'left',
    marginLeft: 16,
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 220,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    shadowColor: 'rgba(0,0,0,0.3)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  orange: {
    width: 55,
    height: 55,
    borderWidth: 6,
    borderColor: 'rgb(246,190,66)',
    borderRadius: 55,
    marginTop: -15,
  },
  green: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#01df8a',
  },
  red: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 75,
    borderWidth: 6,
    borderColor: '#fd267d',
  },
  greenColor: {
    borderColor: '#01df8a',
  },
  redColor: {
    borderColor: '#fd267d',
  },
  actionButtonsContainer: {
    width: '100%',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  actionIcon: {
    borderRadius: 100,
    borderWidth: 2,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 9,
  },
});

export default styles;
