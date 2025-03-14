import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchSongsRequest, fetchSongsSuccess, fetchSongsFailure } from './songsSlice';
import { getSongs } from '../../services/api'; // We'll create this later

function* fetchSongsSaga() {
  try {
    const songs = yield call(getSongs); // Call the API function
    yield put(fetchSongsSuccess(songs)); // Dispatch success action
  } catch (error) {
    yield put(fetchSongsFailure(error.message)); // Dispatch failure action
  }
}

function* songsSaga() {
  yield takeLatest(fetchSongsRequest.type, fetchSongsSaga);
}

export default songsSaga;