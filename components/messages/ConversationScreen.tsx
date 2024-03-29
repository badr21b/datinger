import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

// @ts-ignore
const ConversationScreen = ({route}) => {
  const navigation = useNavigation();
  const scrollViewRef = React.useRef();

  const [user, setUser] = useState({
    username: '',
  });
  const [msgToSend, setMsgToSend] = useState('');

  const handleInputChange = (e: any) => {
    setMsgToSend(e);
  };

  // console.log(route.params.user);

  useEffect(() => {
    setUser(route.params.user);
    // console.log(route.params.user);

    navigation.setOptions({
      title: route.params.user.username,
    });
  }, [navigation, route.params.user]);

  return (
    <View style={styles.listItemContainer}>
      {/*<View style={styles.stackNavBar}>*/}
      {/*  <Button*/}
      {/*    title="Go to Home"*/}
      {/*    // @ts-ignore*/}
      {/*    onPress={() => navigation.navigate('Home')}*/}
      {/*  />*/}
      {/*</View>*/}

      <SafeAreaView style={styles.conversationMainContainer}>
        {/*<Text>ConversationScreen</Text>*/}

        <KeyboardAwareScrollView
          enableOnAndroid={true}
          // @ts-ignore
          ref={scrollViewRef}
          onContentSizeChange={() =>
            // @ts-ignore
            scrollViewRef.current.scrollToEnd({animated: true})
          }
          onKeyboardDidHide={(frames: Object) => {
            // console.log('Keyboard event', frames)
          }}>
          <ScrollView
            style={styles.conversationListContainer}
            contentContainerStyle={{
              alignItems: 'stretch',
              justifyContent: 'flex-end',
            }}>
            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>
                  {user.username}f frefrfrfrfrfr dzdazdzd dzzadza dzadkazj
                  oidazoidjaz oidjzaio oid dziodjzaoi jdzai djoizdjzoai jdoziadj
                  oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo
                  ijdzojdoi zaj
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionRight]}>
              <View style={[styles.messageContainer, styles.rightColor]}>
                <Text style={styles.messageText}>
                  {user.username}d dz dzdzdzdzdzdz
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>{user.username}</Text>
              </View>
            </View>
            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>
                  {user.username}f frefrfrfrfrfr dzdazdzd dzzadza dzadkazj
                  oidazoidjaz oidjzaio oid dziodjzaoi jdzai djoizdjzoai jdoziadj
                  oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo
                  ijdzojdoi zaj
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionRight]}>
              <View style={[styles.messageContainer, styles.rightColor]}>
                <Text style={styles.messageText}>
                  {user.username}d dz dzdzdzdzdzdz
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>{user.username}</Text>
              </View>
            </View>
            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>
                  {user.username}f frefrfrfrfrfr dzdazdzd dzzadza dzadkazj
                  oidazoidjaz oidjzaio oid dziodjzaoi jdzai djoizdjzoai jdoziadj
                  oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo
                  ijdzojdoi zaj
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionRight]}>
              <View style={[styles.messageContainer, styles.rightColor]}>
                <Text style={styles.messageText}>
                  {user.username}d dz dzdzdzdzdzdz
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>{user.username}</Text>
              </View>
            </View>
            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>
                  {user.username}f frefrfrfrfrfr dzdazdzd dzzadza dzadkazj
                  oidazoidjaz oidjzaio oid dziodjzaoi jdzai djoizdjzoai jdoziadj
                  oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo
                  ijdzojdoi zaj
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionRight]}>
              <View style={[styles.messageContainer, styles.rightColor]}>
                <Text style={styles.messageText}>
                  {user.username}d dz dzdzdzdzdzdz
                </Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
              <View style={[styles.messageContainer, styles.leftColor]}>
                <Text style={styles.messageText}>{user.username}</Text>
              </View>
            </View>

            <View style={[styles.messageHolder, styles.messageDirectionRight]}>
              <View style={[styles.messageContainer, styles.rightColor]}>
                <Text style={styles.messageText}>{user.username}</Text>
              </View>
            </View>
          </ScrollView>

          <View style={styles.conversationInputContainer}>
            <TextInput
              autoFocus={true}
              style={styles.conversationInputText}
              placeholder={'Say something'}
              onChangeText={(e: any) => {
                handleInputChange(e);
              }}
              // defaultValue={'Say something'}
            />
            <TouchableWithoutFeedback>
              <View
                style={
                  msgToSend.length > 0
                    ? styles.sendButton
                    : styles.sendButtonDisabled
                }>
                <Text
                  adjustsFontSizeToFit={true}
                  numberOfLines={1}
                  style={
                    msgToSend.length > 0
                      ? styles.sendButtonText
                      : styles.sendButtonTextDisabled
                  }>
                  Send
                </Text>
              </View>
            </TouchableWithoutFeedback>
            {/*<Button title={'Send'} />*/}
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ConversationScreen;
