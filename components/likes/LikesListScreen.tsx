import {
  Button,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import {getTodoAsync} from '../../data/users/userListSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../data/store';
import UserListItem from '../users/UserListItem';
import styles from './styles';
import axios from 'axios';

// @ts-ignore
const LikesListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const apiDataList = useSelector((state: RootState) => state.userList.data[0]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      // @ts-ignore
      return dispatch(getTodoAsync());
    }, 500);
  }, []);

  const getDataUsingAsyncAwaitGetCall = async (data = {}) => {
    try {
      const response = await axios('http://51.250.19.232:7187/api/users', {
        method: 'get',
        headers: {
          'Content-type': 'Application/json',
          Accept: 'Application/json',
          //Authorization: '',
        },
        data: data ? data : null,
      });
      console.log(response);
    } catch (error) {
      // handle error
      // @ts-ignore
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/*<View style={styles.stackNavBar}>*/}
      {/*  <Button*/}
      {/*    title="Go to Home"*/}
      {/*    onPress={() => navigation.navigate('Home')}*/}
      {/*  />*/}
      {/*</View>*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>
      {showLoader ? (
        <View>
          <Image
            style={styles.picture}
            source={require('../../public/assets/animations/loading-animation-logo-transparent.gif')}
          />
        </View>
      ) : apiDataList?.length > 0 ? (
        <FlatList
          data={apiDataList}
          keyExtractor={(_, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return <UserListItem user={item} screenType={'likes'} />;
          }}
        />
      ) : (
        <Text>Empty list</Text>
      )}
    </View>
  );
};

export default LikesListScreen;
