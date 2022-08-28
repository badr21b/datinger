import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ProfileScreenStyles';
import colors from '../genericComponents/styles/genericVariables';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';

// @ts-ignore
const ProfileScreen = ({route}) => {
  const navigation = useNavigation();

  const [user, setUser] = useState({
    profilePicture: route.params.user.profile.picture,
    username: route.params.user.profile.name,
    age: route.params.user.profile.age,
    city: route.params.user.profile.city,
    country: route.params.user.profile.country,
    matching: route.params.user.interaction.matching,
    isLiked: route.params.user.interaction.isLiked,
    isDisliked: route.params.user.interaction.isDisliked,
    isMatched: route.params.user.interaction.isMatched,
  });

  //const getUserProfile = () => {};

  useEffect(() => {
    setUser(route.params.user);
    console.log(route.params.user);

    navigation.setOptions({
      title: route.params.user.profile.name,
    });

    setUser({
      profilePicture: route.params.user.profile.picture,
      username: route.params.user.profile.name,
      age: route.params.user.profile.age,
      city: route.params.user.profile.city,
      country: route.params.user.profile.country,
      matching: route.params.user.interaction.matching,
      isLiked: route.params.user.interaction.isLiked,
      isDisliked: route.params.user.interaction.isDisliked,
      isMatched: route.params.user.interaction.isMatched,
    });
  }, [navigation, route.params.user]);

  const handleDislikeUser = () => {
    console.log('dislike this user');
    console.log(user);
    if (!user.isDisliked) {
      setUser({
        ...user,
        isDisliked: true,
      });
    }
  };

  const handleLikeUser = () => {
    console.log('Like this user');
    console.log(user);
    if (!user.isLiked) {
      setUser({
        ...user,
        isLiked: true,
      });
    } else {
      Alert.alert(
        `${user.username} is liked! 🥰`,
        `You have already liked ${user.username}.
           💘 wait her until she will like you to be able to chat! 💬`,
        [
          // {
          //   text: 'Cancel',
          //   onPress: () => console.log('Cancel Pressed'),
          //   style: 'cancel',
          // },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );
    }
  };

  useEffect(() => {
    console.log(user.isLiked);
  }, [user]);

  return (
    <>
      <SafeAreaView style={styles.profileContainer}>
        <ScrollView>
          <View style={styles.pictureContainer}>
            <Image
              style={styles.picture}
              source={{
                uri: user.profilePicture,
              }}
            />

            {user.isDisliked && (
              <View style={styles.returnToSwiperButton}>
                <TouchableOpacity
                  onPress={() => {
                    // @ts-ignore
                    navigation.navigate('Home');
                  }}>
                  <Lottie
                    source={require('../../public/assets/animations/lotties/find-more-match-2.json')}
                    autoPlay
                    loop
                    style={{width: 200}}
                  />
                  <Text style={styles.returnToSwiperText}>
                    No problem your match is waiting you, click here to reach
                    her
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <View style={styles.buttonsHolder}>
              <TouchableOpacity
                onPress={() => {
                  handleDislikeUser();
                }}>
                <View style={[styles.matchingHolder, styles.closeButton]}>
                  <MaterialCommunityIcons
                    name={!user.isDisliked ? 'close' : 'heart-broken'}
                    color={'#ffffff'}
                    size={24}
                  />
                </View>
              </TouchableOpacity>
              <View style={[styles.matchingHolder, styles.matchingButton]}>
                <Text style={styles.matchingText}>{user.matching}%</Text>
              </View>

              {!user.isDisliked &&
                (user.isMatched ? (
                  <TouchableOpacity
                    onPress={() => {
                      // @ts-ignore
                      navigation.navigate('Conversation', {user: user});
                    }}>
                    <View style={[styles.matchingHolder, styles.chatButton]}>
                      <MaterialCommunityIcons
                        name="chat"
                        color={'#ffffff'}
                        size={24}
                      />
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      handleLikeUser();
                    }}>
                    <View style={[styles.matchingHolder, styles.likeButton]}>
                      <MaterialCommunityIcons
                        name="heart"
                        color={user.isLiked ? '#b9ffbe' : '#ffffff'}
                        size={24}
                      />
                    </View>
                  </TouchableOpacity>
                ))}
            </View>
          </View>

          <View style={styles.profileMainInfo}>
            <Text
              style={[
                styles.textBold,
                styles.fullWidthContainer,
                styles.blackText,
              ]}>
              {user.username}
            </Text>
            <Text
              style={[
                styles.texNormal,
                styles.fullWidthContainer,
                styles.grayText,
              ]}>
              {user.age} - {user.city}, {user.country}
            </Text>
          </View>

          <View style={styles.profileStatusContainer}>
            <View style={styles.iconTextHolder}>
              <MaterialCommunityIcons
                name="gender-male-female"
                color={'#e91e63'}
                size={24}
              />
              <Text style={styles.textIconMargin}>Woman | single</Text>
            </View>
            <View style={styles.iconTextHolder}>
              <MaterialCommunityIcons
                name="school"
                color={'#e91e63'}
                size={24}
              />
              <Text style={styles.textIconMargin}>College</Text>
            </View>
            <View style={styles.iconTextHolder}>
              <MaterialCommunityIcons name="eye" color={'#e91e63'} size={24} />
              <Text style={styles.textIconMargin}> looking for Long term</Text>
            </View>
          </View>

          <View>
            <View style={styles.titleParagraphContainer}>
              <Text style={[styles.textBold, colors.pink, styles.centeredText]}>
                About myself
              </Text>
              <Text style={[styles.paragraphText, styles.centeredText]}>
                jdzndj jdnzjdnazidozdazodio jd idjzodiozd idojzd azdiozjadoj
                diazjdo odnzdjzadb hndazjdnaznd jknzdazjnd
              </Text>
            </View>

            <View style={styles.titleParagraphContainer}>
              <Text style={[styles.textBold, colors.pink, styles.centeredText]}>
                My Hobbies
              </Text>
              <Text style={[styles.paragraphText, styles.centeredText]}>
                jdzndj jdnzjdnazidozdazodio jd idjzodiozd idojzd azdiozjadoj
                diazjdo odnzdjzadb hndazjdnaznd jknzdazjnd
              </Text>
            </View>

            <View style={styles.titleParagraphContainer}>
              <Text style={[styles.textBold, colors.pink, styles.centeredText]}>
                My positive points
              </Text>
              <Text style={[styles.paragraphText, styles.centeredText]}>
                jdzndj jdnzjdnazidozdazodio jd idjzodiozd idojzd azdiozjadoj
                diazjdo odnzdjzadb hndazjdnaznd jknzdazjnd
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/*<View style={styles.actionButtonsContainer}>*/}
      {/*  <Text>zd</Text>*/}
      {/*  <Text>zd</Text>*/}
      {/*  <Text>zd</Text>*/}
      {/*</View>*/}
    </>
  );
};

export default ProfileScreen;
