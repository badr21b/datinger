import {Button, Text, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {refreshList} from '../../../data/users/userListSlice';

const NoCards = ({handleRefreshList}: any) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>No More profiles to swipe</Text>
      <Button
        title={'Refresh list'}
        onPress={() => {
          handleRefreshList();
          dispatch(refreshList({}));
          console.log('refresh list');
        }}
      />
    </View>
  );
};

export default NoCards;
