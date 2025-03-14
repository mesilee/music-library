import { takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongRequest,
  createSongSuccess,
  createSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
} from './songsSlice';
import { getSongs, createSong, updateSong } from '../../services/api';

function* fetchSongsSaga() {
  try {
    const songs = yield call(getSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* createSongSaga(action) {
  try {
    const song = yield call(createSong, action.payload);
    yield put(createSongSuccess(song));
  } catch (error) {
    yield put(createSongFailure(error.message));
  }
}

function* updateSongSaga(action) {
  try {
    const song = yield call(updateSong, action.payload);
    yield put(updateSongSuccess(song));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
  yield takeLatest(createSongRequest.type, createSongSaga);
  yield takeLatest(updateSongRequest.type, updateSongSaga);
}

export default songsSaga;