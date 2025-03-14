import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songs/songsSlice'; // Remove the "songs/" part

const store = configureStore({
  reducer: {
    songs: songsReducer, // Add the songsReducer to the store
  },
});

export default store;