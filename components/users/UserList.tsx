import React, {FunctionComponent} from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../data/store';
import UserListItem from './UserListItem';

const UserList: FunctionComponent = () => {
  const screenState = useSelector((state: RootState) => state.userList);

  return (
    <>
      {screenState.loading && <Text>LOADING...</Text>}
      {screenState.error && <Text>Error!</Text>}
      {!screenState.loading && !screenState.error && <Text>Default</Text>}

      {screenState.users.length > 0 ? (
        <FlatList
          data={screenState.users}
          keyExtractor={(_, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <>
                <UserListItem user={item} />
              </>
            );
          }}
        />
      ) : (
        <Text>Empty list</Text>
      )}
    </>
  );
};

export default UserList;
