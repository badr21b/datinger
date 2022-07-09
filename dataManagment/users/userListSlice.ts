import {createSlice} from '@reduxjs/toolkit';

export type User = {
  name: string;
  age: number;
};

export type userListState = {
  users: User[];
  loading: boolean;
  error: boolean;
};

const initialState: userListState = {
  users: [
    // {name: 'Badoulou', age: 33}
  ],
  loading: false,
  error: false,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
});

export default userListSlice.reducer;
