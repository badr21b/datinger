import {createSlice} from '@reduxjs/toolkit';

export type User = {
  profile: userProfile;
  interaction: userInteraction;
};
type userProfile = {
  name: string;
  age: number;
  picture: string;
};
type userInteraction = {
  isLiked: boolean;
  isBlocked: boolean;
};

export type userListState = {
  users: User[];
  loading: boolean;
  error: boolean;
};

const initialState: userListState = {
  users: [
    {
      profile: {
        name: 'Maeva',
        age: 33,
        picture:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80',
      },
      interaction: {
        isLiked: false,
        isBlocked: false,
      },
    },
    {
      profile: {
        name: 'Christine',
        age: 33,
        picture:
          'https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjB3b21hbnxlbnwwfHwwfHw%3D&w=1000&q=80',
      },
      interaction: {
        isLiked: false,
        isBlocked: false,
      },
    },
    {
      profile: {
        name: 'Elie',
        age: 33,
        picture:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80',
      },
      interaction: {
        isLiked: false,
        isBlocked: false,
      },
    },
  ],
  loading: false,
  error: false,
};

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {
    swipeUser: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default userListSlice.reducer;
