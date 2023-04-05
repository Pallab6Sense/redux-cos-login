import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('user/login', async (credentials) => {
  const response = await axios.post(
    'https://test-api.chargeonsite.com/user/login/admin',
    credentials
  );
  return response.data;
});

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (token) => {
    // console.log('redux token',token);
    const response = await axios.get(
      'https://test-api.chargeonsite.com/user/me',
      { headers: { "Authorization": `Bearer ${token}` } }
    );
    return response.data;
  }
);
