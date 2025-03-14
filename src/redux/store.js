import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './songs/songsSlice';
import createSagaMiddleware from 'redux-saga';
import songsSaga from './songs/songsSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    songs: songsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(songsSaga);

export default store;