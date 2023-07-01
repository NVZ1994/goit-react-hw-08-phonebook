import { Notify } from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'service/connectionsapi';
import axios from 'axios';

export const signUp = createAsyncThunk('auth/signUp', async data => {
  try {
    const response = await api.signUp(data);
    Notify.success(`${response.user.name}, cogratulations! Now are signed up.`);
    return response;
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const signIn = createAsyncThunk('auth/signIn', async data => {
  try {
    const response = await api.signIn(data);
    Notify.success(`${response.user.name}, welcome back to your phonebook`);
    return response;
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const signOut = createAsyncThunk('auth/signOut', async () => {
  try {
    await api.signOut();
    Notify.failure(`See you later.`);
  } catch (error) {
    Notify.failure(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await api.refreshUser(token);
      return response;
    } catch (error) {
      Notify.failure(error.message);
    }
  }
);

export const updateAvatar = createAsyncThunk('auth/avatar', async file => {
  try {
    const formData = new FormData();
    formData.append('avatar', file);
    const { data } = await axios.patch('/users/avatar', formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
    console.log(data.avatar);
    return data.avatar;
  } catch (error) {
    console.log(error);
  }
});
