import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountHeaderLink from './AccountHeaderLink';

// @ts-ignore
const AccountScreen = ({navigation}) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.buttonsContainer}>
        <AccountHeaderLink
          navigation={navigation}
          link={'Settings'}
          text={'Settings'}
        />

        <AccountHeaderLink
          navigation={navigation}
          link={'Edit'}
          text={'Edit Profile'}
        />

        <AccountHeaderLink
          navigation={navigation}
          link={'Photo'}
          text={'Add photo'}
        />
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

      <View style={styles.carouselContainer}>
        <View style={styles.carouselTitleContainer}>
          <MaterialCommunityIcons
            name="gold"
            color={'#e91e63'}
            size={24}
            style={styles.carouselTitleIcon}
          />
          <Text style={styles.carouselTitle}>Get Datinger </Text>
          <Text style={[styles.carouselTitle, {color: '#FFA62B', fontWeight: 'bold'}]} >Premium</Text>
        </View>
        <Text style={styles.carouselText}>
          Take it to the next level on Dating
        </Text>
      </View>
    </View>
  );
};

export default AccountScreen;
