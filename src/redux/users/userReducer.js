import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers } from './operations';

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,

  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, state => {
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, state => {});
  },
});
