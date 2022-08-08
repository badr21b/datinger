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

// @ts-ignore
const ConversationScreen = ({route}) => {
  const navigation = useNavigation();
  const scrollViewRef = React.useRef();

  const [user, setUser] = useState({
    username: '',
  });

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
        <ScrollView
          style={styles.conversationListContainer}
          contentContainerStyle={{
            alignItems: 'stretch',
            justifyContent: 'flex-end',
          }}
          // @ts-ignore
          ref={scrollViewRef}
          onContentSizeChange={() =>
            scrollViewRef.current.scrollToEnd({animated: true})
          }>
          <View style={[styles.messageHolder, styles.messageDirectionLeft]}>
            <View style={[styles.messageContainer, styles.leftColor]}>
              <Text style={styles.messageText}>
                {user.username}f frefrfrfrfrfr dzdazdzd dzzadza dzadkazj
                oidazoidjaz oidjzaio oid dziodjzaoi jdzai djoizdjzoai jdoziadj
                oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo ijdzojdoi
                zaj
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
                oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo ijdzojdoi
                zaj
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
                oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo ijdzojdoi
                zaj
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
                oidj oziad oidj oziad oidj oziad dziaodjzoidjzoa ijdzo ijdzojdoi
                zaj
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
            style={styles.conversationInputText}
            placeholder={'Say something'}
            // onChangeText={newText => setText(newText)}
            // defaultValue={'Say something'}
          />
          <TouchableWithoutFeedback>
            <Text style={styles.sendButton}>Send</Text>
          </TouchableWithoutFeedback>
          {/*<Button title={'Send'} />*/}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ConversationScreen;
