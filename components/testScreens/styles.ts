import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: '100%',
  },
  pictureContainer: {
    width: '20%',
    height: 100,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 12,
  },
  picture: {
    width: 80,
    height: 80,
    backgroundColor: '#FE474C',
    borderRadius: 100,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  textContainer: {
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    height: 100,
    width: '70%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginHorizontal: 12,
  },

  primaryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
    textTransform: 'capitalize',
  },
  secondaryText: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#6f6f6f',
    marginVertical: 1,
  },

});

export default styles;
