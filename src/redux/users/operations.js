import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getAllUsers = createAsyncThunk(
  'users/getUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/users`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

