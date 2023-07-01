import { createSlice } from '@reduxjs/toolkit';
import {
  signUp,
  signIn,
  signOut,
  refreshUser,
  updateAvatar,
} from './authOperations';

export const auth = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null, avatar: '' },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
    [signUp.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [signIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },

    [signOut.fulfilled]: state => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },

    [refreshUser.pending]: state => {
      state.isRefreshing = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.isRefreshing = false;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [refreshUser.rejected]: state => {
      state.isRefreshing = false;
    },
    [updateAvatar.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.user.avatar = action.payload;
    },
  },
});
