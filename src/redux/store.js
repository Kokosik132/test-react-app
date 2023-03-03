import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { usersAlbumsSlice } from './albums/userReducer';

import { usersPostSlice } from './userPost/userReducer';
import { usersSlice } from './users/userReducer';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const rootReducer = combineReducers({
  users: usersSlice.reducer,
  userPost: usersPostSlice.reducer,
  allUserAlbums: usersAlbumsSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware,
});
