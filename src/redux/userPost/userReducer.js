import { createSlice } from '@reduxjs/toolkit';
import { getAllPost } from './operations';

const initialState = {
  userPost: [],
};

export const usersPostSlice = createSlice({
  name: 'userPost',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(getAllPost.pending, state => {})
      .addCase(getAllPost.fulfilled, (state, action) => {
        state.userPost = action.payload;
      })
      .addCase(getAllPost.rejected, state => {});
  },
});
