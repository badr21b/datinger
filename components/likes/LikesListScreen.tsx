import {Button, FlatList, Image, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import {getTodoAsync} from '../../data/users/userListSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../data/store';
import UserListItem from '../users/UserListItem';
import styles from './styles';

// @ts-ignore
const LikesListScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const apiDataList = useSelector((state: RootState) => state.userList.data);
  let testList = Array(25).fill(apiDataList[0]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
      // @ts-ignore
      return dispatch(getTodoAsync('1'));
    }, 1500);
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/*<View style={styles.stackNavBar}>*/}
      {/*  <Button*/}
      {/*    title="Go to Home"*/}
      {/*    onPress={() => navigation.navigate('Home')}*/}
      {/*  />*/}
      {/*</View>*/}
      {showLoader ? (
        <View>
          <Image
            style={styles.picture}
            source={require('../../public/assets/animations/loading-animation-logo-transparent.gif')}
          />
        </View>
      ) : apiDataList.length > 0 ? (
        <FlatList
          data={testList}
          keyExtractor={(_, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return <UserListItem user={item} />;
          }}
        />
      ) : (
        <Text>Empty list</Text>
      )}
    </View>
  );
};

export default LikesListScreen;