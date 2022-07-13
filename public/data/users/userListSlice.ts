import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// TS
export type User = {
  profile: userProfile;
  interaction: userInteraction;
  connectionStatus: userConnectionStatus;
};
type userProfile = {
  name: string;
  age: number;
  picture: string;
};
type userInteraction = {
  isLiked: boolean;
  swipeDirection: string;
  isBlocked: boolean;
};
type userConnectionStatus = {
  onlineStatus: string;
  lastOnlineTimeOut: string;
};
export type userListState = {
  data: any;
  users: User[];
  loading: boolean;
  error: boolean;
};

// State
const initialState: userListState = {
  data: [],

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
        swipeDirection: '',
        isBlocked: false,
      },
      connectionStatus: {
        onlineStatus: 'disconnected',
        lastOnlineTimeOut: 'Yesterday',
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
        swipeDirection: '',
        isBlocked: false,
      },
      connectionStatus: {
        onlineStatus: 'online',
        lastOnlineTimeOut: '',
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
        swipeDirection: '',
        isBlocked: false,
      },
      connectionStatus: {
        onlineStatus: 'disconnected',
        lastOnlineTimeOut: 'Yesterday',
      },
    },
  ],
  loading: false,
  error: false,
};

// Redux toolkit State, Reducers
const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {
    swipeUser: (state, action) => {
      state.users.map(user => {
        if (user.profile.name === action.payload.userName) {
          user.interaction.swipeDirection = action.payload.decision;
        }
      });
      // console.log(state.users);
    },

    getTodo: (state, action) => {
      state.data = [action.payload];
      // console.log(action.payload);
    },
  },
});



// const API_URL = 'https://jsonplaceholder.typicode.com/users';
const API_URL = '../db/users.json';
console.log(API_URL);
export const getTodoAsync =
  (data: any) => async (dispatch: (arg0: any) => void) => {
    try {
      // const response = await axios.get(`${API_URL}/`);
      const response = await axios.get('../db/userData.json');
      // const response = await axios.get(`${API_URL}/${data}`);
      dispatch(getTodo(response.data));
      // console.log(response.data);
    } catch (err) {
      // @ts-ignore
      throw new Error(err);
    }
  };

// Exports
export const {swipeUser, getTodo} = userListSlice.actions;
export default userListSlice.reducer;
