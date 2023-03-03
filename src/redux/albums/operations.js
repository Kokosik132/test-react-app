import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getAllAlbums = createAsyncThunk(
  'allUserAlbums/getUserAlbums',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/albums/`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
