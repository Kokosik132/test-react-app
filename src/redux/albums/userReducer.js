import { createSlice } from '@reduxjs/toolkit';
import { getAllAlbums } from './operations';

const initialState = {
  userAlbums: [],
};

export const usersAlbumsSlice = createSlice({
  name: 'allUserAlbums',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(getAllAlbums.pending, state => {})
      .addCase(getAllAlbums.fulfilled, (state, action) => {
        state.userAlbums = action.payload;
      })
      .addCase(getAllAlbums.rejected, state => {});
  },
});
