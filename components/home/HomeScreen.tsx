import {SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';

import SwiperCards from './swiper/SwiperCards';

// @ts-ignore
const HomeScreen = ({navigation}) => {
  useEffect(() => {
    // navigation.setOptions({title: 'Home Effect'})
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SafeAreaView>
        {/*@ts-ignore*/}
        <SwiperCards navigation={navigation} />

        {/*<Text>Home Screen</Text>*/}
        {/*<Button*/}
        {/*  title="Go to Details"*/}
        {/*  onPress={() => navigation.navigate('Details')}*/}
        {/*/>*/}

        {/*/!* Inside of render() of React class *!/*/}
        {/*<Button*/}
        {/*  title="Update the title"*/}
        {/*  // onPress={() => navigation.setOptions({title: 'Updated!'})}*/}
        {/*/>*/}

        {/*<UserList />*/}
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
