import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

// @ts-ignore
const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonItem}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonItem}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonItem}>Add photo</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.profilePictureContainer}>
        <Image
          source={{
            uri: 'https://www.opticalexpress.co.uk/media/1064/man-with-glasses-smiling-looking-into-distance.jpg',
          }}
          style={styles.profilePicture}
        />

        <AnimatedCircularProgress
          rotation={270}
          size={245}
          width={8}
          fill={70}
          tintColor="#e91e63"
          onAnimationComplete={() => console.log('onAnimationComplete')}
          backgroundColor="#D9D9D9FF"
          // eslint-disable-next-line react-native/no-inline-styles
          childrenContainerStyle={{overflow: 'visible'}}>
          {fill => (
            <Text style={styles.progressText}>
              Complete at {fill.toFixed(0)} %
            </Text>
          )}
        </AnimatedCircularProgress>
      </View>

      {/*<Text>Account Screen</Text>*/}
      {/*<Button title="Go to Home" onPress={() => navigation.navigate('Home')} />*/}
      {/*<Button*/}
      {/*  title="Go to Details"*/}
      {/*  onPress={() => navigation.navigate('Likes')}*/}
      {/*/>*/}
      {/*<Button title="Go back" onPress={() => navigation.goBack()} />*/}
    </View>
  );
};

export default AccountScreen;
