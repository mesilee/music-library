import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action) => {
      state.loading = false;
      state.songs = action.payload;
    },
    fetchSongsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createSongRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createSongSuccess: (state, action) => {
      state.loading = false;
      state.songs.push(action.payload);
    },
    createSongFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    // ... other imports
updateSongRequest: (state) => {
  state.loading = true;
  state.error = null;
},
updateSongSuccess: (state, action) => {
  state.loading = false;
  state.songs = state.songs.map((song) =>
    song.id === action.payload.id ? action.payload : song
  );
},
updateSongFailure: (state, action) => {
  state.loading = false;
  state.error = action.payload;
},
  },
});

export const {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest, // Add updateSongRequest to the export
  updateSongSuccess, // Add updateSongSuccess to the export
  updateSongFailure, // Add updateSongFailure to the export
} = songsSlice.actions;

export default songsSlice.reducer;