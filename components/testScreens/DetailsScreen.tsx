import {Button, FlatList, Text, View} from 'react-native';
import React from 'react';

import {getTodoAsync} from '../../data/users/userListSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../data/store';
import UserListItem from '../users/UserListItem';


// @ts-ignore
const DetailsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const apiDataList = useSelector((state: RootState) => state.userList.data);
  let testList = Array(25).fill(apiDataList[0]);
  // console.log(apiDataList);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button
        onPress={() => {
          // @ts-ignore
          dispatch(getTodoAsync('1'));
        }}
        title={'Get todo'}
      />

      {apiDataList.length > 0 ? (
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

export default DetailsScreen;
