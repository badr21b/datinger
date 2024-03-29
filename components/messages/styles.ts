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
    backgroundColor: '#ffffff',
  },

  conversationMainContainer: {
    flex: 1,
  },

  conversationListContainer: {
    flex: 1,
    flexDirection: 'column',
    // width: '95%',
    height: 'auto',
    paddingHorizontal: 20,
    // alignContent: 'center',
    // alignItems: 'stretch',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    // borderWidth: 1,
    // backgroundColor: 'yellow',
    // paddingVertical: 100,
  },
  messageHolder: {
    marginVertical: 12,

    // borderWidth: 1,
    flexDirection: 'row',
  },
  messageDirectionLeft: {
    justifyContent: 'flex-end',
  },
  rightColor: {
    backgroundColor: '#E7F6F2',
  },

  leftColor: {
    backgroundColor: '#F6F6F6',
  },

  messageDirectionRight: {
    justifyContent: 'flex-start',
  },
  messageContainer: {
    padding: 12,
    maxWidth: '60%',
    textAlign: 'center',
    lineHeight: 1,
    // borderColor: 'red',
    // borderWidth: 1,
    borderRadius: 18,
    backgroundColor: '#d2d2d2',
  },
  messageText: {
    fontSize: 12,
    color: '#000',
    paddingHorizontal: 3,
  },

  conversationInputContainer: {
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#d2d2d2',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    // marginBottom: 10,

    // width: '100%',
  },
  conversationInputText: {
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    paddingLeft: 20,
  },

  sendButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontWeight: 'bold',
    borderRadius: 6,
    backgroundColor: '#e91e63',
    borderColor: '#e91e63',
  },
  sendButtonText: {
    color: '#ffffff',
  },
  sendButtonDisabled: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    fontWeight: 'bold',
    borderRadius: 6,
    backgroundColor: '#ffffff',
    borderColor: '#e91e63',
    borderWidth: 1,
  },
  sendButtonTextDisabled: {
    color: '#e91e63',
  },
});

export default styles;
