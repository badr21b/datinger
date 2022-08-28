import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './ProfileScreenStyles';
import colors from '../genericComponents/styles/genericVariables';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    });
  }, [navigation, route.params.user]);

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
            <View style={styles.buttonsHolder}>
              <View style={[styles.matchingHolder, styles.closeButton]}>
                <MaterialCommunityIcons
                  name="close"
                  color={'#ffffff'}
                  size={24}
                />
              </View>
              <View style={[styles.matchingHolder, styles.matchingButton]}>
                <Text style={styles.matchingText}>{user.matching}%</Text>
              </View>
              <View style={[styles.matchingHolder, styles.likeButton]}>
                <MaterialCommunityIcons
                  name="heart"
                  color={'#ffffff'}
                  size={24}
                />
              </View>
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
