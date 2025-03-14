import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songs/songsSlice';

const store = configureStore({
  reducer: {
    songs: songsReducer, // Add the songsReducer to the store
  },
});

export default store;