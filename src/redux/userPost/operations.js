import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAllPost = createAsyncThunk(
  'userPost/getUserPost',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/posts`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
