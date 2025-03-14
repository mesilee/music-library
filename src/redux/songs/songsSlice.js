import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {}, // We'll add our reducers here later
});

export default songsSlice.reducer;